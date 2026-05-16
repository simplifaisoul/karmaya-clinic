import { useState } from 'react';
import { collection, addDoc, query, where, getDocs, serverTimestamp, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../context/AuthContext';
import { MapPin, MessageCircle, Trash2, ChevronLeft, ChevronRight, Clock } from 'lucide-react';

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
            const q = query(
                collection(db, 'conversations'),
                where('postId', '==', post.id),
                where('participants', 'array-contains', user.uid)
            );
            const snap = await getDocs(q);

            let convoId = '';
            for (const d of snap.docs) {
                const data = d.data();
                if (data.participants.includes(post.userId)) {
                    convoId = d.id;
                    break;
                }
            }

            if (!convoId) {
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
        if (!confirm('Are you sure you want to delete this post? This action cannot be undone.')) return;
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
        <div className="bg-white rounded-3xl border border-neutral-100 overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 group flex flex-col h-full">
            {/* Photo Carousel */}
            {post.photos && post.photos.length > 0 && (
                <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                    <img
                        src={post.photos[photoIndex]}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Gradient Overlay for better contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                    {post.photos.length > 1 && (
                        <>
                            <button
                                onClick={(e) => { e.preventDefault(); setPhotoIndex(i => (i - 1 + post.photos.length) % post.photos.length); }}
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={(e) => { e.preventDefault(); setPhotoIndex(i => (i + 1) % post.photos.length); }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                                {post.photos.map((_, i) => (
                                    <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === photoIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`} />
                                ))}
                            </div>
                        </>
                    )}
                    
                    <div className="absolute top-3 left-3 flex gap-2">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase shadow-lg backdrop-blur-md ${
                            post.type === 'offer' ? 'bg-green-500/90 text-white border border-green-400/50' : 'bg-amber-500/90 text-white border border-amber-400/50'
                        }`}>
                            {post.type}
                        </span>
                    </div>
                </div>
            )}

            <div className="p-6 flex flex-col flex-grow">
                {/* Header info (Category & Time) */}
                <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-100/50">
                        {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-medium text-neutral-400">
                        <Clock className="w-3 h-3" /> {timeAgo(post.createdAt)}
                    </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-neutral-900 mb-2 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">{post.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-6 line-clamp-3 flex-grow">{post.description}</p>

                {/* User & Actions Container */}
                <div className="mt-auto pt-5 border-t border-neutral-100/80">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-white text-xs font-bold overflow-hidden shadow-sm flex-shrink-0">
                                {post.userPhoto ? (
                                    <img src={post.userPhoto} alt="" className="w-full h-full object-cover" />
                                ) : (
                                    post.userName?.charAt(0)?.toUpperCase() || '?'
                                )}
                            </div>
                            <div className="min-w-0">
                                <div className="text-xs font-bold text-neutral-900 truncate">{post.userName}</div>
                                {post.city && (
                                    <div className="text-[11px] font-medium text-neutral-400 flex items-center gap-1 mt-0.5">
                                        <MapPin className="w-3 h-3" /> <span className="truncate">{post.city}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                        {user && !isOwner && (
                            <button
                                onClick={handleMessage}
                                disabled={loading}
                                className="w-full py-2.5 bg-neutral-900 text-white rounded-xl text-sm font-bold hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-neutral-900/10 disabled:opacity-70 disabled:hover:bg-neutral-900"
                            >
                                <MessageCircle className="w-4 h-4" />
                                {loading ? 'Connecting...' : 'Send Message'}
                            </button>
                        )}
                        {isOwner && (
                            <button
                                onClick={handleDelete}
                                disabled={deleting}
                                className="w-full py-2.5 bg-red-50 text-red-600 border border-red-100 rounded-xl text-sm font-bold hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                <Trash2 className="w-4 h-4" />
                                {deleting ? 'Deleting...' : 'Delete Post'}
                            </button>
                        )}
                        {!user && (
                            <a
                                href="/signin"
                                className="w-full py-2.5 bg-neutral-100 text-neutral-600 rounded-xl text-sm font-bold hover:bg-neutral-200 transition-colors text-center"
                            >
                                Sign in to connect
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
export type { ServicePost };
