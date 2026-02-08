
import { motion } from 'framer-motion';
import {
    HeartPulse,
    BrainCircuit, // Intellectual
    BookOpen, // Educational
    Leaf, // Environmental
    Apple, // Nutritional
    Users, // Social
    Sparkles, // Spiritual
    Smile, // Emotional
    Coins // Financial
} from 'lucide-react';

const Pillars = () => {
    const pillars = [
        { title: 'Physical', icon: HeartPulse, desc: 'General examinations, immediate action for emergencies, and follow-up care.', color: 'bg-red-100 text-red-600' },
        { title: 'Emotional', icon: Smile, desc: 'Questionnaires to determine emotional status and mental well-being.', color: 'bg-yellow-100 text-yellow-600' }, // Changed Brain to Smile for Emotional
        { title: 'Educational', icon: BookOpen, desc: 'Regular support provided by qualified community volunteers.', color: 'bg-blue-100 text-blue-600' },
        { title: 'Environmental', icon: Leaf, desc: 'Community-led recycling and greening programs.', color: 'bg-green-100 text-green-600' },
        { title: 'Nutritional', icon: Apple, desc: 'Weekly educational programs on healthy eating.', color: 'bg-orange-100 text-orange-600' },
        { title: 'Social', icon: Users, desc: 'Weekly sports games for children aged 5–14.', color: 'bg-purple-100 text-purple-600' },
        { title: 'Spiritual', icon: Sparkles, desc: 'Connecting members with local religious or community support organizations.', color: 'bg-indigo-100 text-indigo-600' }, // Changed Sun to Sparkles
        { title: 'Intellectual', icon: BrainCircuit, desc: 'Providing access to books and community learning tools.', color: 'bg-teal-100 text-teal-600' },
        { title: 'Financial', icon: Coins, desc: 'Enabling income generation through tools like mechanical plastic shredders.', color: 'bg-slate-100 text-slate-600' },
    ];

    return (
        <section id="pillars" className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-secondary font-bold tracking-wide uppercase mb-2">Service Delivery</h2>
                    <h3 className="text-4xl font-heading font-bold text-neutral-900">The 9 Pillars of Health</h3>
                    <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
                        A complete approach moving beyond traditional medication to address biological and societal aspects of illness.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                            className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${pillar.color}`}>
                                <pillar.icon className="w-7 h-7" />
                            </div>
                            <h4 className="text-xl font-bold text-neutral-900 mb-3">{pillar.title}</h4>
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
