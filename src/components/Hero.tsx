import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-primary font-sans">
            {/* Animated Background Gradients - The "Sick" vibe */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-400 rounded-full blur-[120px] opacity-30 animate-float" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-action rounded-full blur-[100px] opacity-20 animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-white rounded-full blur-[80px] opacity-10 animate-pulse-glow" />
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 bg-repeat mix-blend-overlay"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center">
                {/* Text Content */}
                <div className="w-full md:w-1/2 text-left pt-20 md:pt-0">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-block mb-4 px-4 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-sm font-bold tracking-wider uppercase shadow-sm"
                        >
                            🌟 Transforming Communities Since 2024
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 tracking-tight drop-shadow-md">
                            <span className="block">Karmaya</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-white to-blue-100 animate-pulse-slow pb-2">
                                MicroClinics
                            </span>
                        </h1>

                        <div className="mb-10 pl-6 border-l-4 border-action/80 max-w-xl backdrop-blur-sm bg-black/10 rounded-r-xl py-4 pr-4">
                            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed italic drop-shadow-sm">
                                "A small-scale, personalized healthcare model... focused on proactive prevention and supporting patients through a sustainable journey toward better health."
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-action text-white rounded-full font-bold text-lg shadow-lg shadow-action/30 transition-all text-center flex items-center justify-center gap-2"
                            >
                                Join Our Mission
                                <ArrowRight className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href="#pillars"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center"
                            >
                                Explore Our Work
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image / Visual */}
                <div className="w-full md:w-1/2 mt-12 md:mt-0 relative hidden md:block">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.4, type: "spring" }}
                        className="relative z-10"
                    >
                        {/* Image Container */}
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-[2rem] backdrop-blur-3xl border border-white/10 animate-pulse-slow"></div>
                            <img
                                src="/images/clinic_team_outside.jpg"
                                alt="Karmaya Team"
                                className="rounded-[2rem] shadow-2xl border-4 border-white/20 object-cover w-full h-full transform hover:rotate-1 transition-transform duration-500"
                                onError={(e) => {
                                    // Fallback if image missing
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Floating Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 }}
                        className="absolute bottom-10 -left-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl max-w-xs"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-action p-3 rounded-full">
                                <Heart className="w-6 h-6 text-white fill-current" />
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">1,000+</p>
                                <p className="text-blue-100 text-sm">Lives Impacted</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
