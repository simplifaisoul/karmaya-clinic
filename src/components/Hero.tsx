import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-white font-sans">
            {/* Animated Background Gradients - Light & clean for White theme */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[100px] opacity-60 animate-float" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-50 rounded-full blur-[100px] opacity-50 animate-float" style={{ animationDelay: '2s' }} />
                {/* Subtle mesh pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
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
                            className="inline-block mb-4 px-4 py-1 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-sm font-bold tracking-wider uppercase shadow-sm"
                        >
                            🌟 Transforming Communities Since 2024
                        </motion.div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-900 leading-tight mb-6 tracking-tight break-words hyphens-auto">
                            <span className="block">Karmaya</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 animate-pulse-slow pb-2">
                                MicroClinics
                            </span>
                        </h1>

                        <div className="mb-8 md:mb-12 pl-6 border-l-4 border-blue-600 max-w-2xl py-2">
                            <p className="text-2xl md:text-4xl text-neutral-600 font-medium leading-tight font-heading tracking-tight italic">
                                "A small-scale, personalized healthcare model... focused on proactive prevention and supporting patients through a sustainable journey toward better health."
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.a
                                href="#join-hub"
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-5 bg-blue-600 text-white rounded-full font-bold text-lg shadow-xl shadow-blue-600/20 transition-all text-center flex items-center justify-center gap-2"
                            >
                                Join Our Mission
                                <ArrowRight className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href="#pillars"
                                whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-5 bg-white border border-neutral-200 text-neutral-700 rounded-full font-bold text-lg hover:border-neutral-300 transition-all text-center"
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
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-[2rem] border border-neutral-100 animate-pulse-slow"></div>
                            <img
                                src="/images/clinic_team_outside.jpg"
                                alt="Karmaya Team"
                                className="rounded-[2rem] shadow-2xl shadow-blue-900/10 border-4 border-white object-cover w-full h-full transform hover:rotate-1 transition-transform duration-500"
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
                <div className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
