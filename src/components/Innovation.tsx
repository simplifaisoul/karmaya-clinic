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
            color: 'text-blue-500',
            bg: 'bg-blue-50'
        }
    ];

    return (
        <section id="innovation" className="py-16 md:py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Left: Text Content */}
                    <div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-600 font-semibold text-xs tracking-wider uppercase mb-4">
                            Strategic Innovation
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
                            The Sustainability Plan
                        </h2>
                        <p className="text-base md:text-lg text-neutral-500 mb-8 leading-relaxed">
                            Moving beyond traditional donor-funding. We implement innovative economic models that empower communities to fund their own healthcare.
                        </p>

                        <div className="space-y-6">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex gap-4">
                                    <div className={`${feature.bg} p-3 rounded-xl h-fit flex-shrink-0`}>
                                        <feature.icon className={`w-5 h-5 ${feature.color}`} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-neutral-900 mb-1">{feature.title}</h4>
                                        <p className="text-neutral-500 text-sm leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative">
                        <div className="bg-neutral-50 rounded-2xl p-8 md:p-10 border border-neutral-100 text-center min-h-[300px] flex flex-col items-center justify-center relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                    <RefreshCw className="w-8 h-8 text-blue-500" />
                                </div>
                                <h5 className="text-xl font-bold text-neutral-900 mb-2">Circular Economy</h5>
                                <p className="text-neutral-500 text-sm">Turning Waste into Wellness</p>
                            </div>
                        </div>

                        {/* Floating card */}
                        <div className="absolute -bottom-4 -left-2 bg-white p-4 rounded-xl shadow-premium-hover max-w-[180px] hidden sm:block z-30 border border-neutral-100">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <span className="font-bold text-xs text-neutral-600">Impact Tracker</span>
                            </div>
                            <div className="text-xl font-extrabold text-neutral-900">1,000+</div>
                            <p className="text-xs text-neutral-500">Members served per clinic</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Innovation;
