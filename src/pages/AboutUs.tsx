import { Heart, Target, Users, Sparkles, Globe, Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const }
    })
};

const AboutUs = () => {
    const values = [
        { letter: 'K', word: 'Kindness', desc: 'Every interaction begins with compassion and care.', icon: Heart, color: 'text-rose-500', bg: 'bg-rose-50' },
        { letter: 'A', word: 'Action', desc: 'We don\'t just plan — we act decisively for those in need.', icon: Sparkles, color: 'text-amber-500', bg: 'bg-amber-50' },
        { letter: 'R', word: 'Resilience', desc: 'Building communities that withstand and grow through adversity.', icon: Target, color: 'text-cyan-500', bg: 'bg-cyan-50' },
        { letter: 'M', word: 'Motivation', desc: 'Inspiring individuals to take charge of their health.', icon: Sparkles, color: 'text-violet-500', bg: 'bg-violet-50' },
        { letter: 'A', word: 'Affection', desc: 'Treating every patient like family — with warmth and dignity.', icon: Heart, color: 'text-pink-500', bg: 'bg-pink-50' },
        { letter: 'Y', word: 'Youthfulness', desc: 'Investing in tomorrow by nurturing the next generation.', icon: Users, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { letter: 'A', word: 'Appreciation', desc: 'Recognizing every contribution, no matter how small.', icon: Sparkles, color: 'text-orange-500', bg: 'bg-orange-50' },
    ];

    const teamHighlights = [
        { icon: Globe, title: 'Global Vision', desc: 'Partnering with Canadian universities and global health organizations to scale our model.' },
        { icon: Shield, title: 'Community Trust', desc: 'Built on years of direct service, our clinics are trusted hubs for community wellness.' },
        { icon: Users, title: 'Local Empowerment', desc: 'Training local healthcare workers to ensure each clinic is community-owned and operated.' },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:80px_80px]" />
                <div className="absolute -top-[20%] -right-[15%] w-[60vw] h-[60vw] bg-white/5 rounded-full blur-[100px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-white/70 hover:text-white text-sm font-medium transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Home
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        About Karmaya Clinics
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed"
                    >
                        Driven by the philosophy of "People helping people," we are redefining holistic primary healthcare for underserved communities in the Philippines — and soon, the world.
                    </motion.p>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
                        <path d="M0 60V20C360 50 720 0 1080 30C1260 45 1350 35 1440 40V60H0Z" fill="white" />
                    </svg>
                </div>
            </div>

            {/* Mission Statement */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-semibold text-xs tracking-wider uppercase mb-4">Our Mission</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 tracking-tight">
                                Accessible Healthcare for <span className="text-blue-600">Everyone</span>
                            </h2>
                            <p className="text-neutral-600 leading-relaxed mb-6">
                                To provide accessible, holistic primary healthcare to underserved communities through a sustainable micro-clinic model that empowers local populations and creates lasting positive change.
                            </p>
                            <p className="text-neutral-600 leading-relaxed mb-8">
                                We believe healthcare is a human right — not a privilege. Our model eliminates financial barriers by introducing a community-powered service exchange, where every person's skills contribute to collective wellness.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-extrabold text-blue-600">1,000+</div>
                                    <div className="text-xs text-neutral-500 font-medium">Patients Served</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-extrabold text-emerald-600">9</div>
                                    <div className="text-xs text-neutral-500 font-medium">Essential Steps</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-extrabold text-violet-600">3</div>
                                    <div className="text-xs text-neutral-500 font-medium">Communities</div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/clinic_team_outside.jpg"
                                alt="Karmaya Clinic Team"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* K.A.R.M.A.Y.A. Philosophy */}
            <section className="py-16 md:py-24 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-600 font-semibold text-xs tracking-wider uppercase mb-4 shadow-sm">
                            Our Foundation
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
                            The <span className="gradient-text">K.A.R.M.A.Y.A</span> Philosophy
                        </h2>
                        <p className="text-base md:text-lg text-neutral-500 max-w-3xl mx-auto leading-relaxed">
                            More than an acronym — it's a <span className="text-neutral-900 font-semibold">way of life</span> that guides every interaction, every treatment, and every relationship we build.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    custom={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100"
                                >
                                    <div className={`w-10 h-10 ${value.bg} rounded-lg flex items-center justify-center mb-3`}>
                                        <Icon className={`w-5 h-5 ${value.color}`} />
                                    </div>
                                    <div className={`text-3xl font-extrabold ${value.color} mb-1 tracking-tight`}>{value.letter}</div>
                                    <h3 className="text-base font-bold text-neutral-900 mb-1">{value.word}</h3>
                                    <p className="text-sm text-neutral-500 leading-relaxed">{value.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team Highlights */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">What Sets Us Apart</h2>
                        <p className="text-neutral-500 max-w-2xl mx-auto">We combine global expertise with local knowledge to build something truly unique.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {teamHighlights.map((item, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 hover:border-blue-200 transition-colors"
                            >
                                <item.icon className="w-8 h-8 text-blue-500 mb-4" />
                                <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                                <p className="text-neutral-500 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Join our growing community of volunteers, partners, and supporters building a healthier future.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link to="/team" className="px-8 py-3.5 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors">
                            Meet Our Team
                        </Link>
                        <Link to="/exchange" className="px-8 py-3.5 bg-white/15 text-white border border-white/25 rounded-full font-semibold hover:bg-white/25 transition-colors">
                            Join the Exchange
                        </Link>
                        <Link to="/contact" className="px-8 py-3.5 bg-white/15 text-white border border-white/25 rounded-full font-semibold hover:bg-white/25 transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
