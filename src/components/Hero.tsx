
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/95 to-teal-800/80 z-10" />
                <img
                    src="/images/hero.jpg"
                    alt="Karmaya Clinic Team"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-2xl">
                        Karmaya <span className="text-secondary">MicroClinics</span>
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-8 leading-normal">
                        Kindness, Action, Resilience & <span className="text-secondary font-bold">Hope.</span>
                        <br />
                        <span className="text-lg sm:text-xl opacity-90 block mt-4 font-sans">"People helping people" through positive energy and tangible action.</span>
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center sm:justify-start">
                        <a
                            href="#mission"
                            className="px-8 py-4 bg-secondary hover:bg-secondary-dark text-neutral-900 font-bold rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(233,196,106,0.3)] flex items-center justify-center gap-2 group text-lg"
                        >
                            Our Mission
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-primary-dark transition-all flex items-center justify-center text-lg shadow-lg hover:shadow-xl"
                        >
                            Get Involved
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Wave at bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
                <svg className="relative block w-full h-[80px] sm:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F9FAFB"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
