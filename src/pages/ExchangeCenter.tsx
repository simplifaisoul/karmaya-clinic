import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, addDoc, deleteDoc, doc, query, orderBy, limit, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft, ArrowRightLeft, Users, Shield, Zap, UserPlus,
    Search, Heart, Stethoscope, Wrench, GraduationCap, Sprout, UtensilsCrossed,
    Car, Monitor, Baby, Palette, HandHeart, TrendingUp, MessageCircle,
    Plus, X, Send, MapPin, Sparkles, Phone, Trash2, Mail
} from 'lucide-react';

interface ServicePost {
    id?: string;
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
    createdAt: any;
    status: 'open' | 'matched' | 'completed';
}

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const }
    })
};

const categories = [
    { name: 'Healthcare', icon: Stethoscope, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200' },
    { name: 'Construction', icon: Wrench, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
    { name: 'Teaching', icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
    { name: 'Agriculture', icon: Sprout, color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' },
    { name: 'Cooking', icon: UtensilsCrossed, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' },
    { name: 'Transportation', icon: Car, color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-200' },
    { name: 'Technology', icon: Monitor, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
    { name: 'Childcare', icon: Baby, color: 'text-pink-600', bg: 'bg-pink-50', border: 'border-pink-200' },
    { name: 'Arts & Crafts', icon: Palette, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
    { name: 'Community', icon: HandHeart, color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-200' },
];

const ExchangeCenter = () => {
    const { user, profile } = useAuth();
    const [posts, setPosts] = useState<ServicePost[]>([]);
    const [loadingPosts, setLoadingPosts] = useState(true);
    const [filterType, setFilterType] = useState<'all' | 'offer' | 'request'>('all');
    const [filterCategory, setFilterCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [showPostForm, setShowPostForm] = useState(false);
    const [deleting, setDeleting] = useState<string | null>(null);

    // Post form state
    const [postType, setPostType] = useState<'offer' | 'request'>('offer');
    const [postCategory, setPostCategory] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const [postDescription, setPostDescription] = useState('');
    const [postCity, setPostCity] = useState('');
    const [postPhone, setPostPhone] = useState('');
    const [postEmail, setPostEmail] = useState('');
    const [posting, setPosting] = useState(false);

    // Stats
    const [memberCount, setMemberCount] = useState(0);

    useEffect(() => {
        fetchPosts();
        fetchStats();
    }, []);

    // Pre-fill city/phone from profile when opening form
    useEffect(() => {
        if (showPostForm && profile) {
            if (!postCity) setPostCity(profile.location || '');
            if (!postPhone) setPostPhone(profile.phone || '');
            if (!postEmail) setPostEmail(profile.email || '');
        }
    }, [showPostForm, profile]);

    const fetchPosts = async () => {
        try {
            const q = query(collection(db, 'services'), orderBy('createdAt', 'desc'), limit(50));
            const snapshot = await getDocs(q);
            setPosts(snapshot.docs.map(d => ({ id: d.id, ...d.data() } as ServicePost)));
        } catch (err) {
            console.error('Error fetching posts:', err);
        }
        setLoadingPosts(false);
    };

    const fetchStats = async () => {
        try {
            const snapshot = await getDocs(collection(db, 'users'));
            setMemberCount(snapshot.size);
        } catch { /* ignore */ }
    };

    const handlePost = async () => {
        if (!user || !profile || !postTitle.trim() || !postCategory || !postCity.trim() || !postPhone.trim() || !postEmail.trim()) return;
        setPosting(true);
        try {
            await addDoc(collection(db, 'services'), {
                userId: user.uid,
                userName: profile.displayName || 'Community Member',
                userPhoto: profile.photoURL || '',
                type: postType,
                category: postCategory,
                title: postTitle.trim(),
                description: postDescription.trim(),
                city: postCity.trim(),
                phone: postPhone.trim(),
                email: postEmail.trim(),
                createdAt: serverTimestamp(),
                status: 'open',
            });
            setShowPostForm(false);
            setPostTitle('');
            setPostDescription('');
            setPostCategory('');
            setPostCity('');
            setPostPhone('');
            setPostEmail('');
            await fetchPosts();
        } catch (err) {
            console.error('Error posting service:', err);
        }
        setPosting(false);
    };

    const handleDelete = async (postId: string) => {
        if (!window.confirm('Are you sure you want to delete this listing?')) return;
        setDeleting(postId);
        try {
            await deleteDoc(doc(db, 'services', postId));
            setPosts(prev => prev.filter(p => p.id !== postId));
        } catch (err) {
            console.error('Error deleting post:', err);
        }
        setDeleting(null);
    };

    const filtered = posts.filter(p => {
        if (filterType !== 'all' && p.type !== filterType) return false;
        if (filterCategory !== 'all' && p.category !== filterCategory) return false;
        if (searchTerm && !p.title.toLowerCase().includes(searchTerm.toLowerCase()) && !p.description.toLowerCase().includes(searchTerm.toLowerCase()) && !p.city.toLowerCase().includes(searchTerm.toLowerCase())) return false;
        return true;
    });

    const gradients = [
        'from-blue-500 to-cyan-500', 'from-violet-500 to-purple-500',
        'from-rose-500 to-pink-500', 'from-emerald-500 to-teal-500',
        'from-amber-500 to-orange-500', 'from-indigo-500 to-blue-500',
    ];

    const offerCount = posts.filter(p => p.type === 'offer').length;
    const requestCount = posts.filter(p => p.type === 'request').length;

    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Hero */}
            <div className="relative bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:80px_80px]" />
                <div className="absolute -bottom-[20%] -left-[15%] w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[100px]" />
                <div className="absolute top-[10%] right-[5%] w-[30vw] h-[30vw] bg-white/5 rounded-full blur-[80px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-white/70 hover:text-white text-sm font-medium transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Home
                    </Link>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-white font-medium text-xs tracking-wide mb-6">
                                    <ArrowRightLeft className="w-3 h-3" /> Community Exchange Network
                                </span>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
                                    Exchange Your <span className="text-emerald-200">Skills</span>,<br />
                                    Not Your <span className="text-white/50">Wallet</span>
                                </h1>
                            </motion.div>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.6 }}
                                className="text-lg md:text-xl text-emerald-100 max-w-xl leading-relaxed mb-8"
                            >
                                Post what you can offer, request what you need. Connect with community members and exchange services — no money required.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="flex flex-wrap gap-3"
                            >
                                {user ? (
                                    <>
                                        <button onClick={() => setShowPostForm(true)} className="px-7 py-3.5 bg-white text-emerald-600 rounded-full font-bold text-sm shadow-lg hover:bg-emerald-50 transition-colors flex items-center gap-2">
                                            <Plus className="w-4 h-4" /> Post a Service
                                        </button>
                                        <Link to="/dashboard" className="px-7 py-3.5 bg-white/15 text-white border border-white/25 rounded-full font-semibold text-sm hover:bg-white/25 transition-colors backdrop-blur-sm">
                                            My Dashboard
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/signin" className="px-7 py-3.5 bg-white text-emerald-600 rounded-full font-bold text-sm shadow-lg hover:bg-emerald-50 transition-colors flex items-center gap-2">
                                            <UserPlus className="w-4 h-4" /> Join the Exchange
                                        </Link>
                                        <Link to="/directory" className="px-7 py-3.5 bg-white/15 text-white border border-white/25 rounded-full font-semibold text-sm hover:bg-white/25 transition-colors backdrop-blur-sm">
                                            Browse Members
                                        </Link>
                                    </>
                                )}
                            </motion.div>
                        </div>

                        {/* Live Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="hidden lg:block"
                        >
                            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
                                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5" /> Live Exchange Stats
                                </h3>
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { label: 'Members', value: memberCount || '—', icon: Users },
                                        { label: 'Offers', value: offerCount || '—', icon: HandHeart },
                                        { label: 'Requests', value: requestCount || '—', icon: Search },
                                    ].map((stat, i) => (
                                        <div key={i} className="bg-white/10 rounded-2xl p-4 text-center">
                                            <stat.icon className="w-5 h-5 text-emerald-200 mx-auto mb-2" />
                                            <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                                            <div className="text-xs text-emerald-200 font-medium">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
                        <path d="M0 60V20C360 50 720 0 1080 30C1260 45 1350 35 1440 40V60H0Z" fill="#FAFAFA" />
                    </svg>
                </div>
            </div>

            {/* How It Works */}
            <section className="py-16 md:py-20 bg-white border-b border-neutral-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-xs tracking-wider uppercase mb-4">
                            <ArrowRightLeft className="w-3 h-3" /> How It Works
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">Exchange in 3 Simple Steps</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                step: '01', title: 'Create Your Profile',
                                desc: 'Sign up for free with Google or email. Add your city, phone number, and tell us about yourself.',
                                icon: UserPlus, color: 'from-blue-500 to-indigo-500'
                            },
                            {
                                step: '02', title: 'Post & Browse',
                                desc: 'Post services you can offer or request help you need. Browse the board to find community members near you.',
                                icon: Search, color: 'from-emerald-500 to-teal-500'
                            },
                            {
                                step: '03', title: 'Connect & Exchange',
                                desc: 'Reach out directly to community members and arrange your exchange. Real people, real skills, real impact.',
                                icon: MessageCircle, color: 'from-amber-500 to-orange-500'
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                                className="relative bg-neutral-50 rounded-2xl p-8 border border-neutral-100 text-center group hover:shadow-lg transition-shadow"
                            >
                                <div className="absolute top-4 right-4 text-5xl font-black text-neutral-100 group-hover:text-neutral-200 transition-colors">{item.step}</div>
                                <div className={`w-14 h-14 mx-auto bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                                    <item.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-12 md:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-6">Service Categories</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {categories.map((cat, i) => (
                            <motion.button
                                key={cat.name}
                                custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                                onClick={() => setFilterCategory(filterCategory === cat.name ? 'all' : cat.name)}
                                className={`flex items-center gap-2.5 px-4 py-3.5 rounded-xl border text-sm font-semibold transition-all ${filterCategory === cat.name
                                    ? `${cat.bg} ${cat.border} ${cat.color} shadow-sm`
                                    : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300'
                                    }`}
                            >
                                <cat.icon className={`w-4 h-4 ${filterCategory === cat.name ? cat.color : 'text-neutral-400'}`} />
                                {cat.name}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Search & Filter Bar */}
            <section className="py-6 bg-neutral-50 sticky top-16 z-30 border-b border-neutral-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row gap-3 items-center">
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                placeholder="Search by service, name, or city..."
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-sm bg-white transition-all"
                            />
                        </div>
                        <div className="flex gap-2">
                            {(['all', 'offer', 'request'] as const).map(t => (
                                <button
                                    key={t}
                                    onClick={() => setFilterType(t)}
                                    className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${filterType === t
                                        ? 'bg-emerald-600 text-white shadow-sm'
                                        : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100'
                                        }`}
                                >
                                    {t === 'all' ? 'All' : t === 'offer' ? '🤲 Offers' : '🔎 Requests'}
                                </button>
                            ))}
                        </div>
                        {user && (
                            <button
                                onClick={() => setShowPostForm(true)}
                                className="px-5 py-2.5 bg-emerald-600 text-white rounded-lg font-semibold text-sm hover:bg-emerald-700 transition-colors flex items-center gap-1.5 shadow-sm whitespace-nowrap"
                            >
                                <Plus className="w-4 h-4" /> Post
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Service Listings */}
            <section className="py-8 md:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-sm text-neutral-500">
                            {filtered.length} listing{filtered.length !== 1 ? 's' : ''}
                            {filterCategory !== 'all' && ` in ${filterCategory}`}
                        </p>
                        {filterCategory !== 'all' && (
                            <button onClick={() => setFilterCategory('all')} className="text-sm text-emerald-600 font-medium hover:underline">
                                Clear filter ×
                            </button>
                        )}
                    </div>

                    {loadingPosts ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 border border-neutral-100 animate-pulse">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-neutral-200 rounded-full" />
                                        <div className="flex-1"><div className="h-4 bg-neutral-200 rounded w-24 mb-2" /><div className="h-3 bg-neutral-200 rounded w-16" /></div>
                                    </div>
                                    <div className="h-5 bg-neutral-200 rounded w-3/4 mb-3" />
                                    <div className="h-3 bg-neutral-200 rounded w-full mb-2" />
                                    <div className="h-3 bg-neutral-200 rounded w-2/3" />
                                </div>
                            ))}
                        </div>
                    ) : filtered.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Sparkles className="w-8 h-8 text-neutral-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                                {posts.length === 0 ? 'Be the First to Post!' : 'No Matching Listings'}
                            </h3>
                            <p className="text-neutral-500 mb-8 max-w-md mx-auto">
                                {posts.length === 0
                                    ? 'The exchange board is brand new! Create your account and post the first service to get things rolling.'
                                    : 'Try adjusting your search or filters.'
                                }
                            </p>
                            {!user ? (
                                <Link to="/signin" className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-600 text-white rounded-full font-bold text-sm hover:bg-emerald-700 transition-colors">
                                    <UserPlus className="w-4 h-4" /> Create Free Account
                                </Link>
                            ) : (
                                <button onClick={() => setShowPostForm(true)} className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-600 text-white rounded-full font-bold text-sm hover:bg-emerald-700 transition-colors">
                                    <Plus className="w-4 h-4" /> Post a Service
                                </button>
                            )}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {filtered.map((post, i) => {
                                const cat = categories.find(c => c.name === post.category);
                                const isOwner = user && user.uid === post.userId;
                                return (
                                    <motion.div
                                        key={post.id}
                                        custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                                        className="bg-white rounded-2xl border border-neutral-100 p-6 hover:shadow-lg transition-shadow duration-300 relative group"
                                    >
                                        {/* Delete button for own posts */}
                                        {isOwner && (
                                            <button
                                                onClick={() => post.id && handleDelete(post.id)}
                                                disabled={deleting === post.id}
                                                className="absolute top-3 right-3 p-2 rounded-lg text-neutral-300 hover:text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
                                                title="Delete this listing"
                                            >
                                                {deleting === post.id ? (
                                                    <div className="w-4 h-4 border-2 border-red-300 border-t-red-600 rounded-full animate-spin" />
                                                ) : (
                                                    <Trash2 className="w-4 h-4" />
                                                )}
                                            </button>
                                        )}

                                        {/* Type Badge */}
                                        <div className="flex items-center justify-between mb-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${post.type === 'offer'
                                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                                : 'bg-blue-50 text-blue-700 border border-blue-200'
                                                }`}>
                                                {post.type === 'offer' ? '🤲 Offering' : '🔎 Looking For'}
                                            </span>
                                            {isOwner && (
                                                <span className="text-[10px] font-medium text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">Your Post</span>
                                            )}
                                        </div>

                                        {/* Category */}
                                        {cat && (
                                            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${cat.bg} ${cat.color} text-xs font-semibold mb-3`}>
                                                <cat.icon className="w-3 h-3" /> {cat.name}
                                            </div>
                                        )}

                                        {/* Title & Description */}
                                        <h3 className="text-lg font-bold text-neutral-900 mb-2">{post.title}</h3>
                                        {post.description && (
                                            <p className="text-sm text-neutral-500 line-clamp-2 mb-4">{post.description}</p>
                                        )}

                                        {/* City, Phone & Email */}
                                        <div className="flex flex-wrap gap-3 mb-4 text-xs text-neutral-500">
                                            {post.city && (
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="w-3 h-3 text-neutral-400" /> {post.city}
                                                </span>
                                            )}
                                            {post.phone && (
                                                <a href={`tel:${post.phone}`} className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                                                    <Phone className="w-3 h-3 text-neutral-400" /> {post.phone}
                                                </a>
                                            )}
                                            {post.email && (
                                                <a href={`mailto:${post.email}`} className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                                                    <Mail className="w-3 h-3 text-neutral-400" /> {post.email}
                                                </a>
                                            )}
                                        </div>

                                        {/* Footer */}
                                        <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                                            <div className="flex items-center gap-2.5">
                                                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center text-white text-xs font-bold overflow-hidden`}>
                                                    {post.userPhoto ? (
                                                        <img src={post.userPhoto} alt="" className="w-full h-full object-cover" />
                                                    ) : (
                                                        post.userName?.charAt(0)?.toUpperCase() || '?'
                                                    )}
                                                </div>
                                                <div className="text-xs font-semibold text-neutral-900">{post.userName}</div>
                                            </div>
                                            {post.phone && (
                                                <a
                                                    href={`tel:${post.phone}`}
                                                    className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                                                >
                                                    <Phone className="w-3 h-3" /> Call Now
                                                </a>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">Why Exchange?</h2>
                        <p className="text-neutral-500 max-w-2xl mx-auto">A sustainable model that puts people before profit.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { icon: ArrowRightLeft, title: 'Skills for Services', desc: 'Trade your expertise — carpentry, teaching, farming — for healthcare and community support.', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                            { icon: Shield, title: 'No Money Required', desc: 'Exchange services directly with community members. No fees, no costs.', color: 'text-blue-600', bg: 'bg-blue-50' },
                            { icon: Users, title: 'Build Community', desc: 'Every exchange strengthens community bonds and creates lasting partnerships.', color: 'text-violet-600', bg: 'bg-violet-50' },
                            { icon: Zap, title: 'Instant Matching', desc: 'We connect your skills with those who need them — quickly and efficiently.', color: 'text-amber-600', bg: 'bg-amber-50' },
                        ].map((b, i) => (
                            <motion.div
                                key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                                className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 hover:border-emerald-200 transition-colors"
                            >
                                <div className={`w-10 h-10 ${b.bg} rounded-lg flex items-center justify-center mb-4`}>
                                    <b.icon className={`w-5 h-5 ${b.color}`} />
                                </div>
                                <h3 className="text-base font-bold text-neutral-900 mb-2">{b.title}</h3>
                                <p className="text-sm text-neutral-500 leading-relaxed">{b.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-500">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Heart className="w-10 h-10 text-white/60 mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Exchanging?</h2>
                    <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
                        Join a community that values people over profit. Sign up for free and start exchanging services today.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {user ? (
                            <button onClick={() => setShowPostForm(true)} className="px-8 py-3.5 bg-white text-emerald-600 rounded-full font-bold hover:bg-emerald-50 transition-colors flex items-center gap-2">
                                <Plus className="w-4 h-4" /> Post a Service
                            </button>
                        ) : (
                            <Link to="/signin" className="px-8 py-3.5 bg-white text-emerald-600 rounded-full font-bold hover:bg-emerald-50 transition-colors flex items-center gap-2">
                                <UserPlus className="w-4 h-4" /> Create Free Account
                            </Link>
                        )}
                        <Link to="/contact" className="px-8 py-3.5 bg-white/15 text-white border border-white/25 rounded-full font-semibold hover:bg-white/25 transition-colors">
                            Have Questions?
                        </Link>
                    </div>
                </div>
            </section>

            {/* Post Service Modal */}
            <AnimatePresence>
                {showPostForm && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-md"
                        onClick={() => setShowPostForm(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="px-6 py-5 border-b border-neutral-100 flex items-center justify-between">
                                <h3 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-emerald-600" /> Post a Service
                                </h3>
                                <button onClick={() => setShowPostForm(false)} className="p-2 text-neutral-400 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-6 overflow-y-auto flex-1 space-y-5">
                                {/* Type */}
                                <div>
                                    <label className="block text-sm font-semibold text-neutral-700 mb-2">What are you doing?</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            onClick={() => setPostType('offer')}
                                            className={`p-4 rounded-xl border-2 text-center transition-all ${postType === 'offer'
                                                ? 'border-emerald-500 bg-emerald-50'
                                                : 'border-neutral-200 hover:border-neutral-300'
                                                }`}
                                        >
                                            <HandHeart className={`w-6 h-6 mx-auto mb-2 ${postType === 'offer' ? 'text-emerald-600' : 'text-neutral-400'}`} />
                                            <span className={`text-sm font-bold ${postType === 'offer' ? 'text-emerald-700' : 'text-neutral-600'}`}>Offering</span>
                                            <p className="text-xs text-neutral-400 mt-1">I can help with...</p>
                                        </button>
                                        <button
                                            onClick={() => setPostType('request')}
                                            className={`p-4 rounded-xl border-2 text-center transition-all ${postType === 'request'
                                                ? 'border-blue-500 bg-blue-50'
                                                : 'border-neutral-200 hover:border-neutral-300'
                                                }`}
                                        >
                                            <Search className={`w-6 h-6 mx-auto mb-2 ${postType === 'request' ? 'text-blue-600' : 'text-neutral-400'}`} />
                                            <span className={`text-sm font-bold ${postType === 'request' ? 'text-blue-700' : 'text-neutral-600'}`}>Requesting</span>
                                            <p className="text-xs text-neutral-400 mt-1">I need help with...</p>
                                        </button>
                                    </div>
                                </div>

                                {/* Category */}
                                <div>
                                    <label className="block text-sm font-semibold text-neutral-700 mb-2">Category <span className="text-red-400">*</span></label>
                                    <div className="flex flex-wrap gap-2">
                                        {categories.map(cat => (
                                            <button
                                                key={cat.name}
                                                onClick={() => setPostCategory(cat.name)}
                                                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${postCategory === cat.name
                                                    ? `${cat.bg} ${cat.border} border ${cat.color}`
                                                    : 'bg-neutral-50 text-neutral-500 border border-neutral-200 hover:border-neutral-300'
                                                    }`}
                                            >
                                                <cat.icon className="w-3.5 h-3.5" /> {cat.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Title */}
                                <div>
                                    <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Title <span className="text-red-400">*</span></label>
                                    <input
                                        type="text"
                                        value={postTitle}
                                        onChange={e => setPostTitle(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all text-sm"
                                        placeholder={postType === 'offer' ? 'e.g., 2 hours of carpentry work' : 'e.g., Need help fixing a leaky faucet'}
                                    />
                                </div>

                                {/* Description */}
                                <div>
                                    <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Description</label>
                                    <textarea
                                        value={postDescription}
                                        onChange={e => setPostDescription(e.target.value)}
                                        rows={3}
                                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all resize-none text-sm"
                                        placeholder="Add more details about what you're offering or looking for..."
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-semibold text-neutral-700 mb-1.5 flex items-center gap-1">
                                        <Mail className="w-3.5 h-3.5 text-violet-500" /> Email <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        value={postEmail}
                                        onChange={e => setPostEmail(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none text-sm"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                {/* City & Phone */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-neutral-700 mb-1.5 flex items-center gap-1">
                                            <MapPin className="w-3.5 h-3.5 text-blue-500" /> City <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={postCity}
                                            onChange={e => setPostCity(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
                                            placeholder="Your city"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-neutral-700 mb-1.5 flex items-center gap-1">
                                            <Phone className="w-3.5 h-3.5 text-emerald-500" /> Phone <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            value={postPhone}
                                            onChange={e => setPostPhone(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
                                            placeholder="(555) 123-4567"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="px-6 py-4 border-t border-neutral-100 bg-neutral-50/80">
                                <button
                                    onClick={handlePost}
                                    disabled={posting || !postTitle.trim() || !postCategory || !postCity.trim() || !postPhone.trim() || !postEmail.trim()}
                                    className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {posting ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" /> Publish {postType === 'offer' ? 'Offer' : 'Request'}
                                        </>
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ExchangeCenter;
