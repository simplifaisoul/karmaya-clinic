import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { doc, updateDoc, collection, query, where, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { db } from '../firebase';
import { motion } from 'framer-motion';
import { User, Mail, MapPin, Phone, FileText, ArrowRightLeft, LogOut, Save, Plus, X, MessageCircle, Sparkles } from 'lucide-react';

interface ExchangePost {
    id: string;
    title: string;
    category: string;
    type: 'offer' | 'request';
    status: string;
    createdAt: any;
}

interface Conversation {
    id: string;
    postTitle: string;
    postType: string;
    lastMessage: string;
    lastMessageAt: any;
    unread: Record<string, number>;
}

const Dashboard = () => {
    const { user, profile, logout, refreshProfile, loading } = useAuth();
    const navigate = useNavigate();
    const [editing, setEditing] = useState(false);
    const [saving, setSaving] = useState(false);
    const [success, setSuccess] = useState('');

    // Form state
    const [displayName, setDisplayName] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [bio, setBio] = useState('');
    const [servicesOffered, setServicesOffered] = useState<string[]>([]);
    const [servicesNeeded, setServicesNeeded] = useState<string[]>([]);
    const [newOffered, setNewOffered] = useState('');
    const [newNeeded, setNewNeeded] = useState('');

    // Real exchange data
    const [myPosts, setMyPosts] = useState<ExchangePost[]>([]);
    const [recentConvos, setRecentConvos] = useState<Conversation[]>([]);

    useEffect(() => {
        if (!loading && !user) navigate('/signin');
    }, [user, loading, navigate]);

    useEffect(() => {
        if (profile) {
            setDisplayName(profile.displayName || '');
            setPhone(profile.phone || '');
            setLocation(profile.location || '');
            setBio(profile.bio || '');
            setServicesOffered(profile.servicesOffered || []);
            setServicesNeeded(profile.servicesNeeded || []);
        }
    }, [profile]);

    // Load user's exchange posts
    useEffect(() => {
        if (!user) return;
        const q = query(
            collection(db, 'exchangePosts'),
            where('userId', '==', user.uid),
            orderBy('createdAt', 'desc'),
            limit(5)
        );
        const unsub = onSnapshot(q, (snap) => {
            setMyPosts(snap.docs.map(d => ({ id: d.id, ...d.data() } as ExchangePost)));
        }, () => {});
        return unsub;
    }, [user]);

    // Load recent conversations
    useEffect(() => {
        if (!user) return;
        const q = query(
            collection(db, 'conversations'),
            where('participants', 'array-contains', user.uid),
            orderBy('lastMessageAt', 'desc'),
            limit(3)
        );
        const unsub = onSnapshot(q, (snap) => {
            setRecentConvos(snap.docs.map(d => ({ id: d.id, ...d.data() } as Conversation)));
        }, () => {});
        return unsub;
    }, [user]);

    const handleSave = async () => {
        if (!user) return;
        setSaving(true);
        try {
            await updateDoc(doc(db, 'users', user.uid), {
                displayName, phone, location, bio, servicesOffered, servicesNeeded,
            });
            await refreshProfile();
            setEditing(false);
            setSuccess('Profile updated successfully!');
            setTimeout(() => setSuccess(''), 3000);
        } catch (err) {
            console.error(err);
        }
        setSaving(false);
    };

    const addService = (type: 'offered' | 'needed') => {
        if (type === 'offered' && newOffered.trim()) {
            setServicesOffered([...servicesOffered, newOffered.trim()]);
            setNewOffered('');
        } else if (type === 'needed' && newNeeded.trim()) {
            setServicesNeeded([...servicesNeeded, newNeeded.trim()]);
            setNewNeeded('');
        }
    };

    const removeService = (type: 'offered' | 'needed', index: number) => {
        if (type === 'offered') setServicesOffered(servicesOffered.filter((_, i) => i !== index));
        else setServicesNeeded(servicesNeeded.filter((_, i) => i !== index));
    };

    const totalUnread = recentConvos.reduce((sum, c) => sum + (c.unread?.[user?.uid || ''] || 0), 0);

    const timeAgo = (ts: any) => {
        if (!ts?.toDate) return '';
        const diff = Date.now() - ts.toDate().getTime();
        const mins = Math.floor(diff / 60000);
        if (mins < 60) return `${mins}m ago`;
        const hrs = Math.floor(mins / 60);
        if (hrs < 24) return `${hrs}h ago`;
        return `${Math.floor(hrs / 24)}d ago`;
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="w-8 h-8 border-3 border-blue-600/30 border-t-blue-600 rounded-full animate-spin" />
            </div>
        );
    }

    if (!user || !profile) return null;

    return (
        <div className="min-h-screen bg-neutral-50 pt-24 pb-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
                                {profile.photoURL ? (
                                    <img src={profile.photoURL} alt="" className="w-full h-full object-cover" />
                                ) : (
                                    profile.displayName?.charAt(0)?.toUpperCase() || 'U'
                                )}
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-neutral-900">{profile.displayName || 'Member'}</h1>
                                <p className="text-sm text-neutral-500">{profile.email}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            {!editing ? (
                                <button onClick={() => setEditing(true)} className="px-5 py-2 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors">
                                    Edit Profile
                                </button>
                            ) : (
                                <button onClick={handleSave} disabled={saving} className="px-5 py-2 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50">
                                    <Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save'}
                                </button>
                            )}
                            <button onClick={async () => { await logout(); navigate('/'); }} className="px-5 py-2 bg-neutral-200 text-neutral-700 rounded-xl font-semibold text-sm hover:bg-neutral-300 transition-colors flex items-center gap-2">
                                <LogOut className="w-4 h-4" /> Sign Out
                            </button>
                        </div>
                    </div>

                    {success && (
                        <div className="mb-6 px-4 py-3 bg-blue-50 border border-blue-200 text-blue-700 rounded-xl text-sm font-medium">
                            ✅ {success}
                        </div>
                    )}

                    {/* Quick Actions Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {/* Exchange Center Card */}
                        <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 rounded-2xl p-6 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-2">
                                    <ArrowRightLeft className="w-5 h-5 text-blue-300" />
                                    <h2 className="text-lg font-bold">Exchange Center</h2>
                                </div>
                                <p className="text-sm text-slate-300 mb-4">Post services, browse offers, and connect with community members</p>
                                <div className="flex flex-wrap gap-2">
                                    <Link to="/exchange" className="px-4 py-2 bg-white text-slate-800 rounded-lg font-bold text-xs hover:bg-blue-50 transition-colors">
                                        Browse Services
                                    </Link>
                                    <Link to="/exchange" onClick={() => setTimeout(() => document.querySelector<HTMLButtonElement>('[data-post-btn]')?.click(), 500)} className="px-4 py-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 rounded-lg font-semibold text-xs hover:bg-blue-500/30 transition-colors">
                                        + Post Service
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Messages Card */}
                        <div className="bg-white rounded-2xl border border-neutral-100 p-6 relative overflow-hidden">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                                        <MessageCircle className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <h2 className="text-lg font-bold text-neutral-900">Messages</h2>
                                    {totalUnread > 0 && (
                                        <span className="px-2 py-0.5 bg-red-500 text-white rounded-full text-[10px] font-bold">{totalUnread} new</span>
                                    )}
                                </div>
                                <Link to="/exchange?messages=true" className="text-xs font-semibold text-blue-600 hover:text-blue-700">View All →</Link>
                            </div>
                            {recentConvos.length === 0 ? (
                                <p className="text-sm text-neutral-400">No conversations yet. Message someone on the Exchange!</p>
                            ) : (
                                <div className="space-y-2">
                                    {recentConvos.map(conv => {
                                        const unread = conv.unread?.[user.uid] || 0;
                                        return (
                                            <Link
                                                key={conv.id}
                                                to="/exchange?messages=true"
                                                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-neutral-50 transition-colors group"
                                            >
                                                <div className="min-w-0 flex-1">
                                                    <div className="flex items-center gap-1.5">
                                                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${conv.postType === 'offer' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                                                            {conv.postType}
                                                        </span>
                                                        <span className="text-xs font-semibold text-neutral-800 truncate">{conv.postTitle}</span>
                                                    </div>
                                                    {conv.lastMessage && (
                                                        <p className="text-[11px] text-neutral-400 truncate mt-0.5">{conv.lastMessage}</p>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                                                    <span className="text-[10px] text-neutral-300">{timeAgo(conv.lastMessageAt)}</span>
                                                    {unread > 0 && (
                                                        <span className="w-5 h-5 bg-blue-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center">{unread}</span>
                                                    )}
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* My Exchange Posts */}
                    {myPosts.length > 0 && (
                        <div className="bg-white rounded-2xl border border-neutral-100 p-6 mb-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-blue-500" /> My Exchange Posts
                                </h2>
                                <Link to="/exchange" className="text-xs font-semibold text-blue-600 hover:text-blue-700">View All →</Link>
                            </div>
                            <div className="space-y-2">
                                {myPosts.map(post => (
                                    <div key={post.id} className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                                        <div className="flex items-center gap-2 min-w-0">
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${post.type === 'offer' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                                                {post.type}
                                            </span>
                                            <span className="text-sm font-semibold text-neutral-800 truncate">{post.title}</span>
                                        </div>
                                        <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                                            <span className="text-[10px] text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded">{post.category}</span>
                                            <span className="text-[10px] text-neutral-300">{timeAgo(post.createdAt)}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Profile Info */}
                        <div className="bg-white rounded-2xl border border-neutral-100 p-6">
                            <h2 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
                                <User className="w-5 h-5 text-blue-500" /> Profile Info
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-semibold text-neutral-500 mb-1 uppercase tracking-wider">Name</label>
                                    {editing ? (
                                        <input value={displayName} onChange={e => setDisplayName(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                                    ) : (
                                        <p className="text-neutral-900 text-sm">{profile.displayName || '—'}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-neutral-500 mb-1 uppercase tracking-wider flex items-center gap-1"><Mail className="w-3 h-3" /> Email</label>
                                    <p className="text-neutral-900 text-sm">{profile.email}</p>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-neutral-500 mb-1 uppercase tracking-wider flex items-center gap-1"><Phone className="w-3 h-3" /> Phone</label>
                                    {editing ? (
                                        <input value={phone} onChange={e => setPhone(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your phone number" />
                                    ) : (
                                        <p className="text-neutral-900 text-sm">{profile.phone || '—'}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-neutral-500 mb-1 uppercase tracking-wider flex items-center gap-1"><MapPin className="w-3 h-3" /> Location</label>
                                    {editing ? (
                                        <input value={location} onChange={e => setLocation(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="City, Province" />
                                    ) : (
                                        <p className="text-neutral-900 text-sm">{profile.location || '—'}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-neutral-500 mb-1 uppercase tracking-wider flex items-center gap-1"><FileText className="w-3 h-3" /> Bio</label>
                                    {editing ? (
                                        <textarea value={bio} onChange={e => setBio(e.target.value)} rows={3} className="w-full px-3 py-2 rounded-lg border border-neutral-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none" placeholder="Tell us about yourself..." />
                                    ) : (
                                        <p className="text-neutral-900 text-sm">{profile.bio || '—'}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="space-y-6">
                            {/* Services Offered */}
                            <div className="bg-white rounded-2xl border border-neutral-100 p-6">
                                <h2 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
                                    <span className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 text-xs font-bold">+</span>
                                    Services I Can Offer
                                </h2>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {servicesOffered.map((s, i) => (
                                        <span key={i} className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold">
                                            {s}
                                            {editing && <button onClick={() => removeService('offered', i)}><X className="w-3 h-3" /></button>}
                                        </span>
                                    ))}
                                    {servicesOffered.length === 0 && <span className="text-sm text-neutral-400">No services listed yet</span>}
                                </div>
                                {editing && (
                                    <div className="flex gap-2">
                                        <input value={newOffered} onChange={e => setNewOffered(e.target.value)} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addService('offered'))} className="flex-1 px-3 py-2 rounded-lg border border-neutral-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g., Carpentry, Teaching..." />
                                        <button onClick={() => addService('offered')} className="p-2 bg-emerald-100 text-emerald-600 rounded-lg hover:bg-emerald-200 transition-colors"><Plus className="w-4 h-4" /></button>
                                    </div>
                                )}
                            </div>

                            {/* Services Needed */}
                            <div className="bg-white rounded-2xl border border-neutral-100 p-6">
                                <h2 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
                                    <span className="w-6 h-6 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 text-xs font-bold">?</span>
                                    Services I Need
                                </h2>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {servicesNeeded.map((s, i) => (
                                        <span key={i} className="inline-flex items-center gap-1 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-xs font-semibold">
                                            {s}
                                            {editing && <button onClick={() => removeService('needed', i)}><X className="w-3 h-3" /></button>}
                                        </span>
                                    ))}
                                    {servicesNeeded.length === 0 && <span className="text-sm text-neutral-400">No services listed yet</span>}
                                </div>
                                {editing && (
                                    <div className="flex gap-2">
                                        <input value={newNeeded} onChange={e => setNewNeeded(e.target.value)} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addService('needed'))} className="flex-1 px-3 py-2 rounded-lg border border-neutral-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g., Medical, Dental..." />
                                        <button onClick={() => addService('needed')} className="p-2 bg-amber-100 text-amber-600 rounded-lg hover:bg-amber-200 transition-colors"><Plus className="w-4 h-4" /></button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Dashboard;
