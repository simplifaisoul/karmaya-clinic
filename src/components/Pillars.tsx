import { motion } from 'framer-motion';
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
        <section id="pillars" className="py-20 md:py-28 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16 md:mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-600 font-semibold text-xs tracking-wider uppercase mb-5">
                        Holistic Care
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-5 tracking-tight">
                        The 9 Pillars of Health
                    </h2>
                    <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
                        A complete approach moving beyond traditional medication to address biological and societal wellness.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: index * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className={`bg-white rounded-2xl p-6 md:p-7 shadow-premium hover:shadow-premium-hover transition-all duration-300 border ${pillar.border} group cursor-default`}
                        >
                            <div className={`w-12 h-12 rounded-xl ${pillar.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
                            </div>
                            <h3 className="text-lg font-bold text-neutral-900 mb-2">{pillar.title}</h3>
                            <p className="text-neutral-500 leading-relaxed text-sm">
                                {pillar.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pillars;
