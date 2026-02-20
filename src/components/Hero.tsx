import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, PlayCircle, Star } from 'lucide-react';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
            {/* AG-Style Gradient Mesh Background */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-gradient-to-br from-blue-50 via-indigo-50 to-transparent rounded-full blur-[100px] opacity-50"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute top-[30%] -left-[15%] w-[50vw] h-[50vw] bg-gradient-to-tr from-blue-50/80 to-transparent rounded-full blur-[80px] opacity-40"
                />
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_110%)]" />
            </div>

            <motion.div
                style={{ opacity }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
                {/* Left Column: Typography & Content */}
                <div className="flex flex-col gap-6 order-2 lg:order-1 pb-16 lg:pb-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm tracking-wide mb-8">
                            <Star className="w-4 h-4 fill-current" />
                            <span>Community-First Healthcare</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-neutral-900 leading-[0.92] tracking-[-0.04em] mb-8">
                            Healing <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Together.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-neutral-500 leading-relaxed max-w-lg font-medium">
                            A small-scale, personalized healthcare model focused on{' '}
                            <span className="text-neutral-900 font-semibold">proactive prevention</span>{' '}
                            and supporting patients through a sustainable journey toward better{' '}
                            <span className="text-blue-600 font-bold">health</span>.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row gap-4 mt-4"
                    >
                        <a
                            href="#join-hub"
                            className="px-8 py-4 bg-neutral-900 text-white rounded-full font-semibold text-base shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:shadow-neutral-900/20 hover:bg-neutral-800 transition-all text-center flex items-center justify-center gap-2 group"
                        >
                            Join Our Mission
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <button
                            onClick={() => document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-white text-neutral-700 border border-neutral-200 rounded-full font-semibold text-base hover:bg-neutral-50 hover:border-neutral-300 transition-all text-center flex items-center justify-center gap-3 shadow-sm hover:shadow-md group"
                        >
                            <PlayCircle className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                            See How It Works
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="flex items-center gap-6 mt-8"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-neutral-100 overflow-hidden shadow-sm">
                                    <img src={`https://i.pravatar.cc/80?img=${i + 10}`} alt="Community member" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="text-sm text-neutral-500 font-medium">
                            Trusted by <span className="text-neutral-900 font-bold">1,000+</span> members
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Visual */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="order-1 lg:order-2 relative h-[45vh] lg:h-auto min-h-[420px] w-full flex items-center justify-center"
                >
                    <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
                        {/* Main Image */}
                        <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-neutral-900/10 z-20">
                            <img
                                src="/images/clinic_team_outside.jpg"
                                alt="Karmaya Team"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                            />

                            {/* Glass Overlay */}
                            <div className="absolute bottom-4 left-4 right-4 p-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl z-30">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-[11px] font-semibold text-white/70 uppercase tracking-wider mb-0.5">Live Status</div>
                                        <div className="text-white font-bold text-base">Accepting Patients</div>
                                    </div>
                                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative blur orbs */}
                        <div className="absolute -top-8 -right-8 w-24 h-24 bg-amber-200/60 rounded-full blur-xl animate-float" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200/60 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
