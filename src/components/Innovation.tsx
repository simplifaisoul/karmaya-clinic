
import { motion } from 'framer-motion';
import { RefreshCw, Zap, Globe, ArrowRightLeft } from 'lucide-react';

const Innovation = () => {
    return (
        <section id="innovation" className="py-24 bg-white text-neutral-900 overflow-hidden relative">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 z-0"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left: Text Content */}
                    <div className="lg:w-1/2">
                        <h2 className="text-secondary font-bold tracking-wide uppercase mb-2">Strategic Innovation</h2>
                        <h3 className="text-4xl font-heading font-bold text-neutral-900 mb-6">The Sustainability Plan</h3>
                        <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
                            To serve communities sustainably, we are moving beyond traditional donor-funding. We implement innovative economic models that empower the community to fund their own healthcare.
                        </p>

                        <div className="space-y-10">
                            <div className="flex gap-5">
                                <div className="mt-1 bg-blue-50 p-3 rounded-xl h-fit">
                                    <ArrowRightLeft className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-neutral-900 mb-2">Service Credit Swap (Non-Monetary Economy)</h4>
                                    <p className="text-neutral-500">
                                        Community members trade labor (e.g., carpentry) for clinic services. Hours are stored as "credit," eliminating the need for cash in low-income areas.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <div className="mt-1 bg-indigo-50 p-3 rounded-xl h-fit">
                                    <Zap className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-neutral-900 mb-2">Social Enterprise Technology</h4>
                                    <p className="text-neutral-500">
                                        Partnering with a Canadian University to deploy Multi-Use Machines: plastic shredders, generators, and water pumps. Communities collect waste &rarr; shred plastic &rarr; sell material &rarr; fund the clinic.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <div className="mt-1 bg-teal-50 p-3 rounded-xl h-fit">
                                    <Globe className="w-6 h-6 text-teal-600" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-neutral-900 mb-2">Scaling & Partnerships</h4>
                                    <p className="text-neutral-500">
                                        From our pilot in the Philippines to our upcoming site in Cebu. We aim for a future hybrid model where commercial arms subsidize micro-clinics globally.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual/Image Placeholder */}
                    <div className="lg:w-1/2 relative min-h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-white rounded-3xl opacity-50 z-0 border border-blue-50"></div>
                        {/* Placeholder for Sustainability Diagram or Image */}
                        <div className="bg-white rounded-3xl h-full w-full flex items-center justify-center border border-neutral-100 relative z-10 overflow-hidden group shadow-lg shadow-blue-900/5">
                            <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-10 group-hover:scale-105 transition-transform duration-700"></div>
                            <div className="text-center p-8 relative z-20">
                                <RefreshCw className="w-16 h-16 text-blue-600 mx-auto mb-4 animate-spin-slow" />
                                <h5 className="text-2xl font-bold text-neutral-900">Circular Economy</h5>
                                <p className="text-neutral-500 mt-2">Turning Waste into Wellness</p>
                            </div>
                        </div>

                        {/* Decorative floating card */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -bottom-8 -left-8 bg-white text-neutral-900 p-6 rounded-xl shadow-xl max-w-xs hidden sm:block z-30"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="font-bold text-sm">Impact Tracker</span>
                            </div>
                            <div className="text-3xl font-bold text-primary">1,000+</div>
                            <p className="text-sm text-neutral-500">Community members served per clinic unit</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Innovation;
