import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, HandHeart, Stethoscope, ChevronRight, Check } from 'lucide-react';

type JoinType = 'franchise' | 'provider' | null;

const JoinHub = () => {
    const [activeType, setActiveType] = useState<JoinType>(null);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send data to backend
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setActiveType(null);
        }, 3000);
    };

    return (
        <section id="join-hub" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
                <div className="absolute top-20 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
                <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-4 tracking-wide uppercase">
                        Grow With Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-6">
                        Join the <span className="text-blue-600">Karmaya Network</span>
                    </h2>
                    <p className="text-xl text-neutral-500 max-w-3xl mx-auto">
                        Whether you want to open your own MicroClinic or offer your professional services to our community, we have a place for you.
                    </p>
                </div>

                {/* Selection Cards */}
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500 ${activeType ? 'opacity-50 blur-sm pointer-events-none' : 'opacity-100'}`}>

                    {/* Franchise Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        onClick={() => setActiveType('franchise')}
                        className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-xl shadow-blue-900/5 cursor-pointer hover:border-blue-200 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Building2 className="w-32 h-32" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                                <Building2 className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-3">Open a MicroClinic</h3>
                            <p className="text-neutral-500 mb-6 line-clamp-2">
                                Interested in franchising or setting up a new clinic location? Partner with us to bring healthcare to your community.
                            </p>
                            <span className="inline-flex items-center font-bold text-blue-600 group-hover:translate-x-2 transition-transform">
                                Start Application <ChevronRight className="w-4 h-4 ml-1" />
                            </span>
                        </div>
                    </motion.div>

                    {/* Service Provider Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        onClick={() => setActiveType('provider')}
                        className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-xl shadow-indigo-900/5 cursor-pointer hover:border-indigo-200 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Stethoscope className="w-32 h-32" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                                <HandHeart className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-3">Offer Services</h3>
                            <p className="text-neutral-500 mb-6 line-clamp-2">
                                Are you a doctor, specialist, or service provider? Join our directory to connect with patients needing your expertise.
                            </p>
                            <span className="inline-flex items-center font-bold text-indigo-600 group-hover:translate-x-2 transition-transform">
                                Join Network <ChevronRight className="w-4 h-4 ml-1" />
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Forms Modal / Overlay */}
                <AnimatePresence>
                    {activeType && (
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 100 }}
                            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-white/80 backdrop-blur-md"
                        >
                            <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden max-h-[90vh] overflow-y-auto relative">
                                <button
                                    onClick={() => setActiveType(null)}
                                    className="absolute top-6 right-6 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
                                >
                                    <span className="text-xl font-bold text-neutral-500">×</span>
                                </button>

                                <div className="p-8 md:p-12">
                                    {submitted ? (
                                        <div className="text-center py-12">
                                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <Check className="w-10 h-10 text-green-600" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Message Sent!</h3>
                                            <p className="text-neutral-500">We'll be in touch with you shortly.</p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div>
                                                <span className="text-blue-600 font-bold tracking-wide uppercase text-sm">
                                                    {activeType === 'franchise' ? 'Clinic Application' : 'Provider Enrollment'}
                                                </span>
                                                <h3 className="text-3xl font-bold text-neutral-900 mt-2 mb-6">
                                                    {activeType === 'franchise' ? 'Start a MicroClinic' : 'Offer Your Services'}
                                                </h3>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
                                                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-neutral-50" placeholder="John Doe" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Contact Number</label>
                                                    <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-neutral-50" placeholder="+1 (555) 000-0000" />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                                                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-neutral-50" placeholder="john@example.com" />
                                            </div>

                                            {activeType === 'provider' && (
                                                <div>
                                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Service Type Offered</label>
                                                    <select className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-neutral-50">
                                                        <option>General Practitioner</option>
                                                        <option>Specialist (Cardio, Derma, etc.)</option>
                                                        <option>Nursing / Caregiving</option>
                                                        <option>Mental Health Support</option>
                                                        <option>Nutrition / Dietetics</option>
                                                        <option>Community Volunteer</option>
                                                        <option>Other</option>
                                                    </select>
                                                </div>
                                            )}

                                            <div>
                                                <label className="block text-sm font-medium text-neutral-700 mb-1">
                                                    {activeType === 'franchise' ? 'Proposed Location / Details' : 'Professional Summary / Bio'}
                                                </label>
                                                <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-neutral-50" placeholder={activeType === 'franchise' ? "Tell us about where you want to open a clinic..." : "Briefly describe your experience and what you can offer..."}></textarea>
                                            </div>

                                            {activeType === 'provider' && (
                                                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                                                    <input required type="checkbox" id="consent" className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300" />
                                                    <label htmlFor="consent" className="text-sm text-neutral-600 leading-relaxed cursor-pointer">
                                                        I agree to be entered into the Karmaya Network database and consent to be contacted by members or patients seeking the services I provide.
                                                        <span className="block text-xs text-neutral-400 mt-1">We respect your privacy and will not share data outside this network.</span>
                                                    </label>
                                                </div>
                                            )}

                                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 text-lg">
                                                {activeType === 'franchise' ? 'Submit Application' : 'Join Network'}
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default JoinHub;
