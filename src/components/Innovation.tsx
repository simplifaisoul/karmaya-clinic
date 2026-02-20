import { motion } from 'framer-motion';
import { RefreshCw, Zap, Globe, ArrowRightLeft } from 'lucide-react';

const Innovation = () => {
    const features = [
        {
            icon: ArrowRightLeft,
            title: 'Service Credit Swap',
            desc: 'Community members trade labor (e.g., carpentry) for clinic services. Hours are stored as "credit," eliminating the need for cash.',
            color: 'text-blue-500',
            bg: 'bg-blue-50'
        },
        {
            icon: Zap,
            title: 'Social Enterprise Technology',
            desc: 'Partnering with a Canadian University to deploy Multi-Use Machines: plastic shredders, generators, and water pumps.',
            color: 'text-indigo-500',
            bg: 'bg-indigo-50'
        },
        {
            icon: Globe,
            title: 'Scaling & Partnerships',
            desc: 'From our pilot in the Philippines to Cebu. A hybrid model where commercial arms subsidize micro-clinics globally.',
            color: 'text-emerald-500',
            bg: 'bg-emerald-50'
        }
    ];

    return (
        <section id="innovation" className="py-20 md:py-28 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-600 font-semibold text-xs tracking-wider uppercase mb-5">
                            Strategic Innovation
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-5 tracking-tight">
                            The Sustainability Plan
                        </h2>
                        <p className="text-lg text-neutral-500 mb-10 leading-relaxed">
                            Moving beyond traditional donor-funding. We implement innovative economic models that empower communities to fund their own healthcare.
                        </p>

                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="flex gap-4"
                                >
                                    <div className={`${feature.bg} p-3 rounded-xl h-fit flex-shrink-0`}>
                                        <feature.icon className={`w-5 h-5 ${feature.color}`} />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-neutral-900 mb-1">{feature.title}</h4>
                                        <p className="text-neutral-500 text-sm leading-relaxed">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="relative"
                    >
                        <div className="bg-neutral-50 rounded-3xl p-8 md:p-12 border border-neutral-100 text-center min-h-[350px] flex flex-col items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-[0.04]"></div>
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <RefreshCw className="w-10 h-10 text-blue-500" />
                                </div>
                                <h5 className="text-2xl font-bold text-neutral-900 mb-2">Circular Economy</h5>
                                <p className="text-neutral-500">Turning Waste into Wellness</p>
                            </div>
                        </div>

                        {/* Floating card */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-4 bg-white p-5 rounded-xl shadow-premium-hover max-w-[200px] hidden sm:block z-30 border border-neutral-100"
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span className="font-bold text-xs text-neutral-600">Impact Tracker</span>
                            </div>
                            <div className="text-2xl font-extrabold text-neutral-900">1,000+</div>
                            <p className="text-xs text-neutral-500">Members served per clinic</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Innovation;
