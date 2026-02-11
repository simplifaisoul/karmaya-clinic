
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Globe } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
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

                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-4">
                            <span className="block">Karmaya</span>
                            <span className="block bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">
                                MicroClinics
                            </span>
                        </h1>

                        {/* MicroClinic Definition */}
                        <p className="text-lg md:text-xl text-blue-100 mb-8 font-medium max-w-2xl border-l-4 border-action pl-4 italic">
                            "A small-scale, personalized healthcare model, a holistic primary care partner focused on proactive prevention and supporting patients through a sustainable journey toward better health."
                        </p>

                        <h2 className="text-2xl sm:text-3xl font-light text-white/90 mb-6 leading-relaxed hidden md:block">
                            <span className="text-action font-semibold">K</span>indness ·
                            <span className="text-action font-semibold"> A</span>ction ·
                            <span className="text-action font-semibold"> R</span>esilience ·
                            <span className="text-action font-semibold"> M</span>otivation ·
                            <span className="text-action font-semibold"> A</span>ffection ·
                            <span className="text-action font-semibold"> Y</span>outhfulness ·
                            <span className="text-action font-semibold"> A</span>ppreciation
                        </h2>

                        {/* Philosophy Quote */}
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-10 border border-white/20">
                            <p className="text-lg text-white italic">
                                "We are guided by the belief that primary care should be a supportive path to prevention, not just a response to illness."
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <a
                                href="#mission"
                                className="group px-8 py-4 bg-action text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2"
                            >
                                Our Mission
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-white text-primary-dark border-2 border-white rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
                            >
                                Get Involved
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-center"
                            >
                                <div className="flex items-center justify-center mb-2">
                                    <Heart className="w-6 h-6 text-action" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">1,000+</div>
                                <div className="text-sm text-blue-100">Lives Impacted</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="text-center"
                            >
                                <div className="flex items-center justify-center mb-2">
                                    <Users className="w-6 h-6 text-action" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">9</div>
                                <div className="text-sm text-blue-100">Pillars of Care</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="text-center"
                            >
                                <div className="flex items-center justify-center mb-2">
                                    <Globe className="w-6 h-6 text-action" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">2</div>
                                <div className="text-sm text-blue-100">Active Clinics</div>
                            </motion.div>
                        </div>
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
                                src="/images/clinic_team_outside.jpg"
                                alt="Karmaya Clinic Team"
                                className="w-full h-auto"
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
