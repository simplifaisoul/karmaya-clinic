import {
    HeartPulse,
    BrainCircuit,
    BookOpen,
    Leaf,
    Apple,
    Users,
    Sparkles,
    Coins,
    Activity,
    Droplets,
    Moon
} from 'lucide-react';

const Pillars = () => {
    const pillars = [
        {
            num: 1, title: 'Physical Health', subtitle: 'Foundational Care',
            desc: 'Comprehensive general examinations and rapid-response emergency action for immediate healthcare needs.',
            icon: HeartPulse, color: 'text-slate-500', bg: 'bg-slate-50', border: 'border-slate-100'
        },
        {
            num: 2, title: 'Preventive Lifestyle', subtitle: 'Daily Habits',
            desc: 'Empowering patients with the "4 Critical Elements"—daily movement, 7–8 hours of consistent sleep, and proper hydration.',
            icon: Activity, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100'
        },
        {
            num: 3, title: 'Nutritional Wellness', subtitle: 'Fueling the System',
            desc: 'Education on the "Power of Color," ensuring access and guidance for consuming three colors of fruits and vegetables daily.',
            icon: Apple, color: 'text-green-500', bg: 'bg-green-50', border: 'border-green-100'
        },
        {
            num: 4, title: 'Emotional & Mental Balance', subtitle: 'Stress Reduction',
            desc: 'Mental wellness assessments and stress-management techniques to support a balanced nervous system.',
            icon: BrainCircuit, color: 'text-indigo-500', bg: 'bg-indigo-50', border: 'border-indigo-100'
        },
        {
            num: 5, title: 'Social Connection', subtitle: 'Community Engagement',
            desc: 'Building belonging through weekly sports, youth programs, and collective community activities.',
            icon: Users, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100'
        },
        {
            num: 6, title: 'Environmental Health', subtitle: 'Sustainable Living',
            desc: 'Community-led initiatives for recycling, greening spaces, and creating a healthier physical surroundings.',
            icon: Leaf, color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-100'
        },
        {
            num: 7, title: 'Educational Growth', subtitle: 'Knowledge Sharing',
            desc: 'Continuous learning and literacy programs led by qualified community volunteers and mentors.',
            icon: BookOpen, color: 'text-cyan-500', bg: 'bg-cyan-50', border: 'border-cyan-100'
        },
        {
            num: 8, title: 'Financial Opportunity', subtitle: 'Economic Vitality',
            desc: 'Providing income-generation tools and programs that create paths toward financial stability and independence.',
            icon: Coins, color: 'text-slate-500', bg: 'bg-slate-50', border: 'border-slate-100'
        },
        {
            num: 9, title: 'Spiritual & Purposeful Connection', subtitle: 'Inner Harmony',
            desc: 'Connecting members with local support groups and mindfulness practices to foster a sense of purpose and peace.',
            icon: Sparkles, color: 'text-violet-500', bg: 'bg-violet-50', border: 'border-violet-100'
        },
    ];

    return (
        <section id="pillars" className="py-16 md:py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-600 font-semibold text-xs tracking-wider uppercase mb-4">
                        Ecosystem Wellness
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
                        The 9 Pillars of Ecosystem Wellness
                    </h2>
                    <p className="text-base md:text-lg text-neutral-500 max-w-3xl mx-auto leading-relaxed">
                        Our holistic approach treats the patient as a complete ecosystem, addressing every facet of biological and societal health.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.title}
                            className={`bg-white rounded-xl p-5 md:p-6 shadow-premium hover:shadow-premium-hover transition-all duration-300 border ${pillar.border} group cursor-default`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-10 h-10 rounded-lg ${pillar.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <pillar.icon className={`w-5 h-5 ${pillar.color}`} />
                                </div>
                                <span className="text-xs font-bold text-neutral-300">0{pillar.num}</span>
                            </div>
                            <h3 className="text-base font-bold text-neutral-900 mb-0.5">{pillar.title}</h3>
                            <p className="text-xs font-semibold text-blue-500 mb-2">{pillar.subtitle}</p>
                            <p className="text-neutral-500 leading-relaxed text-sm">
                                {pillar.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Why the Ecosystem Model? */}
                <div className="mt-12 md:mt-16 bg-neutral-50 rounded-2xl p-8 md:p-12 border border-neutral-100 text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3">Why the Ecosystem Model?</h3>
                    <p className="text-neutral-500 max-w-2xl mx-auto leading-relaxed">
                        Traditional medicine often treats parts in isolation. By addressing these 9 Pillars, we ensure that the entire system—the individual and the community—thrives in harmony.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pillars;
