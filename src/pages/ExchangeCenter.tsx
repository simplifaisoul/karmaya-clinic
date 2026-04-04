import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowLeft, ArrowRightLeft, Users, Shield, Zap, UserPlus,
    Search, Heart, Stethoscope, Wrench, GraduationCap, Sprout, UtensilsCrossed,
    Car, Monitor, Baby, Palette, HandHeart, MessageCircle
} from 'lucide-react';

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
                            Driven by the philosophy of "People helping people," we are building holistic primary healthcare for underserved communities in the Philippines, and soon, Globally.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="flex flex-wrap gap-3"
                        >
                            <Link to="/contact" className="px-7 py-3.5 bg-white text-blue-600 rounded-full font-bold text-sm shadow-lg hover:bg-blue-50 transition-colors flex items-center gap-2">
                                <UserPlus className="w-4 h-4" /> Get Involved
                            </Link>
                            <Link to="/about" className="px-7 py-3.5 bg-white/15 text-white border border-white/25 rounded-full font-semibold text-sm hover:bg-white/25 transition-colors backdrop-blur-sm">
                                Learn How It Works
                            </Link>
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
                            {
                                step: '01', title: 'Share Your Skills',
                                desc: 'Tell us what you can offer, from healthcare and carpentry to tutoring and farming.',
                                icon: UserPlus, color: 'from-blue-500 to-indigo-500'
                            },
                            {
                                step: '02', title: 'Find What You Need',
                                desc: 'Browse the community to find members near you who can help with what you need.',
                                icon: Search, color: 'from-blue-500 to-cyan-500'
                            },
                            {
                                step: '03', title: 'Connect & Exchange',
                                desc: 'Reach out directly to community members and arrange your exchange. Real people, real skills, real impact.',
                                icon: MessageCircle, color: 'from-slate-500 to-slate-500'
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

            {/* Service Categories */}
            <section className="py-12 md:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">What Can You Exchange?</h2>
                        <p className="text-neutral-500 max-w-xl mx-auto">Our exchange covers a wide range of skills and services.</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {categories.map((cat, i) => (
                            <motion.div
                                key={cat.name}
                                custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                                className={`flex items-center gap-2.5 px-4 py-3.5 rounded-xl border text-sm font-semibold ${cat.bg} ${cat.border} ${cat.color}`}
                            >
                                <cat.icon className={`w-4 h-4 ${cat.color}`} />
                                {cat.name}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coming Soon Notice */}
            <section className="py-12 md:py-16 bg-neutral-50">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <div className="bg-white rounded-2xl p-8 md:p-12 border border-neutral-200 shadow-sm">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <ArrowRightLeft className="w-8 h-8 text-blue-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-900 mb-3">Exchange Board Coming Soon</h3>
                        <p className="text-neutral-500 leading-relaxed mb-6">
                            We're building a platform where community members can post and browse service exchanges directly.
                            In the meantime, reach out to us to get connected with the community.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link to="/contact" className="px-7 py-3.5 bg-blue-600 text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-colors">
                                Contact Us to Get Started
                            </Link>
                            <Link to="/microclinic" className="px-7 py-3.5 bg-neutral-100 text-neutral-700 rounded-full font-bold text-sm hover:bg-neutral-200 transition-colors">
                                Start a MicroClinic
                            </Link>
                        </div>
                    </div>
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
                            { icon: ArrowRightLeft, title: 'Skills for Services', desc: 'Trade your expertise like carpentry, teaching, or farming for healthcare and community support.', color: 'text-blue-600', bg: 'bg-blue-50' },
                            { icon: Shield, title: 'No Money Required', desc: 'Exchange services directly with community members. No fees, no costs.', color: 'text-blue-600', bg: 'bg-blue-50' },
                            { icon: Users, title: 'Build Community', desc: 'Every exchange strengthens community bonds and creates lasting partnerships.', color: 'text-blue-600', bg: 'bg-blue-50' },
                            { icon: Zap, title: 'Instant Matching', desc: 'We connect your skills with those who need them, quickly and efficiently.', color: 'text-slate-600', bg: 'bg-slate-50' },
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
                        Join a community that values people over profit. Get in touch and we'll help you get started.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link to="/contact" className="px-8 py-3.5 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors flex items-center gap-2">
                            <UserPlus className="w-4 h-4" /> Get in Touch
                        </Link>
                        <Link to="/about" className="px-8 py-3.5 bg-white/15 text-white border border-white/25 rounded-full font-semibold hover:bg-white/25 transition-colors">
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExchangeCenter;
