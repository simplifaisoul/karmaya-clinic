import { motion } from 'framer-motion';
import { Heart, Target, Users, Sparkles } from 'lucide-react';

const About = () => {
    const values = [
        { letter: 'K', word: 'Kindness', icon: Heart, color: 'from-pink-500 to-rose-500' },
        { letter: 'A', word: 'Action', icon: Sparkles, color: 'from-orange-500 to-amber-500' },
        { letter: 'R', word: 'Resilience', icon: Target, color: 'from-teal-500 to-cyan-500' },
        { letter: 'M', word: 'Motivation', icon: Sparkles, color: 'from-purple-500 to-indigo-500' },
        { letter: 'A', word: 'Affection', icon: Heart, color: 'from-red-500 to-pink-500' },
        { letter: 'Y', word: 'Youthfulness', icon: Users, color: 'from-green-500 to-emerald-500' },
        { letter: 'A', word: 'Appreciation', icon: Sparkles, color: 'from-yellow-500 to-orange-500' },
    ];

    return (
        <section id="mission" className="py-24 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full font-semibold text-sm mb-4">
                        💡 Our Foundation
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        The <span className="gradient-text">K.A.R.M.A.Y.A</span> Philosophy
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                        More than an acronym, it's a <span className="text-primary font-semibold">way of life</span> that guides every interaction, every treatment, and every relationship we build.
                    </p>
                </motion.div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="group relative"
                            >
                                <div className="relative bg-gradient-to-br from-white to-neutral-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 overflow-hidden">
                                    {/* Gradient overlay on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                                    <div className="relative z-10">
                                        <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div className={`text-5xl font-bold bg-gradient-to-br ${value.color} bg-clip-text text-transparent mb-2`}>
                                            {value.letter}
                                        </div>
                                        <h3 className="text-xl font-bold text-neutral-900 mb-2">{value.word}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mission Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Mission</h3>
                        <p className="text-xl md:text-2xl leading-relaxed text-center max-w-4xl mx-auto font-light">
                            To provide <span className="font-bold text-secondary">accessible, holistic primary healthcare</span> to underserved communities through a sustainable micro-clinic model that empowers local populations and creates lasting positive change.
                        </p>
                        <div className="mt-10 flex flex-wrap justify-center gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                                <div className="text-white/80">Community-Driven</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-secondary mb-2">9</div>
                                <div className="text-white/80">Service Pillars</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-secondary mb-2">∞</div>
                                <div className="text-white/80">Impact Potential</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
