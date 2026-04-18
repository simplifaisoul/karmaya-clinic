import { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../context/AuthContext';
import { MessageCircle } from 'lucide-react';

interface NotificationBellProps {
    onClick: () => void;
    className?: string;
}

const NotificationBell = ({ onClick, className = '' }: NotificationBellProps) => {
    const { user } = useAuth();
    const [totalUnread, setTotalUnread] = useState(0);

    useEffect(() => {
        if (!user) { setTotalUnread(0); return; }

        const q = query(
            collection(db, 'conversations'),
            where('participants', 'array-contains', user.uid)
        );

        const unsub = onSnapshot(q, (snap) => {
            let count = 0;
            snap.docs.forEach(d => {
                const data = d.data();
                count += data.unread?.[user.uid] || 0;
            });
            setTotalUnread(count);
        }, () => setTotalUnread(0));

        return unsub;
    }, [user]);

    if (!user) return null;

    return (
        <button
            onClick={onClick}
            className={`relative p-2 rounded-lg transition-colors hover:bg-neutral-100 ${className}`}
            aria-label="Messages"
        >
            <MessageCircle className="w-5 h-5 text-neutral-600" />
            {totalUnread > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-red-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center px-1 animate-pulse">
                    {totalUnread > 99 ? '99+' : totalUnread}
                </span>
            )}
        </button>
    );
};

export default NotificationBell;
