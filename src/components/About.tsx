import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Smile } from 'lucide-react';

const About = () => {
    // K.A.R.M.A.Y.A
    const values = [
        { letter: 'K', word: 'Kindness', desc: 'Compassion in every interaction.' },
        { letter: 'A', word: 'Action', desc: 'Moving beyond words to tangible help.' },
        { letter: 'R', word: 'Resilience', desc: 'Building strength in adversity.' },
        { letter: 'M', word: 'Motivation', desc: 'Inspiring positive change.' },
        { letter: 'A', word: 'Affection', desc: 'Caring with genuine warmth.' },
        { letter: 'Y', word: 'Youthfulness', desc: 'Energy and forward-thinking.' },
        { letter: 'A', word: 'Appreciation', desc: 'Valuing every individual.' },
    ];

    return (
        <section id="mission" className="py-20 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-wide uppercase mb-2">Our Mission</h2>
                    <h3 className="text-4xl font-heading font-bold text-neutral-900 mb-6">Holistic Care for Underserved Communities</h3>
                    <p className="max-w-3xl mx-auto text-lg text-neutral-600 leading-relaxed">
                        Karmaya operates as a micro-clinic model focusing on the root causes of distress while addressing physical symptoms.
                        We target communities where socioeconomic poverty indicators are below the national average, providing a
                        three-pillar approach of <span className="text-secondary font-bold">Detection, Prevention, and Intervention</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Interactive Acronym */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-secondary">
                        <h4 className="text-2xl font-bold mb-6 text-neutral-800 border-b pb-4">Core Values</h4>
                        <div className="space-y-3">
                            {values.map((v, i) => (
                                <motion.div
                                    key={v.letter + i}
                                    whileHover={{ x: 10, color: '#2A9D8F' }}
                                    className="flex items-center cursor-default group"
                                >
                                    <span className="w-12 h-12 flex items-center justify-center bg-neutral-100 rounded-full text-xl font-bold text-secondary group-hover:bg-secondary group-hover:text-white transition-colors mr-4">
                                        {v.letter}
                                    </span>
                                    <div>
                                        <span className="font-bold text-neutral-900 block group-hover:text-primary transition-colors">{v.word}</span>
                                        <span className="text-sm text-neutral-500">{v.desc}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Operational Model */}
                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                    <Activity className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h5 className="text-lg font-bold text-neutral-900">Facility & Scale</h5>
                                <p className="mt-2 text-neutral-600">
                                    Small to medium facilities (144-300 sq ft) serving up to 1,000 community members.
                                    Built with locally sourced equipment to support the local economy.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                                    <ShieldCheck className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h5 className="text-lg font-bold text-neutral-900">The 3-Pillar Approach</h5>
                                <p className="mt-2 text-neutral-600">
                                    <strong>Detection</strong> of early warning signs.
                                    <strong>Prevention</strong> through education and lifestyle.
                                    <strong>Intervention</strong> with medical and holistic support.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-action text-white">
                                    <Smile className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h5 className="text-lg font-bold text-neutral-900">Community Driven</h5>
                                <p className="mt-2 text-neutral-600">
                                    We empower communities to take ownership of their health journey, fostering a spirit of
                                    "people helping people".
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
