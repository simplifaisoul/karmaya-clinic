import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';

const GalleryPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="relative bg-gradient-to-br from-blue-600 via-indigo-500 to-indigo-500 pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:80px_80px]" />
                <div className="absolute top-[30%] -right-[10%] w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[80px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-white/70 hover:text-white text-sm font-medium transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Home
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        Our Impact in Action
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-lg md:text-xl text-indigo-100 max-w-3xl leading-relaxed"
                    >
                        See the real stories, real people, and real impact of Karmaya Clinics across the Philippines.
                    </motion.p>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
                        <path d="M0 60V20C360 50 720 0 1080 30C1260 45 1350 35 1440 40V60H0Z" fill="white" />
                    </svg>
                </div>
            </div>

            {/* Gallery */}
            <div className="pt-8">
                <Gallery />
            </div>

            {/* Testimonials */}
            <Testimonials />

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-500">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Be Part of the Story</h2>
                    <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">Your involvement creates ripples of positive change across communities.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link to="/exchange" className="px-8 py-3.5 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors">
                            Join the Exchange
                        </Link>
                        <Link to="/about" className="px-8 py-3.5 bg-white/15 text-white border border-white/25 rounded-full font-semibold hover:bg-white/25 transition-colors">
                            Learn About Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GalleryPage;
