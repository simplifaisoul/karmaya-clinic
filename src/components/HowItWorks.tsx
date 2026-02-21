import { useRef, useState, useEffect } from 'react';
import { ClipboardCheck, Handshake, Heart, Sparkles } from 'lucide-react';

const steps = [
    {
        icon: ClipboardCheck,
        number: '01',
        title: 'Share Your Skills',
        desc: 'Tell us what services you can offer — from healthcare to carpentry, tutoring to farming.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-200'
    },
    {
        icon: Handshake,
        number: '02',
        title: 'Get Matched',
        desc: 'We connect you with community members who need your skills and have what you need.',
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
        border: 'border-indigo-200'
    },
    {
        icon: Heart,
        number: '03',
        title: 'Exchange & Grow',
        desc: 'Complete your exchange and earn credits. No money needed — just genuine service.',
        color: 'text-rose-500',
        bg: 'bg-rose-50',
        border: 'border-rose-200'
    },
    {
        icon: Sparkles,
        number: '04',
        title: 'Build Community',
        desc: 'Every exchange strengthens the network, creating a self-sustaining ecosystem of care.',
        color: 'text-emerald-500',
        bg: 'bg-emerald-50',
        border: 'border-emerald-200'
    }
];

const HowItWorks = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className="py-16 md:py-24 bg-neutral-50 relative overflow-hidden" aria-label="How It Works">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-600 font-semibold text-xs tracking-wider uppercase mb-4 shadow-sm">
                        Simple Process
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
                        How the Exchange Works
                    </h2>
                    <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto">
                        Four simple steps to transform how your community accesses services
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 relative">
                    {/* Connecting line — desktop only */}
                    <div className="hidden lg:block absolute top-20 left-[12%] right-[12%] h-[2px] bg-neutral-200 z-0">
                        <div
                            className="h-full bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"
                            style={{
                                transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                                transformOrigin: 'left',
                                transition: 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
                            }}
                        />
                    </div>

                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.number}
                                className="relative z-10 text-center"
                                style={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                                    transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 + i * 0.15}s`
                                }}
                            >
                                <div className={`w-14 h-14 md:w-16 md:h-16 ${step.bg} border-2 ${step.border} rounded-2xl flex items-center justify-center mx-auto mb-4 relative`}>
                                    <Icon className={`w-6 h-6 md:w-7 md:h-7 ${step.color}`} />
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-neutral-900 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                                        {step.number}
                                    </div>
                                </div>
                                <h3 className="text-base font-bold text-neutral-900 mb-2">{step.title}</h3>
                                <p className="text-sm text-neutral-500 leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
