import { useEffect, useState, useRef } from 'react';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp, doc, updateDoc, increment } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebase';
import { useAuth } from '../../context/AuthContext';
import { ArrowLeft, Send, Image, X, Loader2 } from 'lucide-react';

interface Message {
    id: string;
    senderId: string;
    senderName: string;
    senderPhoto: string;
    text: string;
    imageUrl?: string;
    createdAt: any;
}

interface ChatWindowProps {
    conversationId: string;
    onBack: () => void;
}

const ChatWindow = ({ conversationId, onBack }: ChatWindowProps) => {
    const { user, profile } = useAuth();
    const [messages, setMessages] = useState<Message[]>([]);
    const [text, setText] = useState('');
    const [sending, setSending] = useState(false);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState('');
    const [convoMeta, setConvoMeta] = useState<any>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const fileRef = useRef<HTMLInputElement>(null);

    // Load conversation metadata
    useEffect(() => {
        const unsub = onSnapshot(doc(db, 'conversations', conversationId), (snap) => {
            if (snap.exists()) setConvoMeta({ id: snap.id, ...snap.data() });
        });
        return unsub;
    }, [conversationId]);

    // Mark conversation as read for current user
    useEffect(() => {
        if (!user || !conversationId) return;
        const convoRef = doc(db, 'conversations', conversationId);
        updateDoc(convoRef, { [`unread.${user.uid}`]: 0 }).catch(() => { });
    }, [conversationId, user, messages.length]);

    // Load messages in real-time
    useEffect(() => {
        const q = query(
            collection(db, 'conversations', conversationId, 'messages'),
            orderBy('createdAt', 'asc')
        );

        const unsub = onSnapshot(q, (snap) => {
            const msgs = snap.docs.map(d => ({ id: d.id, ...d.data() } as Message));
            setMessages(msgs);
            setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
        });

        return unsub;
    }, [conversationId]);

    const handleSend = async () => {
        if (!user || !profile) return;
        if (!text.trim() && !imageFile) return;

        setSending(true);
        try {
            let imageUrl = '';
            if (imageFile) {
                const storageRef = ref(storage, `messages/${conversationId}/${Date.now()}_${imageFile.name}`);
                const snap = await uploadBytes(storageRef, imageFile);
                imageUrl = await getDownloadURL(snap.ref);
            }

            // Add message
            await addDoc(collection(db, 'conversations', conversationId, 'messages'), {
                senderId: user.uid,
                senderName: profile.displayName || user.displayName || 'User',
                senderPhoto: profile.photoURL || user.photoURL || '',
                text: text.trim(),
                imageUrl,
                createdAt: serverTimestamp(),
            });

            // Update conversation metadata
            const otherUid = convoMeta?.participants?.find((p: string) => p !== user.uid);
            const convoRef = doc(db, 'conversations', conversationId);
            await updateDoc(convoRef, {
                lastMessage: text.trim() || '📷 Photo',
                lastMessageAt: serverTimestamp(),
                ...(otherUid ? { [`unread.${otherUid}`]: increment(1) } : {}),
            });

            setText('');
            setImageFile(null);
            setImagePreview('');
        } catch (err) {
            console.error('Error sending message:', err);
        } finally {
            setSending(false);
        }
    };

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const formatTime = (ts: any) => {
        if (!ts?.toDate) return '';
        return ts.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-neutral-100 bg-white">
                <button onClick={onBack} className="p-1.5 hover:bg-neutral-100 rounded-lg transition-colors">
                    <ArrowLeft className="w-4 h-4 text-neutral-600" />
                </button>
                <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-neutral-900 text-sm truncate">{convoMeta?.postTitle || 'Conversation'}</h3>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${convoMeta?.postType === 'offer' ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'
                        }`}>
                        {convoMeta?.postType || 'exchange'}
                    </span>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-neutral-50/50">
                {messages.length === 0 && (
                    <div className="text-center py-8">
                        <p className="text-sm text-neutral-400">No messages yet. Say hello! 👋</p>
                    </div>
                )}
                {messages.map(msg => {
                    const isMe = msg.senderId === user?.uid;
                    return (
                        <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[75%] ${isMe ? 'order-2' : 'order-1'}`}>
                                {!isMe && (
                                    <div className="flex items-center gap-1.5 mb-1">
                                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 overflow-hidden flex items-center justify-center text-white text-[8px] font-bold flex-shrink-0">
                                            {msg.senderPhoto ? (
                                                <img src={msg.senderPhoto} alt="" className="w-full h-full object-cover" />
                                            ) : msg.senderName?.charAt(0)?.toUpperCase()}
                                        </div>
                                        <span className="text-[10px] font-semibold text-neutral-500">{msg.senderName}</span>
                                    </div>
                                )}
                                <div className={`rounded-2xl px-3.5 py-2.5 ${isMe
                                    ? 'bg-blue-600 text-white rounded-tr-md'
                                    : 'bg-white border border-neutral-200 text-neutral-800 rounded-tl-md'
                                    }`}>
                                    {msg.imageUrl && (
                                        <img src={msg.imageUrl} alt="" className="rounded-lg mb-2 max-w-full max-h-48 object-cover" />
                                    )}
                                    {msg.text && <p className="text-sm leading-relaxed">{msg.text}</p>}
                                    <p className={`text-[10px] mt-1 ${isMe ? 'text-blue-200' : 'text-neutral-300'}`}>
                                        {formatTime(msg.createdAt)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div ref={bottomRef} />
            </div>

            {/* Image Preview */}
            {imagePreview && (
                <div className="p-2 border-t border-neutral-100 bg-white">
                    <div className="relative inline-block">
                        <img src={imagePreview} alt="" className="h-16 rounded-lg" />
                        <button
                            onClick={() => { setImageFile(null); setImagePreview(''); }}
                            className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center"
                        >
                            <X className="w-3 h-3" />
                        </button>
                    </div>
                </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-neutral-100 bg-white">
                <div className="flex items-end gap-2">
                    <button
                        onClick={() => fileRef.current?.click()}
                        className="p-2 hover:bg-neutral-100 rounded-lg transition-colors text-neutral-400 hover:text-blue-500 flex-shrink-0"
                    >
                        <Image className="w-5 h-5" />
                    </button>
                    <input ref={fileRef} type="file" accept="image/*" onChange={handleImageSelect} className="hidden" />

                    <input
                        type="text"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleSend()}
                        placeholder="Type a message..."
                        className="flex-1 px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-neutral-50"
                    />

                    <button
                        onClick={handleSend}
                        disabled={sending || (!text.trim() && !imageFile)}
                        className="p-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
                    >
                        {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;
