import { motion } from 'framer-motion';
import { Heart, Target, Users, Sparkles } from 'lucide-react';

const About = () => {
    const values = [
        { letter: 'K', word: 'Kindness', icon: Heart, color: 'text-rose-500', bg: 'bg-rose-50' },
        { letter: 'A', word: 'Action', icon: Sparkles, color: 'text-amber-500', bg: 'bg-amber-50' },
        { letter: 'R', word: 'Resilience', icon: Target, color: 'text-cyan-500', bg: 'bg-cyan-50' },
        { letter: 'M', word: 'Motivation', icon: Sparkles, color: 'text-violet-500', bg: 'bg-violet-50' },
        { letter: 'A', word: 'Affection', icon: Heart, color: 'text-pink-500', bg: 'bg-pink-50' },
        { letter: 'Y', word: 'Youthfulness', icon: Users, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { letter: 'A', word: 'Appreciation', icon: Sparkles, color: 'text-orange-500', bg: 'bg-orange-50' },
    ];

    return (
        <section id="mission" className="py-20 md:py-28 bg-neutral-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-600 font-semibold text-xs tracking-wider uppercase mb-5 shadow-sm">
                        Our Foundation
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-5 tracking-tight">
                        The <span className="gradient-text">K.A.R.M.A.Y.A</span> Philosophy
                    </h2>
                    <p className="text-lg text-neutral-500 max-w-3xl mx-auto leading-relaxed">
                        More than an acronym — it's a <span className="text-neutral-900 font-semibold">way of life</span> that guides every interaction, every treatment, and every relationship we build.
                    </p>
                </motion.div>

                {/* Values Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 mb-16">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                className="group"
                            >
                                <div className="bg-white p-5 md:p-6 rounded-2xl shadow-premium hover:shadow-premium-hover transition-all duration-300 border border-neutral-100">
                                    <div className={`w-10 h-10 ${value.bg} rounded-xl flex items-center justify-center mb-3`}>
                                        <Icon className={`w-5 h-5 ${value.color}`} />
                                    </div>
                                    <div className={`text-3xl md:text-4xl font-extrabold ${value.color} mb-1 tracking-tight`}>
                                        {value.letter}
                                    </div>
                                    <h3 className="text-sm md:text-base font-bold text-neutral-900">{value.word}</h3>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mission Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl p-10 md:p-16 text-white overflow-hidden group"
                >
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/images/patient_consultation.jpg"
                            alt="Doctor consulting with patient"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-neutral-900/70"></div>
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">Our Mission</h3>
                        <p className="text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto text-neutral-200">
                            To provide <span className="font-bold text-white">accessible, holistic primary healthcare</span> to underserved communities through a sustainable micro-clinic model that empowers local populations and creates lasting positive change.
                        </p>
                        <div className="mt-10 flex flex-wrap justify-center gap-8 md:gap-12">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">100%</div>
                                <div className="text-neutral-400 text-sm font-medium">Community-Driven</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">9</div>
                                <div className="text-neutral-400 text-sm font-medium">Service Pillars</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">∞</div>
                                <div className="text-neutral-400 text-sm font-medium">Impact Potential</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
