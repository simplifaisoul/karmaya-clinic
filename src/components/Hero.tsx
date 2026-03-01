import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-[100svh] flex items-center overflow-hidden" aria-label="Hero">
            {/* Light Blue Gradient Background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-400" />

            {/* Subtle decorative elements */}
            <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
                <div className="absolute -top-[20%] -right-[15%] w-[70vw] h-[70vw] bg-white/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] -left-[10%] w-[50vw] h-[50vw] bg-cyan-300/10 rounded-full blur-[80px]" />
                <div className="absolute top-[50%] right-[20%] w-[30vw] h-[30vw] bg-blue-300/10 rounded-full blur-[60px]" />
            </div>

            {/* Grid overlay for depth */}
            <div className="absolute inset-0 z-[2] opacity-[0.04] pointer-events-none bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:80px_80px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center pt-24 pb-16">
                {/* Left Column: Content */}
                <div className="order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-white font-medium text-xs tracking-wide mb-6 backdrop-blur-sm">
                            <Star className="w-3 h-3 fill-slate-300 text-slate-300" />
                            <span>Community-First Healthcare</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[0.95] tracking-[-0.03em] mb-6 drop-shadow-sm"
                    >
                        Healing Communities,{' '}
                        <br className="hidden sm:block" />
                        <span className="text-white/90">
                            One Pillar at a Time.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="text-base md:text-lg text-blue-50 leading-relaxed max-w-xl mb-8"
                    >
                        Karmaya Clinics provide <span className="text-white font-semibold">holistic healthcare</span> through
                        9 essential steps—serving underserved communities in the Philippines with a sustainable,
                        community-powered micro-clinic model.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row gap-3"
                    >
                        <Link
                            to="/exchange"
                            className="px-7 py-3.5 bg-white text-blue-600 rounded-full font-bold text-sm shadow-lg shadow-blue-600/20 hover:shadow-xl hover:bg-blue-50 transition-all text-center flex items-center justify-center gap-2 group"
                        >
                            Join Our Mission
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            to="/pillars"
                            className="px-7 py-3.5 bg-white/15 text-white border border-white/25 rounded-full font-semibold text-sm hover:bg-white/25 transition-all text-center backdrop-blur-sm"
                        >
                            Explore Our Work
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="flex items-center gap-4 mt-10"
                    >
                        <div className="flex -space-x-2">
                            {[11, 12, 13, 14].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white/50 bg-blue-300 overflow-hidden shadow-sm">
                                    <img src={`https://i.pravatar.cc/64?img=${i}`} alt="" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="text-xs text-blue-100">
                            Trusted by <span className="text-white font-bold">1,000+</span> community members
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Team Photo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="order-1 lg:order-2 flex items-center justify-center"
                >
                    <div className="relative w-full max-w-md mx-auto">
                        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 aspect-[4/5] border-2 border-white/20">
                            <img
                                src="/images/clinic_team_outside.jpg"
                                alt="Karmaya Community Healthcare"
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                        </div>

                        {/* Floating status card */}
                        <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white p-3 sm:p-4 rounded-xl shadow-lg border border-blue-100 z-20">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.4)]" />
                                <span className="text-xs font-bold text-neutral-800">Accepting Patients</span>
                            </div>
                        </div>

                        {/* Floating pillar count */}
                        <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white px-4 py-2.5 rounded-xl shadow-lg border border-blue-100 z-20">
                            <div className="text-xl font-extrabold text-blue-600">9</div>
                            <div className="text-[10px] text-neutral-500 font-semibold">Steps</div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom wave transition */}
            <div className="absolute bottom-0 left-0 right-0 z-10">
                <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
                    <path d="M0 80V30C240 60 480 0 720 30C960 60 1200 10 1440 40V80H0Z" fill="white" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
