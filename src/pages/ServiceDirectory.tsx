import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, MapPin, ArrowRightLeft, UserPlus, Filter } from 'lucide-react';

interface MemberListing {
    uid: string;
    displayName: string;
    photoURL: string;
    location: string;
    bio: string;
    servicesOffered: string[];
    servicesNeeded: string[];
    credits: number;
}

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" as const }
    })
};

const ServiceDirectory = () => {
    const { user } = useAuth();
    const [members, setMembers] = useState<MemberListing[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const q = query(collection(db, 'users'), orderBy('displayName'));
                const snapshot = await getDocs(q);
                const data = snapshot.docs
                    .map(doc => doc.data() as MemberListing)
                    .filter(m => m.servicesOffered.length > 0 || m.servicesNeeded.length > 0);
                setMembers(data);
            } catch (err) {
                console.error('Error fetching members:', err);
            }
            setLoading(false);
        };
        fetchMembers();
    }, []);

    const allCategories = [...new Set(members.flatMap(m => [...m.servicesOffered, ...m.servicesNeeded]))];

    const filtered = members.filter(m => {
        const matchesSearch = searchTerm === '' ||
            m.displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            m.servicesOffered.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())) ||
            m.servicesNeeded.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())) ||
            m.location.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory = filterCategory === 'all' ||
            m.servicesOffered.includes(filterCategory) ||
            m.servicesNeeded.includes(filterCategory);

        return matchesSearch && matchesCategory;
    });

    const colors = [
        'from-blue-500 to-cyan-500',
        'from-violet-500 to-purple-500',
        'from-rose-500 to-pink-500',
        'from-emerald-500 to-teal-500',
        'from-amber-500 to-orange-500',
        'from-indigo-500 to-blue-500',
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="relative bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:80px_80px]" />
                <div className="absolute -top-[20%] -right-[15%] w-[60vw] h-[60vw] bg-white/5 rounded-full blur-[100px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/exchange" className="inline-flex items-center text-white/70 hover:text-white text-sm font-medium transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4 mr-1.5" /> Exchange Center
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        Service Directory
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed"
                    >
                        Browse services offered by our community members. Find what you need, exchange what you have.
                    </motion.p>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
                        <path d="M0 60V20C360 50 720 0 1080 30C1260 45 1350 35 1440 40V60H0Z" fill="white" />
                    </svg>
                </div>
            </div>

            {/* Search & Filter Bar */}
            <section className="py-8 bg-white border-b border-neutral-100 sticky top-16 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="relative flex-1">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                placeholder="Search by name, skill, or location..."
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-neutral-50 focus:bg-white transition-all"
                            />
                        </div>
                        <div className="relative">
                            <Filter className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                            <select
                                value={filterCategory}
                                onChange={e => setFilterCategory(e.target.value)}
                                className="pl-10 pr-8 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm bg-neutral-50 focus:bg-white appearance-none cursor-pointer min-w-[180px]"
                            >
                                <option value="all">All Categories</option>
                                {allCategories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Members Grid */}
            <section className="py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="bg-neutral-50 rounded-2xl p-6 animate-pulse">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-neutral-200 rounded-full" />
                                        <div className="flex-1">
                                            <div className="h-4 bg-neutral-200 rounded w-24 mb-2" />
                                            <div className="h-3 bg-neutral-200 rounded w-16" />
                                        </div>
                                    </div>
                                    <div className="h-3 bg-neutral-200 rounded w-full mb-2" />
                                    <div className="h-3 bg-neutral-200 rounded w-3/4" />
                                </div>
                            ))}
                        </div>
                    ) : filtered.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-7 h-7 text-neutral-400" />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                {members.length === 0 ? 'No Members Yet' : 'No Results Found'}
                            </h3>
                            <p className="text-neutral-500 mb-6 max-w-md mx-auto">
                                {members.length === 0
                                    ? 'Be the first to join the exchange! Create your account and list your services.'
                                    : 'Try adjusting your search or filters to find what you\'re looking for.'
                                }
                            </p>
                            {!user && (
                                <Link to="/signin" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-colors">
                                    <UserPlus className="w-4 h-4" /> Create Account
                                </Link>
                            )}
                        </div>
                    ) : (
                        <>
                            <div className="flex items-center justify-between mb-6">
                                <p className="text-sm text-neutral-500">{filtered.length} member{filtered.length !== 1 ? 's' : ''} found</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {filtered.map((member, i) => (
                                    <motion.div
                                        key={member.uid}
                                        custom={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeUp}
                                        className="bg-white rounded-2xl border border-neutral-100 p-6 hover:shadow-lg transition-shadow duration-300"
                                    >
                                        {/* Member Header */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors[i % colors.length]} flex items-center justify-center text-white font-bold text-lg overflow-hidden`}>
                                                {member.photoURL ? (
                                                    <img src={member.photoURL} alt="" className="w-full h-full object-cover" />
                                                ) : (
                                                    member.displayName?.charAt(0)?.toUpperCase() || '?'
                                                )}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-neutral-900">{member.displayName || 'Community Member'}</h3>
                                                {member.location && (
                                                    <p className="text-xs text-neutral-400 flex items-center gap-1">
                                                        <MapPin className="w-3 h-3" /> {member.location}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Bio */}
                                        {member.bio && (
                                            <p className="text-sm text-neutral-500 mb-4 line-clamp-2">{member.bio}</p>
                                        )}

                                        {/* Services Offered */}
                                        {member.servicesOffered.length > 0 && (
                                            <div className="mb-3">
                                                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">Can Offer</span>
                                                <div className="flex flex-wrap gap-1.5 mt-1.5">
                                                    {member.servicesOffered.map((s, j) => (
                                                        <span key={j} className="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">{s}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Services Needed */}
                                        {member.servicesNeeded.length > 0 && (
                                            <div>
                                                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Looking For</span>
                                                <div className="flex flex-wrap gap-1.5 mt-1.5">
                                                    {member.servicesNeeded.map((s, j) => (
                                                        <span key={j} className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">{s}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Credits */}
                                        <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between">
                                            <div className="flex items-center gap-1.5 text-sm text-neutral-400">
                                                <ArrowRightLeft className="w-3.5 h-3.5" />
                                                <span>{member.credits} credits</span>
                                            </div>
                                            {user && (
                                                <Link to="/contact" className="text-xs font-semibold text-blue-600 hover:underline">
                                                    Request Exchange →
                                                </Link>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* Bottom CTA */}
            {!user && (
                <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-500">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Want to Be Listed?</h2>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            Create a free account, list your services, and start exchanging with the community today.
                        </p>
                        <Link to="/signin" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-indigo-600 rounded-full font-bold hover:bg-indigo-50 transition-colors">
                            <UserPlus className="w-4 h-4" /> Create Free Account
                        </Link>
                    </div>
                </section>
            )}
        </div>
    );
};

export default ServiceDirectory;
