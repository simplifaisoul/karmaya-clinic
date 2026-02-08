
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Globe } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-950 via-teal-900 to-teal-800">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Floating Orbs */}
            <motion.div
                className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"
                animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block mb-6"
                        >
                            <span className="px-4 py-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full text-secondary font-semibold text-sm">
                                🌟 Transforming Communities Since 2024
                            </span>
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
                            <span className="block">Karmaya</span>
                            <span className="block bg-gradient-to-r from-secondary via-yellow-300 to-secondary bg-clip-text text-transparent animate-shimmer">
                                MicroClinics
                            </span>
                        </h1>

                        <h2 className="text-2xl sm:text-3xl font-light text-white/90 mb-6 leading-relaxed">
                            <span className="text-secondary font-semibold">K</span>indness ·
                            <span className="text-secondary font-semibold"> A</span>ction ·
                            <span className="text-secondary font-semibold"> R</span>esilience ·
                            <span className="text-secondary font-semibold"> M</span>otivation ·
                            <span className="text-secondary font-semibold"> A</span>ffection ·
                            <span className="text-secondary font-semibold"> Y</span>outhfulness ·
                            <span className="text-secondary font-semibold"> A</span>ppreciation
                        </h2>

                        <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
                            A sustainable micro-clinic model bringing <span className="text-secondary font-semibold">holistic primary care</span> to underserved communities. "People helping people" through positive energy and tangible action.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.a
                                href="#mission"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group px-8 py-4 bg-gradient-to-r from-secondary to-yellow-400 text-neutral-900 font-bold rounded-full transition-all shadow-[0_0_30px_rgba(233,196,106,0.4)] hover:shadow-[0_0_50px_rgba(233,196,106,0.6)] flex items-center justify-center gap-3 text-lg"
                            >
                                <Heart className="w-5 h-5" />
                                Our Mission
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-3 text-lg border-2 border-white/30"
                            >
                                <Users className="w-5 h-5" />
                                Get Involved
                            </motion.a>
                        </div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20"
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-secondary mb-1">1,000+</div>
                                <div className="text-sm text-white/70">Lives Impacted</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-secondary mb-1">9</div>
                                <div className="text-sm text-white/70">Pillars of Care</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-secondary mb-1">2</div>
                                <div className="text-sm text-white/70">Active Clinics</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 animate-pulse-glow">
                            <img
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%232A9D8F' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='white'%3EKarmaya Team Photo%3C/text%3E%3C/svg%3E"
                                alt="Karmaya Clinic Team"
                                className="w-full h-auto"
                                onError={(e) => {
                                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%232A9D8F' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='white'%3EKarmaya Team%3C/text%3E%3C/svg%3E";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent"></div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                                    <Globe className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-sm text-neutral-600">Expanding to</div>
                                    <div className="font-bold text-neutral-900">Cebu, Philippines</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Wave */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
                <svg className="relative block w-full h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F9FAFB"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
