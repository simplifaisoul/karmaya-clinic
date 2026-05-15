import { useState, useRef } from 'react';
import { Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formRef.current) return;
        
        setStatus('loading');
        
        try {
            // Using the user-provided credentials
            await emailjs.sendForm(
                'service_sv73llp', // Service ID
                'template_stnzx8f', // Template ID
                formRef.current,
                'wKGAZbKQp0WzxPwos' // Public Key
            );
            
            setStatus('success');
            formRef.current.reset();
            
            // Reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
            
            // Reset error message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-50/50 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-cyan-50/50 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Contact Info */}
                    <div className="lg:col-span-5 lg:pr-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-xs font-bold text-blue-700 tracking-wide uppercase">Get in touch</span>
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 tracking-tight leading-tight">
                            Let's build a healthier future, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">together.</span>
                        </h2>
                        
                        <p className="text-lg text-neutral-500 mb-10 leading-relaxed max-w-lg">
                            Whether you're looking to start a micro-clinic, volunteer your skills, or explore a partnership, we'd love to hear from you.
                        </p>

                        <div className="space-y-6">
                            <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-neutral-50 transition-colors border border-transparent hover:border-neutral-100">
                                <div className="bg-white shadow-sm p-3 rounded-xl flex-shrink-0 text-blue-600 group-hover:scale-110 transition-transform group-hover:bg-blue-600 group-hover:text-white border border-neutral-100">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-neutral-900 text-base mb-1">Our Locations</h4>
                                    <p className="text-neutral-500 text-sm mb-0.5">Pilot Clinic: Philippines</p>
                                    <p className="text-neutral-500 text-sm">Upcoming: Cebu Expansion</p>
                                </div>
                            </div>

                            <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-neutral-50 transition-colors border border-transparent hover:border-neutral-100">
                                <div className="bg-white shadow-sm p-3 rounded-xl flex-shrink-0 text-cyan-600 group-hover:scale-110 transition-transform group-hover:bg-cyan-600 group-hover:text-white border border-neutral-100">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-neutral-900 text-base mb-1">Email Us</h4>
                                    <a href="mailto:karmayaclinics@gmail.com" className="block text-neutral-500 text-sm hover:text-cyan-600 transition-colors mb-0.5">karmayaclinics@gmail.com</a>
                                    <a href="mailto:partnerships@karmayaclinics.org" className="block text-neutral-500 text-sm hover:text-cyan-600 transition-colors">partnerships@karmayaclinics.org</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
                            {/* Status Overlays */}
                            {status === 'success' && (
                                <div className="absolute inset-0 z-20 bg-white/95 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-300">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                        <CheckCircle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">Message Sent!</h3>
                                    <p className="text-neutral-500">Thank you for reaching out. Our team will get back to you shortly.</p>
                                </div>
                            )}
                            
                            {status === 'error' && (
                                <div className="absolute inset-0 z-20 bg-white/95 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-300">
                                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                        <AlertCircle className="w-8 h-8 text-red-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">Something went wrong</h3>
                                    <p className="text-neutral-500 mb-4">We couldn't send your message. Please try again or email us directly.</p>
                                    <button onClick={() => setStatus('idle')} className="px-6 py-2 bg-neutral-900 text-white rounded-full text-sm font-semibold hover:bg-neutral-800 transition-colors">
                                        Try Again
                                    </button>
                                </div>
                            )}

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold text-neutral-700 mb-2">Full Name</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name" // Important for EmailJS variable matching
                                            required
                                            className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-neutral-50 focus:bg-white text-sm font-medium" 
                                            placeholder="John Doe" 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-neutral-700 mb-2">Email Address</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" // Important for EmailJS
                                            required
                                            className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-neutral-50 focus:bg-white text-sm font-medium" 
                                            placeholder="john@example.com" 
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-bold text-neutral-700 mb-2">Subject</label>
                                    <div className="relative">
                                        <select 
                                            id="subject" 
                                            name="subject" // Important for EmailJS
                                            className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-neutral-50 focus:bg-white text-sm font-medium appearance-none cursor-pointer"
                                        >
                                            <option value="MicroClinic Inquiry">MicroClinic Inquiry</option>
                                            <option value="Volunteering">Volunteering</option>
                                            <option value="Donation">Donation</option>
                                            <option value="Partnership">Partnership</option>
                                            <option value="General Inquiry">General Inquiry</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-neutral-700 mb-2">Message</label>
                                    <textarea 
                                        id="message" 
                                        name="message" // Important for EmailJS
                                        required
                                        rows={5} 
                                        className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-neutral-50 focus:bg-white text-sm font-medium resize-none" 
                                        placeholder="How can we help you today?"
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={status === 'loading'}
                                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending Message...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-4 h-4 ml-1" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
