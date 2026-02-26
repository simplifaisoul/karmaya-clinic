import { ArrowLeft, ArrowRightLeft, Users, Shield, Zap, CheckCircle, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import HowItWorks from '../components/HowItWorks';
import JoinHub from '../components/JoinHub';

const AuthCTA = () => {
    const { user, loading } = useAuth();
    if (loading) return <div className="w-32 h-12 bg-emerald-100 animate-pulse rounded-full" />;

    if (user) {
        return (
            <Link to="/dashboard" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-base hover:bg-emerald-700 transition-colors shadow-xl shadow-emerald-600/20 group">
                Go to Dashboard <ArrowRightLeft className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Link>
        );
    }
    return (
        <Link to="/signin" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-base hover:bg-emerald-700 transition-colors shadow-xl shadow-emerald-600/20 group">
            Create Free Account <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </Link>
    );
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const }
    })
};

const ExchangeCenter = () => {
    const benefits = [
        { icon: ArrowRightLeft, title: 'Skills for Services', desc: 'Trade your expertise — carpentry, teaching, farming — for healthcare and community support.', color: 'text-emerald-600', bg: 'bg-emerald-50' },
        { icon: Shield, title: 'No Money Required', desc: 'Our credit system means you never need cash to access essential services.', color: 'text-blue-600', bg: 'bg-blue-50' },
        { icon: Users, title: 'Build Community', desc: 'Every exchange strengthens community bonds and creates lasting partnerships.', color: 'text-violet-600', bg: 'bg-violet-50' },
        { icon: Zap, title: 'Instant Matching', desc: 'We connect your skills with those who need them — quickly and efficiently.', color: 'text-amber-600', bg: 'bg-amber-50' },
    ];

    const serviceCategories = [
        'Healthcare & Wellness', 'Construction & Repair', 'Teaching & Tutoring',
        'Farming & Agriculture', 'Cooking & Nutrition', 'Transportation',
        'Technology & IT', 'Childcare', 'Elder Care', 'Arts & Crafts'
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="relative bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:80px_80px]" />
                <div className="absolute -bottom-[20%] -left-[15%] w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[100px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-white/70 hover:text-white text-sm font-medium transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Home
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-white font-medium text-xs tracking-wide mb-6">
                            <ArrowRightLeft className="w-3 h-3" /> Community Network
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                            Service Exchange Center
                        </h1>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-lg md:text-xl text-emerald-100 max-w-3xl leading-relaxed"
                    >
                        Exchange your skills for services you need. No money required — just your unique talents and our community-powered platform.
                    </motion.p>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
                        <path d="M0 60V20C360 50 720 0 1080 30C1260 45 1350 35 1440 40V60H0Z" fill="white" />
                    </svg>
                </div>
            </div>

            {/* Benefits */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">Why Exchange?</h2>
                        <p className="text-neutral-500 max-w-2xl mx-auto">A sustainable model that puts people before profit.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {benefits.map((b, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
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

            {/* How It Works */}
            <HowItWorks />

            {/* Service Categories */}
            <section className="py-16 md:py-24 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">Available Service Categories</h2>
                        <p className="text-neutral-500 max-w-2xl mx-auto">Browse the skills and services available in our exchange network.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {serviceCategories.map((cat, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="px-5 py-3 bg-white rounded-full border border-neutral-200 font-medium text-sm text-neutral-700 hover:border-emerald-300 hover:text-emerald-700 transition-colors cursor-default shadow-sm"
                            >
                                {cat}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Auth CTA */}
            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-10 md:p-14 border border-emerald-100">
                        <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <UserPlus className="w-7 h-7 text-emerald-600" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                            Ready to Join the Exchange?
                        </h2>
                        <p className="text-neutral-600 max-w-xl mx-auto mb-8 leading-relaxed">
                            Create your personal dashboard to list your services, track your exchanges, and manage your community credits.
                        </p>
                        <div className="flex justify-center mb-8">
                            <AuthCTA />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm border-t border-emerald-200/60 pt-8 mt-4">
                            <div className="flex items-center gap-2 text-emerald-700">
                                <CheckCircle className="w-4 h-4" /> Free to join
                            </div>
                            <div className="flex items-center gap-2 text-emerald-700">
                                <CheckCircle className="w-4 h-4" /> Get 10 credits instantly
                            </div>
                            <div className="flex items-center gap-2 text-emerald-700">
                                <CheckCircle className="w-4 h-4" /> Google / Gmail support
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Form */}
            <JoinHub />

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-500">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Have Questions?</h2>
                    <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">Reach out to learn more about how the exchange works and how you can participate.</p>
                    <Link to="/contact" className="inline-block px-8 py-3.5 bg-white text-emerald-600 rounded-full font-bold hover:bg-emerald-50 transition-colors">
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ExchangeCenter;
