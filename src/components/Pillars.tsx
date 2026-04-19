import {
    HeartPulse,
    BrainCircuit,
    BookOpen,
    Leaf,
    Apple,
    Users,
    Sparkles,
    Coins,
    Activity
} from 'lucide-react';

const Pillars = () => {
    const pillars = [
        {
            num: 1, title: 'Physical Health', subtitle: 'Foundational Care',
            desc: 'Stay ahead with comprehensive check-ups and rapid-response care to keep your body strong and resilient.',
            icon: HeartPulse, color: 'text-slate-500', bg: 'bg-slate-50', border: 'border-slate-100'
        },
        {
            num: 2, title: 'Preventive Lifestyle', subtitle: 'The Daily Essentials',
            desc: 'Master the "Critical Elements" of consistent movement, 7–8 hours of sleep, and proper hydration.',
            icon: Activity, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100'
        },
        {
            num: 3, title: 'Nutritional Wellness', subtitle: 'The Power of Color',
            desc: 'Eat at least three colors of fruits and vegetables daily to fuel your body with essential nutrients and energy.',
            icon: Apple, color: 'text-green-500', bg: 'bg-green-50', border: 'border-green-100'
        },
        {
            num: 4, title: 'Emotional & Mental Balance', subtitle: 'Nurture Your Mind',
            desc: 'Keep your nervous system balanced through mental wellness check-ins and simple stress-management tools.',
            icon: BrainCircuit, color: 'text-indigo-500', bg: 'bg-indigo-50', border: 'border-indigo-100'
        },
        {
            num: 5, title: 'Social Connection', subtitle: 'Engage Your Community',
            desc: 'Build a sense of belonging through local sports, youth programs, and shared community events.',
            icon: Users, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100'
        },
        {
            num: 6, title: 'Environmental Health', subtitle: 'Thrive in Green Spaces',
            desc: 'Join initiatives like recycling and community greening to create a healthier physical world for everyone.',
            icon: Leaf, color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-100'
        },
        {
            num: 7, title: 'Educational Growth', subtitle: 'Expand Your Horizons',
            desc: 'Grow through literacy programs and mentorships that empower you with the knowledge to thrive.',
            icon: BookOpen, color: 'text-cyan-500', bg: 'bg-cyan-50', border: 'border-cyan-100'
        },
        {
            num: 8, title: 'Financial Opportunity', subtitle: 'Build Economic Vitality',
            desc: 'Access programs and tools designed to create a clear path toward financial stability and independence.',
            icon: Coins, color: 'text-slate-500', bg: 'bg-slate-50', border: 'border-slate-100'
        },
        {
            num: 9, title: 'Spiritual & Purposeful Connection', subtitle: 'Align with Your Purpose',
            desc: 'Find peace and inner harmony through local support groups and mindfulness practices.',
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
                        The 9 Steps of Ecosystem Wellness
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

                {/* The Power of the Ecosystem */}
                <div className="mt-12 md:mt-16 bg-neutral-50 rounded-2xl p-8 md:p-12 border border-neutral-100 text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3">The Power of the Ecosystem</h3>
                    <p className="text-neutral-500 max-w-2xl mx-auto leading-relaxed">
                        True wellness is a collective effort. By following these 9 Steps, we go beyond the check-up to ensure individuals and communities thrive in perfect harmony.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pillars;
