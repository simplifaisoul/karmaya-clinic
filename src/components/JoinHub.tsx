import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Repeat, ChevronRight, Check, ArrowRightLeft } from 'lucide-react';

const JoinHub = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send data to backend
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setIsOpen(false);
        }, 4000);
    };

    return (
        <section id="join-hub" className="py-12 md:py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
                <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="mb-12">
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-4 tracking-wide uppercase">
                        Our Mission
                    </span>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-neutral-900 mb-6 leading-tight">
                        Exchange Services, <br />
                        <span className="text-blue-600">Not Money.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                        We are building a community where you can find the services you need by paying with the services you provide.
                    </p>
                </div>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative bg-white rounded-3xl p-1 md:p-2 border border-neutral-100 shadow-2xl shadow-blue-900/10 max-w-lg mx-auto"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur opacity-20 transform translate-y-4"></div>
                    <div className="relative bg-white rounded-2xl p-8 md:p-12 overflow-hidden">
                        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ArrowRightLeft className="w-10 h-10 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-900 mb-2">Join the Exchange</h3>
                        <p className="text-neutral-500 mb-8">
                            Tell us what valid service or product you can offer, and what help you are looking for in return.
                        </p>

                        <button
                            onClick={() => setIsOpen(true)}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 text-lg group"
                        >
                            Start Trading
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>

                {/* Forms Modal / Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-neutral-900/40 backdrop-blur-sm"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto relative"
                            >
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors z-10"
                                >
                                    <span className="text-2xl font-bold text-neutral-500 leading-none">&times;</span>
                                </button>

                                <div className="p-6 md:p-10">
                                    {submitted ? (
                                        <div className="text-center py-12">
                                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <Check className="w-10 h-10 text-green-600" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Application Received!</h3>
                                            <p className="text-neutral-500">Welcome to the future of community exchange. We'll be in touch shortly.</p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="text-center mb-8">
                                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 mb-4">
                                                    <Repeat className="w-6 h-6 text-blue-600" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-neutral-900">Service Exchange Form</h3>
                                                <p className="text-neutral-500 text-sm">Join the Karmaya Barter Network</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-sm font-bold text-neutral-700 mb-1">Full Name</label>
                                                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-neutral-50 transition-all font-medium" placeholder="Jane Doe" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-bold text-neutral-700 mb-1">Phone Number</label>
                                                    <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-neutral-50 transition-all font-medium" placeholder="+1 (555) 000-0000" />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-bold text-neutral-700 mb-1">Email Address</label>
                                                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-neutral-50 transition-all font-medium" placeholder="jane@example.com" />
                                            </div>

                                            <div className="pt-4 border-t border-neutral-100">
                                                <label className="block text-sm font-bold text-blue-700 mb-2">What Service/Product do you PROVIDE?</label>
                                                <textarea required rows={3} className="w-full px-4 py-3 rounded-xl border border-blue-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-blue-50/50 transition-all font-medium" placeholder="e.g. Website Design, Carpentry, Home-baked Goods..."></textarea>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-bold text-neutral-700 mb-2">What Service/Product are you LOOKING FOR?</label>
                                                <textarea required rows={3} className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-neutral-50 transition-all font-medium" placeholder="e.g. Dental cleaning, Legal advice, Fresh produce..."></textarea>
                                            </div>

                                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 text-lg mt-4">
                                                Submit Exchange Setup
                                                <ArrowRightLeft className="w-5 h-5" />
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default JoinHub;
