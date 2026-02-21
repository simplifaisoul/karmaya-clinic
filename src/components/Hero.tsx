import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Star } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-white pt-20 pb-12">
            {/* AG-Style Gradient Mesh Background */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-gradient-to-br from-blue-50 via-indigo-50 to-transparent rounded-full blur-[100px] opacity-50" />
                <div className="absolute top-[30%] -left-[15%] w-[50vw] h-[50vw] bg-gradient-to-tr from-blue-50/80 to-transparent rounded-full blur-[80px] opacity-40" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                {/* Left Column: Typography & Content */}
                <div className="flex flex-col gap-5 order-2 lg:order-1 pb-8 lg:pb-0">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-xs tracking-wide mb-6">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            <span>Community-First Healthcare</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-neutral-900 leading-[0.95] tracking-[-0.03em] mb-6">
                            Healing <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Together.</span>
                        </h1>

                        <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-lg font-medium">
                            A small-scale, personalized healthcare model focused on{' '}
                            <span className="text-neutral-900 font-semibold">proactive prevention</span>{' '}
                            and supporting patients through a sustainable journey toward better{' '}
                            <span className="text-blue-600 font-bold">health</span>.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row gap-3 mt-2"
                    >
                        <a
                            href="#join-hub"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('join-hub')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-7 py-3.5 bg-neutral-900 text-white rounded-full font-semibold text-sm shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:bg-neutral-800 transition-all text-center flex items-center justify-center gap-2 group"
                        >
                            Join Our Mission
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <button
                            onClick={() => document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-7 py-3.5 bg-white text-neutral-700 border border-neutral-200 rounded-full font-semibold text-sm hover:bg-neutral-50 hover:border-neutral-300 transition-all text-center flex items-center justify-center gap-2 shadow-sm hover:shadow-md group"
                        >
                            <PlayCircle className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                            See How It Works
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex items-center gap-4 mt-4"
                    >
                        <div className="flex -space-x-2.5">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-neutral-100 overflow-hidden shadow-sm">
                                    <img src={`https://i.pravatar.cc/64?img=${i + 10}`} alt="Community member" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="text-xs text-neutral-500 font-medium">
                            Trusted by <span className="text-neutral-900 font-bold">1,000+</span> members
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Visual */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="order-1 lg:order-2 relative w-full flex items-center justify-center"
                >
                    <div className="relative w-full max-w-sm mx-auto">
                        {/* Main Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-neutral-900/10 aspect-[4/5]">
                            <img
                                src="/images/gallery/Karmaya Clinic Big and nice photo everyone outside with Mac.jpeg"
                                alt="Karmaya Team"
                                className="w-full h-full object-cover"
                                loading="eager"
                            />

                            {/* Glass Overlay */}
                            <div className="absolute bottom-3 left-3 right-3 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-[10px] font-semibold text-white/70 uppercase tracking-wider mb-0.5">Live Status</div>
                                        <div className="text-white font-bold text-sm">Accepting Patients</div>
                                    </div>
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_6px_rgba(74,222,128,0.5)]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
