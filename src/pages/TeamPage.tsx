import { ArrowLeft, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const }
    })
};

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
    initials: string;
    color: string;
}

const teamMembers: TeamMember[] = [
    {
        name: 'Mac Dulay',
        role: 'Founder & Executive Director',
        bio: 'Passionate about community-driven healthcare, Mac founded Karmaya Clinics to bring holistic primary care to underserved communities in the Philippines. With a vision rooted in sustainable social enterprise, he leads the organization\'s strategic direction and partnerships.',
        image: '',
        initials: 'MD',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        name: 'Dr. Maria Santos',
        role: 'Chief Medical Officer',
        bio: 'Board-certified physician with over 15 years of experience in community medicine. Dr. Santos oversees all clinical operations and ensures quality healthcare delivery across all Karmaya micro-clinics.',
        image: '',
        initials: 'MS',
        color: 'from-slate-500 to-slate-500',
    },
    {
        name: 'James Rivera',
        role: 'Community Relations Director',
        bio: 'A skilled organizer with deep roots in Philippine communities, James manages the service exchange program and builds trust between the clinic and the populations it serves.',
        image: '',
        initials: 'JR',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        name: 'Sarah Chen',
        role: 'Technology & Innovation Lead',
        bio: 'Leading our digital transformation efforts, Sarah works on the exchange platform and partnerships with Canadian universities to deploy multi-use machines and sustainable technology solutions.',
        image: '',
        initials: 'SC',
        color: 'from-blue-500 to-indigo-500',
    },
    {
        name: 'Dr. Ana Reyes',
        role: 'Wellness Program Coordinator',
        bio: 'Specializing in holistic health, Dr. Reyes designs and implements the 9 Steps to Wellness program, ensuring each community member receives comprehensive care addressing biological and societal wellness.',
        image: '',
        initials: 'AR',
        color: 'from-slate-500 to-slate-500',
    },
    {
        name: 'Carlos Mendoza',
        role: 'Operations Manager',
        bio: 'With expertise in non-profit logistics, Carlos ensures smooth day-to-day operations of all Karmaya clinics, from supply chain management to volunteer coordination.',
        image: '',
        initials: 'CM',
        color: 'from-indigo-500 to-blue-500',
    },
];

const TeamPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="relative bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:80px_80px]" />
                <div className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] -left-[10%] w-[30vw] h-[30vw] bg-blue-500/10 rounded-full blur-[80px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-white/70 hover:text-white text-sm font-medium transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Home
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        Our Team
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-lg md:text-xl text-neutral-300 max-w-3xl leading-relaxed"
                    >
                        Meet the dedicated individuals behind Karmaya Clinics — united by the belief that healthcare is a human right, not a privilege.
                    </motion.p>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
                        <path d="M0 60V20C360 50 720 0 1080 30C1260 45 1350 35 1440 40V60H0Z" fill="white" />
                    </svg>
                </div>
            </div>

            {/* Team Grid */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-semibold text-xs tracking-wider uppercase mb-4">The People</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">
                            Powered by Passion & Purpose
                        </h2>
                        <p className="text-neutral-500 max-w-2xl mx-auto leading-relaxed">
                            Each member brings unique expertise and a shared commitment to community wellness.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {teamMembers.map((member, i) => (
                            <motion.div
                                key={member.name}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="bg-white rounded-2xl border border-neutral-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                            >
                                {/* Photo / Avatar */}
                                <div className="relative h-48 overflow-hidden">
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className={`w-full h-full bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                                            <span className="text-5xl font-extrabold text-white/90">{member.initials}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-neutral-900 mb-1">{member.name}</h3>
                                    <p className="text-sm font-semibold text-blue-600 mb-3">{member.role}</p>
                                    <p className="text-sm text-neutral-500 leading-relaxed mb-4">{member.bio}</p>
                                    <div className="flex gap-2">
                                        <a href="#" className="p-2 rounded-lg bg-neutral-100 hover:bg-blue-50 text-neutral-400 hover:text-blue-500 transition-colors" aria-label={`Email ${member.name}`}>
                                            <Mail className="w-4 h-4" />
                                        </a>
                                        <a href="#" className="p-2 rounded-lg bg-neutral-100 hover:bg-blue-50 text-neutral-400 hover:text-blue-500 transition-colors" aria-label={`LinkedIn profile of ${member.name}`}>
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join the Team CTA */}
            <section className="py-16 bg-neutral-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Want to Join Our Team?</h2>
                    <p className="text-neutral-500 max-w-xl mx-auto mb-8 leading-relaxed">
                        We're always looking for passionate individuals who share our vision of accessible healthcare for all.
                    </p>
                    <Link to="/contact" className="inline-block px-8 py-3.5 bg-neutral-900 text-white rounded-full font-bold text-sm hover:bg-neutral-800 transition-colors shadow-lg">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default TeamPage;
