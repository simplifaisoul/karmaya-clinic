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
    ArrowRightLeft
} from 'lucide-react';

const JoinHub = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1);
    const totalSteps = 3;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        serviceOffered: '',
        serviceNeeded: '',
        message: ''
    });

    const handleNext = () => setStep(prev => Math.min(prev + 1, totalSteps + 1));
    const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

    // Auto-advance simulation
    const handleSubmit = () => {
        handleNext(); // Move to success step (4)
        setTimeout(() => {
            setIsOpen(false);
            setStep(1); // Reset
            setFormData({ name: '', email: '', phone: '', serviceOffered: '', serviceNeeded: '', message: '' });
        }, 5000);
    };

    return (
        <section id="join-hub" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-40 right-10 w-72 h-72 bg-blue-50 rounded-full blur-[80px] opacity-60 mix-blend-multiply" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-50 rounded-full blur-[100px] opacity-60 mix-blend-multiply" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-xs tracking-wider uppercase mb-6">
                        <Sparkles className="w-3 h-3" />
                        The Karmaya Exchange
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-neutral-900 mb-6 tracking-tight">
                        Exchange Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Skills</span>,<br />
                        Not Your <span className="text-neutral-400">Wallet.</span>
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                        Join a thriving ecosystem where community members trade services directly.
                        No currency needed—just genuine human connection.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Floating Cards / Visuals */}
                    <div className="hidden md:block absolute -left-12 top-10 w-48 p-4 bg-white rounded-2xl shadow-premium rotate-[-6deg] z-0">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs">JD</div>
                            <div className="text-xs font-bold text-neutral-800">Jane D.</div>
                        </div>
                        <div className="text-xs text-neutral-500">"Offered Web Design"</div>
                    </div>
                    <div className="hidden md:block absolute -right-8 bottom-20 w-48 p-4 bg-white rounded-2xl shadow-premium rotate-[6deg] z-0">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">MK</div>
                            <div className="text-xs font-bold text-neutral-800">Mike K.</div>
                        </div>
                        <div className="text-xs text-neutral-500">"Received Dental Care"</div>
                    </div>

                    {/* Main CTA Card */}
                    <div className="relative bg-white rounded-[2.5rem] p-1 shadow-2xl shadow-indigo-900/10 z-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50/50 rounded-[2.5rem]"></div>
                        <div className="relative bg-white/80 backdrop-blur-sm rounded-[2.25rem] p-8 md:p-16 border border-white text-center">
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 mb-8 transform rotate-3">
                                <ArrowRightLeft className="w-10 h-10 text-white" />
                            </div>

                            <h3 className="text-3xl font-bold text-neutral-900 mb-4">Start Your Exchange Journey</h3>
                            <p className="text-lg text-neutral-500 mb-10 max-w-lg mx-auto">
                                Tell us what you need and what you can give. We'll match you with the right community members.
                            </p>

                            <button
                                onClick={() => setIsOpen(true)}
                                className="px-10 py-5 bg-neutral-900 text-white text-lg font-bold rounded-full shadow-xl shadow-neutral-900/20 hover:shadow-2xl hover:scale-105 transition-all w-full md:w-auto"
                            >
                                Launch Exchange Wizard
                            </button>
                        </div>
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
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                                className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden relative flex flex-col max-h-[90vh]"
                            >
                                {/* Header / Progress */}
                                <div className="px-8 py-6 border-b border-neutral-100 flex items-center justify-between bg-white z-20">
                                    <div className="flex items-center gap-3">
                                        <div className="flex space-x-1">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className={`h-1.5 w-8 rounded-full transition-colors duration-300 ${i <= step ? 'bg-blue-600' : 'bg-neutral-200'}`} />
                                            ))}
                                        </div>
                                        <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider ml-2">
                                            Step {Math.min(step, 3)} of 3
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 -mr-2 text-neutral-400 hover:text-neutral-900 transition-colors"
                                    >
                                        <span className="text-2xl leading-none">&times;</span>
                                    </button>
                                </div>

                                {/* Content Area */}
                                <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
                                    <AnimatePresence mode="wait">
                                        {step === 1 && (
                                            <motion.div
                                                key="step1"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                                    <User className="w-8 h-8 text-blue-600" />
                                                </div>
                                                <h3 className="text-3xl font-bold text-neutral-900 mb-2">Let's start with the basics.</h3>
                                                <p className="text-neutral-500 mb-8 text-lg">Who are you?</p>

                                                <div className="space-y-5">
                                                    <div>
                                                        <label className="block text-sm font-bold text-neutral-700 mb-2">Full Name</label>
                                                        <input
                                                            autoFocus
                                                            type="text"
                                                            className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none text-lg transition-all"
                                                            placeholder="Jane Doe"
                                                            value={formData.name}
                                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-bold text-neutral-700 mb-2">Email Address</label>
                                                        <input
                                                            type="email"
                                                            className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none text-lg transition-all"
                                                            placeholder="jane@example.com"
                                                            value={formData.email}
                                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-bold text-neutral-700 mb-2">Phone</label>
                                                        <input
                                                            type="tel"
                                                            className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none text-lg transition-all"
                                                            placeholder="(555) 123-4567"
                                                            value={formData.phone}
                                                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {step === 2 && (
                                            <motion.div
                                                key="step2"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                                    <HandHeart className="w-8 h-8 text-indigo-600" />
                                                </div>
                                                <h3 className="text-3xl font-bold text-neutral-900 mb-2">The Give.</h3>
                                                <p className="text-neutral-500 mb-8 text-lg">What service or skill can you share with the community?</p>

                                                <div className="space-y-6">
                                                    <div>
                                                        <label className="block text-sm font-bold text-neutral-700 mb-2">Service Offered</label>
                                                        <textarea
                                                            autoFocus
                                                            rows={4}
                                                            className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-200 focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none text-lg transition-all resize-none"
                                                            placeholder="e.g. I can offer 2 hours of carpentry work, or help with grocery shopping..."
                                                            value={formData.serviceOffered}
                                                            onChange={e => setFormData({ ...formData, serviceOffered: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {step === 3 && (
                                            <motion.div
                                                key="step3"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                                    <Search className="w-8 h-8 text-amber-600" />
                                                </div>
                                                <h3 className="text-3xl font-bold text-neutral-900 mb-2">The Get.</h3>
                                                <p className="text-neutral-500 mb-8 text-lg">What help are you looking for in return?</p>

                                                <div className="space-y-6">
                                                    <div>
                                                        <label className="block text-sm font-bold text-neutral-700 mb-2">Service Needed</label>
                                                        <textarea
                                                            autoFocus
                                                            rows={4}
                                                            className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-200 focus:ring-2 focus:ring-amber-500 focus:bg-white outline-none text-lg transition-all resize-none"
                                                            placeholder="e.g. I need help fixing a leaky faucet, or someone to walk my dog..."
                                                            value={formData.serviceNeeded}
                                                            onChange={e => setFormData({ ...formData, serviceNeeded: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {step === 4 && (
                                            <motion.div
                                                key="step4"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ type: "spring", duration: 0.8 }}
                                                className="text-center py-10"
                                            >
                                                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-green-200 shadow-xl">
                                                    <Check className="w-12 h-12 text-green-600" />
                                                </div>
                                                <h3 className="text-4xl font-bold text-neutral-900 mb-4">You're on the list!</h3>
                                                <p className="text-xl text-neutral-600 max-w-md mx-auto mb-8">
                                                    We've added you to the Karmaya Service Exchange. We'll contact you when we find a match!
                                                </p>
                                                <p className="text-sm text-neutral-400">Closing window in a moment...</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Footer Actions */}
                                {step < 4 && (
                                    <div className="p-8 border-t border-neutral-100 bg-neutral-50 flex justify-between items-center z-20">
                                        {step > 1 ? (
                                            <button
                                                onClick={handleBack}
                                                className="px-6 py-3 text-neutral-600 font-bold hover:text-neutral-900 flex items-center gap-2 transition-colors"
                                            >
                                                <ArrowLeft className="w-4 h-4" /> Back
                                            </button>
                                        ) : (
                                            <div></div>
                                        )}

                                        <button
                                            onClick={step === 3 ? handleSubmit : handleNext}
                                            className="px-8 py-4 bg-neutral-900 text-white rounded-xl font-bold shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
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
