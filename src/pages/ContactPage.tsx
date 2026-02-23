import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="relative bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:80px_80px]" />
                <div className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] bg-blue-500/10 rounded-full blur-[100px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-white/70 hover:text-white text-sm font-medium transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Home
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        Get In Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-lg md:text-xl text-neutral-300 max-w-3xl leading-relaxed"
                    >
                        Whether you want to volunteer, donate, partner, or simply learn more — we'd love to hear from you.
                    </motion.p>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
                        <path d="M0 60V20C360 50 720 0 1080 30C1260 45 1350 35 1440 40V60H0Z" fill="white" />
                    </svg>
                </div>
            </div>

            {/* Contact Component */}
            <div className="pt-8">
                <Contact />
            </div>

            {/* Map Placeholder */}
            <section className="py-16 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3 tracking-tight">Find Us</h2>
                        <p className="text-neutral-500">Our pilot clinic in the Philippines — with expansion plans for Cebu.</p>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.7925!2d120.9!3d14.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM2JzAwLjAiTiAxMjDCsDU0JzAwLjAiRQ!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Karmaya Clinic Location"
                            className="w-full"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
