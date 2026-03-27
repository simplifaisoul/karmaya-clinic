import { ArrowLeft, ArrowRight, UserPlus, Building2, CheckCircle, Heart, MapPin, Stethoscope, Users, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';

const patientBenefits = [
    'Access to holistic primary healthcare',
    'Vision testing and prescription glasses',
    'Blood pressure and vitals monitoring',
    'Community health events and screenings',
    'Service exchange participation',
    'No out-of-pocket costs through the exchange model',
];

const ownerBenefits = [
    'Full micro-clinic setup support and training',
    'Access to the Karmaya operational playbook',
    'Community-powered sustainability model',
    'Partnership with Canadian university for technology',
    'Ongoing mentorship from the Karmaya team',
    'Social enterprise revenue streams built in',
];

const MicroClinicPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:80px_80px]" />
                <div className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] bg-white/10 rounded-full blur-[100px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-white/70 hover:text-white text-sm font-medium transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Home
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        Start a MicroClinic
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed"
                    >
                        Whether you're looking for healthcare or looking to bring healthcare to your community, there's a place for you in the Karmaya network.
                    </motion.p>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
                        <path d="M0 60V20C360 50 720 0 1080 30C1260 45 1350 35 1440 40V60H0Z" fill="white" />
                    </svg>
                </div>
            </div>

            {/* Two Paths Section */}
            <ScrollReveal width="100%">
                <section className="py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">Choose Your Path</h2>
                            <p className="text-neutral-500 max-w-xl mx-auto">
                                Two ways to be part of the Karmaya MicroClinic network.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                            {/* Patient Path */}
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-10 border border-blue-100 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                        <UserPlus className="w-7 h-7 text-blue-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">Sign Up as a Patient</h3>
                                    <p className="text-neutral-600 mb-6 leading-relaxed">
                                        Register to receive healthcare at a Karmaya MicroClinic near you. Our clinics provide holistic care covering 9 essential health steps.
                                    </p>

                                    <div className="space-y-3 mb-8">
                                        {patientBenefits.map((benefit, i) => (
                                            <div key={i} className="flex items-start gap-2.5">
                                                <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-sm text-neutral-700">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                                    >
                                        Register as a Patient <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                            {/* Owner Path */}
                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-10 border border-amber-100 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                                        <Building2 className="w-7 h-7 text-amber-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">Become a Clinic Owner</h3>
                                    <p className="text-neutral-600 mb-6 leading-relaxed">
                                        Bring a Karmaya MicroClinic to your community. We provide the model, training, and support to get you up and running.
                                    </p>

                                    <div className="space-y-3 mb-8">
                                        {ownerBenefits.map((benefit, i) => (
                                            <div key={i} className="flex items-start gap-2.5">
                                                <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-sm text-neutral-700">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href="mailto:info@karmayaclinics.org?subject=MicroClinic%20Ownership%20Inquiry&body=Hello%2C%20I%20am%20interested%20in%20starting%20a%20Karmaya%20MicroClinic%20in%20my%20community."
                                        className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 text-white rounded-full font-bold text-sm hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/20"
                                    >
                                        <Mail className="w-4 h-4" /> Inquire About Ownership
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* How It Works */}
            <ScrollReveal width="100%">
                <section className="py-16 md:py-20 bg-neutral-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">How a MicroClinic Works</h2>
                            <p className="text-neutral-500 max-w-xl mx-auto">
                                Small-scale clinics with big community impact.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: MapPin,
                                    title: 'Local Setup',
                                    desc: 'Each MicroClinic is set up within the community it serves, keeping healthcare close to home.',
                                    color: 'text-blue-600',
                                    bg: 'bg-blue-50',
                                },
                                {
                                    icon: Stethoscope,
                                    title: 'Holistic Care',
                                    desc: 'Our 9-step model covers physical checkups, vision care, mental health, nutrition, and more.',
                                    color: 'text-cyan-600',
                                    bg: 'bg-cyan-50',
                                },
                                {
                                    icon: Users,
                                    title: 'Community Powered',
                                    desc: 'Patients and community members exchange skills and services to keep the clinic running sustainably.',
                                    color: 'text-indigo-600',
                                    bg: 'bg-indigo-50',
                                },
                            ].map((step, i) => {
                                const Icon = step.icon;
                                return (
                                    <div key={i} className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-100 text-center hover:shadow-md transition-shadow">
                                        <div className={`w-12 h-12 ${step.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                                            <Icon className={`w-6 h-6 ${step.color}`} />
                                        </div>
                                        <h3 className="text-base font-bold text-neutral-900 mb-2">{step.title}</h3>
                                        <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal width="100%">
                <section className="py-16 md:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Heart className="w-7 h-7 text-blue-600" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Ready to Get Started?</h2>
                        <p className="text-neutral-600 max-w-xl mx-auto mb-8 leading-relaxed">
                            Reach out to us and we'll help you find the right path, whether it's receiving care or bringing care to your community.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                            >
                                Contact Us <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-neutral-100 text-neutral-700 rounded-full font-bold text-sm hover:bg-neutral-200 transition-colors"
                            >
                                Learn More About Karmaya
                            </Link>
                        </div>
                    </div>
                </section>
            </ScrollReveal>
        </div>
    );
};

export default MicroClinicPage;
