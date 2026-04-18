import { useState } from 'react';
import { collection, addDoc, query, where, getDocs, serverTimestamp, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../context/AuthContext';
import { MapPin, MessageCircle, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

interface ServicePost {
    id: string;
    userId: string;
    userName: string;
    userPhoto: string;
    type: 'offer' | 'request';
    category: string;
    title: string;
    description: string;
    city: string;
    phone: string;
    email: string;
    photos: string[];
    status: string;
    createdAt: any;
}

interface ServiceCardProps {
    post: ServicePost;
    onOpenChat: (conversationId: string) => void;
    onDeleted: () => void;
}

const ServiceCard = ({ post, onOpenChat, onDeleted }: ServiceCardProps) => {
    const { user } = useAuth();
    const [photoIndex, setPhotoIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const isOwner = user?.uid === post.userId;

    const handleMessage = async () => {
        if (!user) return;
        setLoading(true);
        try {
            // Check if conversation already exists between these two users for this post
            const q = query(
                collection(db, 'conversations'),
                where('postId', '==', post.id),
                where('participants', 'array-contains', user.uid)
            );
            const snap = await getDocs(q);

            let convoId = '';
            // Find the conversation that includes both participants
            for (const d of snap.docs) {
                const data = d.data();
                if (data.participants.includes(post.userId)) {
                    convoId = d.id;
                    break;
                }
            }

            if (!convoId) {
                // Create new conversation
                const convoRef = await addDoc(collection(db, 'conversations'), {
                    participants: [user.uid, post.userId],
                    postId: post.id,
                    postTitle: post.title,
                    postType: post.type,
                    lastMessage: '',
                    lastMessageAt: serverTimestamp(),
                    unread: { [user.uid]: 0, [post.userId]: 0 },
                    createdAt: serverTimestamp(),
                });
                convoId = convoRef.id;
            }

            onOpenChat(convoId);
        } catch (err) {
            console.error('Error opening conversation:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!confirm('Delete this post?')) return;
        setDeleting(true);
        try {
            await deleteDoc(doc(db, 'exchangePosts', post.id));
            onDeleted();
        } catch (err) {
            console.error('Error deleting post:', err);
        } finally {
            setDeleting(false);
        }
    };

    const timeAgo = (timestamp: any) => {
        if (!timestamp?.toDate) return '';
        const diff = Date.now() - timestamp.toDate().getTime();
        const mins = Math.floor(diff / 60000);
        if (mins < 60) return `${mins}m ago`;
        const hrs = Math.floor(mins / 60);
        if (hrs < 24) return `${hrs}h ago`;
        const days = Math.floor(hrs / 24);
        return `${days}d ago`;
    };

    return (
        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow group">
            {/* Photo Carousel */}
            {post.photos && post.photos.length > 0 && (
                <div className="relative aspect-[16/10] bg-neutral-100">
                    <img
                        src={post.photos[photoIndex]}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    {post.photos.length > 1 && (
                        <>
                            <button
                                onClick={() => setPhotoIndex(i => (i - 1 + post.photos.length) % post.photos.length)}
                                className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/80 rounded-full flex items-center justify-center shadow hover:bg-white transition-colors"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setPhotoIndex(i => (i + 1) % post.photos.length)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/80 rounded-full flex items-center justify-center shadow hover:bg-white transition-colors"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                                {post.photos.map((_, i) => (
                                    <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === photoIndex ? 'bg-white' : 'bg-white/50'}`} />
                                ))}
                            </div>
                        </>
                    )}
                    <span className={`absolute top-2 left-2 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${post.type === 'offer'
                        ? 'bg-green-500 text-white'
                        : 'bg-amber-500 text-white'
                        }`}>
                        {post.type}
                    </span>
                </div>
            )}

            <div className="p-4">
                {/* No-photo badge */}
                {(!post.photos || post.photos.length === 0) && (
                    <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide mb-2 ${post.type === 'offer'
                        ? 'bg-green-50 text-green-600'
                        : 'bg-amber-50 text-amber-600'
                        }`}>
                        {post.type}
                    </span>
                )}

                {/* Category & Time */}
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">{post.category}</span>
                    <span className="text-[11px] text-neutral-400">{timeAgo(post.createdAt)}</span>
                </div>

                <h3 className="font-bold text-neutral-900 mb-1 line-clamp-1">{post.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-3 line-clamp-2">{post.description}</p>

                {/* User & Location */}
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white text-[10px] font-bold overflow-hidden flex-shrink-0">
                        {post.userPhoto ? (
                            <img src={post.userPhoto} alt="" className="w-full h-full object-cover" />
                        ) : (
                            post.userName?.charAt(0)?.toUpperCase() || '?'
                        )}
                    </div>
                    <div className="min-w-0">
                        <div className="text-xs font-semibold text-neutral-800 truncate">{post.userName}</div>
                        {post.city && (
                            <div className="text-[11px] text-neutral-400 flex items-center gap-0.5">
                                <MapPin className="w-3 h-3" /> {post.city}
                            </div>
                        )}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                    {user && !isOwner && (
                        <button
                            onClick={handleMessage}
                            disabled={loading}
                            className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50"
                        >
                            <MessageCircle className="w-3.5 h-3.5" />
                            {loading ? 'Opening...' : 'Message'}
                        </button>
                    )}
                    {isOwner && (
                        <button
                            onClick={handleDelete}
                            disabled={deleting}
                            className="flex-1 py-2 bg-red-50 text-red-600 rounded-lg text-xs font-bold hover:bg-red-100 transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50"
                        >
                            <Trash2 className="w-3.5 h-3.5" />
                            {deleting ? 'Deleting...' : 'Delete'}
                        </button>
                    )}
                    {!user && (
                        <a
                            href="/signin"
                            className="flex-1 py-2 bg-neutral-100 text-neutral-600 rounded-lg text-xs font-bold hover:bg-neutral-200 transition-colors text-center"
                        >
                            Sign in to message
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
export type { ServicePost };
