import { useRef, useState, useEffect } from 'react';
import { Heart, Users, Globe, Stethoscope } from 'lucide-react';

interface StatProps {
    icon: React.ElementType;
    value: number;
    suffix: string;
    label: string;
    color: string;
    bg: string;
}

const AnimatedCounter = ({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;
        let start = 0;
        const duration = 2000;
        const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [isVisible, target]);

    return <span>{count.toLocaleString()}{suffix}</span>;
};

const stats: StatProps[] = [
    { icon: Stethoscope, value: 1000, suffix: '+', label: 'Patients Served', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: Heart, value: 9, suffix: '', label: 'Pillars of Health', color: 'text-rose-500', bg: 'bg-rose-50' },
    { icon: Users, value: 50, suffix: '+', label: 'Active Volunteers', color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { icon: Globe, value: 3, suffix: '', label: 'Communities Reached', color: 'text-indigo-500', bg: 'bg-indigo-50' },
];

const ImpactStats = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className="py-16 md:py-20 bg-white relative" aria-label="Impact Statistics">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={stat.label}
                                className="text-center p-5 md:p-6 rounded-2xl bg-neutral-50/50 border border-neutral-100 hover:shadow-premium hover:border-neutral-200 transition-all duration-500"
                                style={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                    transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`
                                }}
                            >
                                <div className={`w-10 h-10 md:w-12 md:h-12 ${stat.bg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                                    <Icon className={`w-5 h-5 md:w-6 md:h-6 ${stat.color}`} />
                                </div>
                                <div className={`text-3xl md:text-4xl font-extrabold ${stat.color} mb-1 tracking-tight`}>
                                    <AnimatedCounter target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                                </div>
                                <div className="text-xs md:text-sm text-neutral-500 font-medium">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ImpactStats;
