import { useRef, useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Karmaya has transformed how our community accesses healthcare. My children received their first proper checkup through the clinic.",
        name: "Maria S.",
        role: "Community Member",
        location: "Philippines"
    },
    {
        quote: "The service exchange model is brilliant. I offered my teaching skills and received dental care in return. This is the future of community support.",
        name: "Juan D.",
        role: "Teacher & Volunteer",
        location: "Cebu"
    },
    {
        quote: "As a volunteer doctor, I've seen firsthand how the 9-pillar approach catches health issues that traditional clinics miss entirely.",
        name: "Dr. Ana R.",
        role: "Medical Volunteer",
        location: "Philippines"
    }
];

const Testimonials = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    // Auto-rotate
    useEffect(() => {
        if (!isVisible) return;
        const timer = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isVisible]);

    return (
        <section ref={ref} className="py-16 md:py-24 bg-white relative" aria-label="Testimonials">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-14"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-600 font-semibold text-xs tracking-wider uppercase mb-4">
                        Community Voices
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
                        What People Say
                    </h2>
                </div>

                <div
                    className="relative"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
                    }}
                >
                    {/* Quote card */}
                    <div className="bg-neutral-50 rounded-2xl p-6 md:p-10 border border-neutral-100 relative min-h-[200px]">
                        <Quote className="w-8 h-8 text-blue-100 absolute top-6 left-6 md:top-8 md:left-8" />

                        <div className="relative z-10">
                            {testimonials.map((t, i) => (
                                <div
                                    key={i}
                                    className="absolute inset-0 px-2 md:px-6 pt-4"
                                    style={{
                                        opacity: activeIndex === i ? 1 : 0,
                                        transform: activeIndex === i ? 'translateY(0)' : 'translateY(8px)',
                                        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                                        pointerEvents: activeIndex === i ? 'auto' : 'none'
                                    }}
                                >
                                    <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-medium mb-6 italic">
                                        "{t.quote}"
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                                            {t.name[0]}
                                        </div>
                                        <div>
                                            <div className="font-bold text-neutral-900 text-sm">{t.name}</div>
                                            <div className="text-xs text-neutral-500">{t.role} · {t.location}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                aria-label={`View testimonial ${i + 1}`}
                                className={`h-2 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-8 bg-blue-600' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
