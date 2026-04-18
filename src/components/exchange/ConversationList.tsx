import { useEffect, useState } from 'react';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../context/AuthContext';
import { MessageCircle, X } from 'lucide-react';

interface Conversation {
    id: string;
    participants: string[];
    postId: string;
    postTitle: string;
    postType: string;
    lastMessage: string;
    lastMessageAt: any;
    unread: Record<string, number>;
}

interface ConversationListProps {
    onSelectConversation: (id: string) => void;
    selectedId?: string;
    onClose: () => void;
}

const ConversationList = ({ onSelectConversation, selectedId, onClose }: ConversationListProps) => {
    const { user } = useAuth();
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) return;

        const q = query(
            collection(db, 'conversations'),
            where('participants', 'array-contains', user.uid),
            orderBy('lastMessageAt', 'desc')
        );

        const unsub = onSnapshot(q, (snap) => {
            const convos = snap.docs.map(d => ({ id: d.id, ...d.data() } as Conversation));
            setConversations(convos);
            setLoading(false);
        }, (err) => {
            console.error('Error loading conversations:', err);
            setLoading(false);
        });

        return unsub;
    }, [user]);

    const timeAgo = (ts: any) => {
        if (!ts?.toDate) return '';
        const diff = Date.now() - ts.toDate().getTime();
        const mins = Math.floor(diff / 60000);
        if (mins < 1) return 'now';
        if (mins < 60) return `${mins}m`;
        const hrs = Math.floor(mins / 60);
        if (hrs < 24) return `${hrs}h`;
        return `${Math.floor(hrs / 24)}d`;
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-neutral-100">
                <h3 className="font-bold text-neutral-900 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-blue-500" />
                    Messages
                </h3>
                <button onClick={onClose} className="p-1.5 hover:bg-neutral-100 rounded-lg transition-colors lg:hidden">
                    <X className="w-4 h-4 text-neutral-500" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto">
                {loading ? (
                    <div className="p-4 text-center text-sm text-neutral-400">Loading...</div>
                ) : conversations.length === 0 ? (
                    <div className="p-6 text-center">
                        <MessageCircle className="w-10 h-10 text-neutral-200 mx-auto mb-2" />
                        <p className="text-sm text-neutral-400">No conversations yet</p>
                        <p className="text-xs text-neutral-300 mt-1">Message a service poster to start</p>
                    </div>
                ) : (
                    conversations.map(conv => {
                        const unread = conv.unread?.[user!.uid] || 0;
                        return (
                            <button
                                key={conv.id}
                                onClick={() => onSelectConversation(conv.id)}
                                className={`w-full text-left p-3.5 border-b border-neutral-50 hover:bg-blue-50/50 transition-colors ${selectedId === conv.id ? 'bg-blue-50' : ''
                                    }`}
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center gap-1.5">
                                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${conv.postType === 'offer'
                                                ? 'bg-green-50 text-green-600'
                                                : 'bg-amber-50 text-amber-600'
                                                }`}>
                                                {conv.postType}
                                            </span>
                                            <span className="text-xs font-bold text-neutral-800 truncate">{conv.postTitle}</span>
                                        </div>
                                        {conv.lastMessage && (
                                            <p className="text-xs text-neutral-400 mt-1 truncate">{conv.lastMessage}</p>
                                        )}
                                    </div>
                                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                                        <span className="text-[10px] text-neutral-300">{timeAgo(conv.lastMessageAt)}</span>
                                        {unread > 0 && (
                                            <span className="w-5 h-5 bg-blue-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                                                {unread > 9 ? '9+' : unread}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </button>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default ConversationList;
export type { Conversation };
