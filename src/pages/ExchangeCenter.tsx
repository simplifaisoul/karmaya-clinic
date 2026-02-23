import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import HowItWorks from '../components/HowItWorks';
import JoinHub from '../components/JoinHub';
import { ScrollReveal } from '../components/ScrollReveal';

const ExchangeCenter = () => {
    return (
        <div className="min-h-screen bg-neutral-50 pb-20">
            {/* Exchange Center Hero */}
            <div className="relative bg-neutral-900 pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-emerald-600/20"></div>

                {/* Decorative grid */}
                <div className="absolute inset-0 z-[1] opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:80px_80px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-6">
                        <Link to="/" className="inline-flex items-center text-white/70 hover:text-white text-sm font-medium transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-1.5" />
                            Back to Home
                        </Link>
                    </div>
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
                            Community Network
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                            Service Exchange Center
                        </h1>
                        <p className="text-base md:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
                            Join our community-powered ecosystem. Offer your unique skills and receive the support you need, creating a sustainable cycle of care.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <ScrollReveal width="100%">
                    <HowItWorks />
                </ScrollReveal>

                <ScrollReveal width="100%">
                    <JoinHub />
                </ScrollReveal>
            </div>
        </div>
    );
};

export default ExchangeCenter;
