import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft, ArrowRightLeft, Users, Shield, Zap, UserPlus,
    Search, Heart, Stethoscope, Wrench, GraduationCap, Sprout, UtensilsCrossed,
    Car, Monitor, Baby, Palette, HandHeart, MessageCircle, Plus
} from 'lucide-react';
import PostServiceForm from '../components/exchange/PostServiceForm';
import ServiceCard from '../components/exchange/ServiceCard';
import type { ServicePost } from '../components/exchange/ServiceCard';
import ConversationList from '../components/exchange/ConversationList';
import ChatWindow from '../components/exchange/ChatWindow';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const }
    })
};

const categories = [
    { name: 'Healthcare', icon: Stethoscope, color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-200' },
    { name: 'Construction', icon: Wrench, color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-200' },
    { name: 'Teaching', icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
    { name: 'Agriculture', icon: Sprout, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
    { name: 'Cooking', icon: UtensilsCrossed, color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-200' },
    { name: 'Transportation', icon: Car, color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-200' },
    { name: 'Technology', icon: Monitor, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
    { name: 'Childcare', icon: Baby, color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-200' },
    { name: 'Arts & Crafts', icon: Palette, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
    { name: 'Community', icon: HandHeart, color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-200' },
];

const ExchangeCenter = () => {
    const { user } = useAuth();
    const [posts, setPosts] = useState<ServicePost[]>([]);
    const [loading, setLoading] = useState(true);
    const [showPostForm, setShowPostForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState<'all' | 'offer' | 'request'>('all');
    const [filterCategory, setFilterCategory] = useState('all');

    // Messaging state
    const [showMessages, setShowMessages] = useState(false);
    const [activeConversation, setActiveConversation] = useState<string | null>(null);

    // Load posts real-time
    useEffect(() => {
        const q = query(collection(db, 'exchangePosts'), orderBy('createdAt', 'desc'));
        const unsub = onSnapshot(q, (snap) => {
            const data = snap.docs.map(d => ({ id: d.id, ...d.data() } as ServicePost));
            setPosts(data);
            setLoading(false);
        }, () => setLoading(false));
        return unsub;
    }, []);

    // Filter posts
    const filteredPosts = posts.filter(p => {
        if (filterType !== 'all' && p.type !== filterType) return false;
        if (filterCategory !== 'all' && p.category !== filterCategory) return false;
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            return (
                p.title.toLowerCase().includes(term) ||
                p.description.toLowerCase().includes(term) ||
                p.userName.toLowerCase().includes(term) ||
                p.city?.toLowerCase().includes(term)
            );
        }
        return true;
    });

    const handleOpenChat = (conversationId: string) => {
        setActiveConversation(conversationId);
        setShowMessages(true);
    };

    const refreshPosts = () => { /* onSnapshot handles it automatically */ };

    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Hero */}
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:80px_80px]" />
                <div className="absolute -bottom-[20%] -left-[15%] w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[100px]" />
                <div className="absolute top-[10%] right-[5%] w-[30vw] h-[30vw] bg-white/5 rounded-full blur-[80px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-white/70 hover:text-white text-sm font-medium transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Home
                    </Link>
                    <div className="max-w-3xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-white font-medium text-xs tracking-wide mb-6">
                                <ArrowRightLeft className="w-3 h-3" /> Community Exchange Network
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
                                Exchange Your <span className="text-blue-200">Skills</span>,<br />
                                Not Your <span className="text-white/50">Wallet</span>
                            </h1>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="text-lg md:text-xl text-blue-100 max-w-xl leading-relaxed mb-8"
                        >
                            Driven by the philosophy of "People helping people," we are a holistic first-stop clinic for underserved communities. We focus on preventives, and we provide free healthcare support and advocacy, designed specifically for those who need it most, starting in the Philippines and beyond.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="flex flex-wrap gap-3"
                        >
                            {user ? (
                                <>
                                    <button onClick={() => setShowPostForm(true)} className="px-7 py-3.5 bg-white text-blue-600 rounded-full font-bold text-sm shadow-lg hover:bg-blue-50 transition-colors flex items-center gap-2">
                                        <Plus className="w-4 h-4" /> Post a Service
                                    </button>
                                    <button onClick={() => setShowMessages(true)} className="px-7 py-3.5 bg-white/15 text-white border border-white/25 rounded-full font-semibold text-sm hover:bg-white/25 transition-colors backdrop-blur-sm flex items-center gap-2">
                                        <MessageCircle className="w-4 h-4" /> My Messages
                                    </button>
                                </>
                            ) : (
                                <Link to="/signin" className="px-7 py-3.5 bg-white text-blue-600 rounded-full font-bold text-sm shadow-lg hover:bg-blue-50 transition-colors flex items-center gap-2">
                                    <UserPlus className="w-4 h-4" /> Sign In to Post & Message
                                </Link>
                            )}
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
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-semibold text-xs tracking-wider uppercase mb-4">
                            <ArrowRightLeft className="w-3 h-3" /> How It Works
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">Exchange in 3 Simple Steps</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { step: '01', title: 'Post Your Service', desc: 'Share what you can offer or what you need. Add photos and details to help others find you.', icon: UserPlus, color: 'from-blue-500 to-indigo-500' },
                            { step: '02', title: 'Browse & Connect', desc: 'Find services in your community. Use search, filters, and categories to find the right match.', icon: Search, color: 'from-blue-500 to-cyan-500' },
                            { step: '03', title: 'Message Directly', desc: 'Open a private conversation with the poster. Arrange your exchange through secure, two-way messaging.', icon: MessageCircle, color: 'from-slate-500 to-slate-500' }
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

            {/* Categories (scrollable on mobile) */}
            <section className="py-8 md:py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">Service Categories</h2>
                    <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:overflow-visible scrollbar-hide">
                        <button
                            onClick={() => setFilterCategory('all')}
                            className={`px-4 py-3 rounded-xl border text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 ${filterCategory === 'all'
                                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300'
                                }`}
                        >
                            All
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat.name}
                                onClick={() => setFilterCategory(filterCategory === cat.name ? 'all' : cat.name)}
                                className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 ${filterCategory === cat.name
                                    ? `${cat.bg} ${cat.border} ${cat.color} shadow-sm`
                                    : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300'
                                    }`}
                            >
                                <cat.icon className={`w-4 h-4 ${filterCategory === cat.name ? cat.color : 'text-neutral-400'}`} />
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Search & Filter Bar */}
            <section className="py-3 md:py-6 bg-neutral-50 sticky top-16 z-30 border-b border-neutral-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch sm:items-center">
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                placeholder="Search services..."
                                className="w-full pl-10 pr-4 py-2.5 md:py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-white transition-all"
                            />
                        </div>
                        <div className="flex gap-2">
                            {(['all', 'offer', 'request'] as const).map(t => (
                                <button
                                    key={t}
                                    onClick={() => setFilterType(t)}
                                    className={`px-3 md:px-4 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-colors flex-1 sm:flex-none ${filterType === t
                                        ? 'bg-blue-600 text-white shadow-sm'
                                        : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100'
                                        }`}
                                >
                                    {t === 'all' ? 'All' : t === 'offer' ? '🤲 Offers' : '🔍 Requests'}
                                </button>
                            ))}
                        </div>
                        {user && (
                            <button
                                onClick={() => setShowPostForm(true)}
                                className="px-5 py-2 md:py-2.5 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-1.5 shadow-sm whitespace-nowrap"
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
                    {loading ? (
                        <div className="text-center py-16">
                            <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4" />
                            <p className="text-neutral-400 text-sm">Loading services...</p>
                        </div>
                    ) : filteredPosts.length === 0 ? (
                        <div className="text-center py-16">
                            <ArrowRightLeft className="w-12 h-12 text-neutral-200 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                {posts.length === 0 ? 'No services posted yet' : 'No results found'}
                            </h3>
                            <p className="text-neutral-500 mb-6">
                                {posts.length === 0
                                    ? 'Be the first to post a service!'
                                    : 'Try adjusting your search or filters.'}
                            </p>
                            {user && posts.length === 0 && (
                                <button
                                    onClick={() => setShowPostForm(true)}
                                    className="px-7 py-3 bg-blue-600 text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                                >
                                    <Plus className="w-4 h-4" /> Post a Service
                                </button>
                            )}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {filteredPosts.map(post => (
                                <ServiceCard
                                    key={post.id}
                                    post={post}
                                    onOpenChat={handleOpenChat}
                                    onDeleted={refreshPosts}
                                />
                            ))}
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
                            { icon: ArrowRightLeft, title: 'Skills for Services', desc: 'Trade your expertise for healthcare and community support.', color: 'text-blue-600', bg: 'bg-blue-50' },
                            { icon: Shield, title: 'Private & Secure', desc: 'All conversations are private between you and the other person. Your data stays safe.', color: 'text-blue-600', bg: 'bg-blue-50' },
                            { icon: Users, title: 'Build Community', desc: 'Every exchange strengthens community bonds and creates lasting partnerships.', color: 'text-blue-600', bg: 'bg-blue-50' },
                            { icon: Zap, title: 'Direct Messaging', desc: 'Connect instantly with a two-way private message channel. No middleman.', color: 'text-slate-600', bg: 'bg-slate-50' },
                        ].map((b, i) => (
                            <motion.div
                                key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                                className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 hover:border-blue-200 transition-colors"
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
            <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Heart className="w-10 h-10 text-white/60 mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Exchanging?</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Post your skills, find what you need, and connect directly through private messaging.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {user ? (
                            <button onClick={() => setShowPostForm(true)} className="px-8 py-3.5 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors flex items-center gap-2">
                                <Plus className="w-4 h-4" /> Post a Service
                            </button>
                        ) : (
                            <Link to="/signin" className="px-8 py-3.5 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors flex items-center gap-2">
                                <UserPlus className="w-4 h-4" /> Join the Exchange
                            </Link>
                        )}
                        <Link to="/about" className="px-8 py-3.5 bg-white/15 text-white border border-white/25 rounded-full font-semibold hover:bg-white/25 transition-colors">
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Post Form Modal */}
            <AnimatePresence>
                {showPostForm && (
                    <PostServiceForm
                        onClose={() => setShowPostForm(false)}
                        onPosted={refreshPosts}
                    />
                )}
            </AnimatePresence>

            {/* Messages Drawer */}
            <AnimatePresence>
                {showMessages && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                        onClick={() => { setShowMessages(false); setActiveConversation(null); }}
                    >
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="absolute right-0 top-0 bottom-0 w-full sm:w-[420px] bg-white shadow-2xl flex flex-col"
                            onClick={e => e.stopPropagation()}
                        >
                            {activeConversation ? (
                                <ChatWindow
                                    conversationId={activeConversation}
                                    onBack={() => setActiveConversation(null)}
                                />
                            ) : (
                                <ConversationList
                                    onSelectConversation={setActiveConversation}
                                    selectedId={activeConversation || undefined}
                                    onClose={() => setShowMessages(false)}
                                />
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ExchangeCenter;
