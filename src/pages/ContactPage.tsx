import { ArrowLeft, Stethoscope, Building2, BookOpen, Users, MapPin, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';

const features = [
    {
        icon: Building2,
        title: "Turnkey Setup",
        desc: "We provide the blueprint, operational playbook, and ongoing support to get your clinic running quickly."
    },
    {
        icon: Users,
        title: "Community Driven",
        desc: "Designed to be sustained by the local community through volunteer exchanges and shared resources."
    },
    {
        icon: BookOpen,
        title: "Comprehensive Training",
        desc: "Full training on our 9-pillar holistic health approach for you and your staff."
    }
];

const ContactPage = () => {
    const handleScrollToContact = () => {
        // Find the select element in the contact form and set its value
        const select = document.getElementById('subject') as HTMLSelectElement;
        if (select) {
            select.value = 'MicroClinic Inquiry';
        }
        
        // Scroll to the contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="relative bg-slate-900 pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 z-[1] opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900" />
                <div className="absolute inset-0 z-[1] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
                <div className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] -left-[10%] w-[30vw] h-[30vw] bg-cyan-500/10 rounded-full blur-[100px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white text-sm font-semibold transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 mr-1.5 group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]"
                    >
                        Contact & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Get Involved</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed"
                    >
                        Whether you want to volunteer your skills, donate essential supplies, open a clinic in your community, or participate in the exchange, we'd love to hear from you.
                    </motion.p>
                </div>
            </div>

            {/* Microclinic Owner Funnel */}
            <section className="py-20 md:py-28 relative overflow-hidden bg-neutral-50 border-b border-neutral-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Left Side: Content */}
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 text-blue-700 font-bold text-xs tracking-wider uppercase mb-6 border border-blue-200/50">
                                <Stethoscope className="w-4 h-4" /> Expansion Program
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-6 tracking-tight leading-tight">
                                Launch Your Own <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Microclinic</span>
                            </h2>
                            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                Join our network of passionate healthcare advocates. We are actively looking for partners to open new Karmaya Microclinics in underserved areas. Empower your community with accessible, holistic care.
                            </p>
                            
                            <button 
                                onClick={handleScrollToContact}
                                className="px-8 py-4 bg-neutral-900 text-white rounded-2xl font-bold text-sm shadow-xl shadow-neutral-900/20 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-2 group"
                            >
                                Start Your Journey
                                <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Right Side: Feature Cards */}
                        <div className="grid gap-6">
                            {features.map((feature, i) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                        className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow flex gap-5"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100 text-blue-600">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-neutral-900 text-lg mb-2">{feature.title}</h3>
                                            <p className="text-neutral-500 leading-relaxed text-sm">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Component */}
            <Contact />

            {/* Map Placeholder */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 z-[1] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                        <div className="lg:col-span-1">
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-400 font-bold text-xs tracking-wider uppercase mb-6 shadow-lg shadow-cyan-500/10">
                                <MapPin className="w-3 h-3" /> Headquarters
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Visit Our Pilot Location</h2>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Experience the 9-pillar holistic health approach in action at our primary facility in the Philippines. 
                            </p>
                            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex items-start gap-4">
                                <div className="bg-slate-700 p-3 rounded-xl">
                                    <Handshake className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Cebu Expansion</h4>
                                    <p className="text-sm text-slate-400">Opening soon! Contact us to get involved with the new location.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="lg:col-span-2">
                            <div className="rounded-3xl overflow-hidden border border-slate-700 shadow-2xl relative">
                                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 z-10 pointer-events-none"></div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.7925!2d120.9!3d14.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM2JzAwLjAiTiAxMjDCsDU0JzAwLjAiRQ!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Karmaya Clinic Location"
                                    className="w-full relative z-0"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
