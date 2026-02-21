import {
    HeartPulse,
    BrainCircuit,
    BookOpen,
    Leaf,
    Apple,
    Users,
    Sparkles,
    Smile,
    Coins
} from 'lucide-react';

const Pillars = () => {
    const pillars = [
        { title: 'Physical', icon: HeartPulse, desc: 'General examinations and emergency action for immediate healthcare needs.', color: 'text-rose-500', bg: 'bg-rose-50', border: 'border-rose-100' },
        { title: 'Emotional', icon: Smile, desc: 'Mental wellness assessments and support for emotional well-being.', color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-100' },
        { title: 'Educational', icon: BookOpen, desc: 'Guidance and learning led by qualified community volunteers.', color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100' },
        { title: 'Environmental', icon: Leaf, desc: 'Community-led recycling, greening, and sustainability programs.', color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-100' },
        { title: 'Nutritional', icon: Apple, desc: 'Weekly education on healthy eating habits and food access.', color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-100' },
        { title: 'Social', icon: Users, desc: 'Weekly sports and activities for youth engagement and community.', color: 'text-violet-500', bg: 'bg-violet-50', border: 'border-violet-100' },
        { title: 'Spiritual', icon: Sparkles, desc: 'Connecting members with local support and spiritual groups.', color: 'text-indigo-500', bg: 'bg-indigo-50', border: 'border-indigo-100' },
        { title: 'Intellectual', icon: BrainCircuit, desc: 'Access to books, learning tools, and community education.', color: 'text-cyan-500', bg: 'bg-cyan-50', border: 'border-cyan-100' },
        { title: 'Financial', icon: Coins, desc: 'Income generation tools and economic opportunity programs.', color: 'text-slate-500', bg: 'bg-slate-50', border: 'border-slate-100' },
    ];

    return (
        <section id="pillars" className="py-16 md:py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-600 font-semibold text-xs tracking-wider uppercase mb-4">
                        Holistic Care
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
                        The 9 Pillars of Health
                    </h2>
                    <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
                        A complete approach moving beyond traditional medication to address biological and societal wellness.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.title}
                            className={`bg-white rounded-xl p-5 md:p-6 shadow-premium hover:shadow-premium-hover transition-all duration-300 border ${pillar.border} group cursor-default`}
                        >
                            <div className={`w-10 h-10 rounded-lg ${pillar.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <pillar.icon className={`w-5 h-5 ${pillar.color}`} />
                            </div>
                            <h3 className="text-base font-bold text-neutral-900 mb-1.5">{pillar.title}</h3>
                            <p className="text-neutral-500 leading-relaxed text-sm">
                                {pillar.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pillars;
