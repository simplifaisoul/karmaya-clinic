import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    ArrowLeft,
    Check,
    Sparkles,
    User,
    HandHeart,
    Search,
    ArrowRightLeft,
    MapPin
} from 'lucide-react';

const JoinHub = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1);
    const totalSteps = 3;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        serviceOffered: '',
        serviceNeeded: '',
        message: ''
    });

    const handleNext = () => setStep(prev => Math.min(prev + 1, totalSteps + 1));
    const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = () => {
        handleNext(); // Move to success step (4)
        setTimeout(() => {
            setIsOpen(false);
            setStep(1);
            setFormData({ name: '', email: '', phone: '', location: '', serviceOffered: '', serviceNeeded: '', message: '' });
        }, 5000);
    };

    return (
        <section id="join-hub" className="py-20 md:py-28 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-40 right-10 w-72 h-72 bg-blue-50 rounded-full blur-[80px] opacity-60" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-50 rounded-full blur-[100px] opacity-60" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-xs tracking-wider uppercase mb-5">
                        <Sparkles className="w-3 h-3" />
                        The Karmaya Exchange
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-5 tracking-tight">
                        Exchange Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Skills</span>,<br />
                        Not Your <span className="text-neutral-400">Wallet.</span>
                    </h2>
                    <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
                        Join a thriving ecosystem where community members trade services directly.
                        No currency needed—just genuine human connection.
                    </p>
                </div>

                {/* Main CTA Card */}
                <div className="relative max-w-2xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-premium border border-neutral-100 text-center">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 mb-6">
                            <ArrowRightLeft className="w-8 h-8 text-white" />
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">Start Your Exchange Journey</h3>
                        <p className="text-neutral-500 mb-8 max-w-md mx-auto">
                            Tell us what you need and what you can give. We'll match you with the right community members.
                        </p>

                        <button
                            onClick={() => setIsOpen(true)}
                            className="px-8 py-4 bg-neutral-900 text-white text-base font-semibold rounded-full shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:bg-neutral-800 transition-all w-full sm:w-auto flex items-center justify-center gap-2 mx-auto group"
                        >
                            Join Our Mission
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Wizard Modal */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-md"
                            onClick={() => setIsOpen(false)}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative flex flex-col max-h-[85vh]"
                                onClick={e => e.stopPropagation()}
                            >
                                {/* Header / Progress */}
                                <div className="px-6 py-5 border-b border-neutral-100 flex items-center justify-between bg-white">
                                    <div className="flex items-center gap-3">
                                        <div className="flex space-x-1.5">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className={`h-1.5 w-8 rounded-full transition-colors duration-300 ${i <= step ? 'bg-blue-600' : 'bg-neutral-200'}`} />
                                            ))}
                                        </div>
                                        <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                                            Step {Math.min(step, 3)} of 3
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 -mr-2 text-neutral-400 hover:text-neutral-900 transition-colors rounded-lg hover:bg-neutral-100"
                                    >
                                        <span className="text-xl leading-none">&times;</span>
                                    </button>
                                </div>

                                {/* Content Area */}
                                <div className="p-6 md:p-8 overflow-y-auto flex-1">
                                    <AnimatePresence mode="wait">
                                        {step === 1 && (
                                            <motion.div
                                                key="step1"
                                                initial={{ opacity: 0, x: 15 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -15 }}
                                                transition={{ duration: 0.25 }}
                                            >
                                                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                                                    <User className="w-6 h-6 text-blue-600" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-neutral-900 mb-1">Let's start with the basics.</h3>
                                                <p className="text-neutral-500 mb-6">Who are you?</p>

                                                <div className="space-y-4">
                                                    <div>
                                                        <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Full Name</label>
                                                        <input
                                                            autoFocus
                                                            type="text"
                                                            className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all text-sm"
                                                            placeholder="Jane Doe"
                                                            value={formData.name}
                                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Email Address</label>
                                                        <input
                                                            type="email"
                                                            className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all text-sm"
                                                            placeholder="jane@example.com"
                                                            value={formData.email}
                                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Phone</label>
                                                        <input
                                                            type="tel"
                                                            className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all text-sm"
                                                            placeholder="(555) 123-4567"
                                                            value={formData.phone}
                                                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
                                                            <span className="flex items-center gap-1.5">
                                                                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                                                                Location
                                                            </span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all text-sm"
                                                            placeholder="City, Province/State, Country"
                                                            value={formData.location}
                                                            onChange={e => setFormData({ ...formData, location: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {step === 2 && (
                                            <motion.div
                                                key="step2"
                                                initial={{ opacity: 0, x: 15 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -15 }}
                                                transition={{ duration: 0.25 }}
                                            >
                                                <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                                                    <HandHeart className="w-6 h-6 text-indigo-600" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-neutral-900 mb-1">The Give.</h3>
                                                <p className="text-neutral-500 mb-6">What service or skill can you share with the community?</p>

                                                <div>
                                                    <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Service Offered</label>
                                                    <textarea
                                                        autoFocus
                                                        rows={4}
                                                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all resize-none text-sm"
                                                        placeholder="e.g. I can offer 2 hours of carpentry work, or help with grocery shopping..."
                                                        value={formData.serviceOffered}
                                                        onChange={e => setFormData({ ...formData, serviceOffered: e.target.value })}
                                                    />
                                                </div>
                                            </motion.div>
                                        )}

                                        {step === 3 && (
                                            <motion.div
                                                key="step3"
                                                initial={{ opacity: 0, x: 15 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -15 }}
                                                transition={{ duration: 0.25 }}
                                            >
                                                <div className="bg-amber-50 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                                                    <Search className="w-6 h-6 text-amber-600" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-neutral-900 mb-1">The Get.</h3>
                                                <p className="text-neutral-500 mb-6">What help are you looking for in return?</p>

                                                <div>
                                                    <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Service Needed</label>
                                                    <textarea
                                                        autoFocus
                                                        rows={4}
                                                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none transition-all resize-none text-sm"
                                                        placeholder="e.g. I need help fixing a leaky faucet, or someone to walk my dog..."
                                                        value={formData.serviceNeeded}
                                                        onChange={e => setFormData({ ...formData, serviceNeeded: e.target.value })}
                                                    />
                                                </div>
                                            </motion.div>
                                        )}

                                        {step === 4 && (
                                            <motion.div
                                                key="step4"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ type: "spring", duration: 0.6 }}
                                                className="text-center py-8"
                                            >
                                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                                    <Check className="w-10 h-10 text-green-600" />
                                                </div>
                                                <h3 className="text-3xl font-bold text-neutral-900 mb-3">You're on the list!</h3>
                                                <p className="text-neutral-500 max-w-sm mx-auto mb-6">
                                                    We've added you to the Karmaya Service Exchange. We'll contact you when we find a match!
                                                </p>
                                                <p className="text-xs text-neutral-400">Closing in a moment...</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Footer Actions */}
                                {step < 4 && (
                                    <div className="px-6 py-4 border-t border-neutral-100 bg-neutral-50/80 flex justify-between items-center">
                                        {step > 1 ? (
                                            <button
                                                onClick={handleBack}
                                                className="px-5 py-2.5 text-neutral-600 font-semibold hover:text-neutral-900 flex items-center gap-2 transition-colors text-sm"
                                            >
                                                <ArrowLeft className="w-4 h-4" /> Back
                                            </button>
                                        ) : (
                                            <div></div>
                                        )}

                                        <button
                                            onClick={step === 3 ? handleSubmit : handleNext}
                                            className="px-6 py-3 bg-neutral-900 text-white rounded-xl font-semibold shadow-sm hover:shadow-md hover:bg-neutral-800 transition-all flex items-center gap-2 text-sm"
                                        >
                                            {step === 3 ? 'Complete Exchange' : 'Continue'}
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default JoinHub;
