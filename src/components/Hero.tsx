import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[100svh] flex items-center bg-neutral-900 overflow-hidden" aria-label="Hero">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/gallery/Karmaya Clinic Big and nice photo everyone outside with Mac.jpeg"
                    alt=""
                    className="w-full h-full object-cover opacity-30"
                    loading="eager"
                    aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-neutral-900/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-neutral-900/30" />
            </div>

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:80px_80px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-24 pb-16">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/80 font-medium text-xs tracking-wide mb-8">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                            <span>Community-First Healthcare</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[0.95] tracking-[-0.03em] mb-6"
                    >
                        Healing Communities,{' '}
                        <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300">
                            One Pillar at a Time.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="text-base md:text-lg text-neutral-300 leading-relaxed max-w-xl mb-8 font-medium"
                    >
                        Karmaya Clinics provide <span className="text-white font-semibold">holistic primary healthcare</span> through
                        9 interconnected pillars — serving underserved communities in the Philippines with a sustainable,
                        community-powered micro-clinic model.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row gap-3"
                    >
                        <a
                            href="#join-hub"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('join-hub')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-7 py-3.5 bg-white text-neutral-900 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all text-center flex items-center justify-center gap-2 group hover:bg-neutral-100"
                        >
                            Join Our Mission
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <button
                            onClick={() => document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-7 py-3.5 bg-white/10 text-white border border-white/20 rounded-full font-semibold text-sm hover:bg-white/20 transition-all text-center"
                        >
                            Explore Our Work
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="flex items-center gap-4 mt-10"
                    >
                        <div className="flex -space-x-2">
                            {[11, 12, 13, 14].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-neutral-800 bg-neutral-700 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/64?img=${i}`} alt="" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="text-xs text-neutral-400 font-medium">
                            Trusted by <span className="text-white font-bold">1,000+</span> community members
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
        </section>
    );
};

export default Hero;
