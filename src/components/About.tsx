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
        <section id="mission" className="py-16 md:py-24 bg-neutral-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-600 font-semibold text-xs tracking-wider uppercase mb-4 shadow-sm">
                        Our Foundation
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
                        The <span className="gradient-text">K.A.R.M.A.Y.A</span> Philosophy
                    </h2>
                    <p className="text-base md:text-lg text-neutral-500 max-w-3xl mx-auto leading-relaxed">
                        More than an acronym — it's a <span className="text-neutral-900 font-semibold">way of life</span> that guides every interaction, every treatment, and every relationship we build.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div key={index} className="bg-white p-4 md:p-5 rounded-xl shadow-premium hover:shadow-premium-hover transition-all duration-300 border border-neutral-100">
                                <div className={`w-9 h-9 ${value.bg} rounded-lg flex items-center justify-center mb-2.5`}>
                                    <Icon className={`w-4 h-4 ${value.color}`} />
                                </div>
                                <div className={`text-2xl md:text-3xl font-extrabold ${value.color} mb-0.5 tracking-tight`}>
                                    {value.letter}
                                </div>
                                <h3 className="text-sm font-bold text-neutral-900">{value.word}</h3>
                            </div>
                        );
                    })}
                </div>

                {/* Mission Statement */}
                <div className="relative rounded-2xl p-8 md:p-14 text-white overflow-hidden group">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/images/gallery/Group outside assesment.jpeg"
                            alt="Community health outreach"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-neutral-900/70"></div>
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-5 text-center text-white">Our Mission</h3>
                        <p className="text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto text-neutral-200">
                            To provide <span className="font-bold text-white">accessible, holistic primary healthcare</span> to underserved communities through a sustainable micro-clinic model that empowers local populations and creates lasting positive change.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-10">
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-extrabold text-white mb-0.5">100%</div>
                                <div className="text-neutral-400 text-xs font-medium">Community-Driven</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-extrabold text-white mb-0.5">9</div>
                                <div className="text-neutral-400 text-xs font-medium">Service Pillars</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-extrabold text-white mb-0.5">∞</div>
                                <div className="text-neutral-400 text-xs font-medium">Impact Potential</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
