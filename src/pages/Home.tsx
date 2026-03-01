import Hero from "../components/Hero";
import ImpactStats from "../components/ImpactStats";
import Pillars from "../components/Pillars";
import Innovation from "../components/Innovation";
import ParallaxDivider from "../components/ParallaxDivider";
import Testimonials from "../components/Testimonials";
import { ScrollReveal } from "../components/ScrollReveal";
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, ArrowRightLeft, Users, BookOpen } from 'lucide-react';

const Home = () => {
    return (
        <main className="w-full relative">
            <Hero />

            <ImpactStats />

            {/* About CTA */}
            <ScrollReveal width="100%">
                <section className="py-16 md:py-20 bg-blue-50">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                            <Users className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Discover Our Mission</h2>
                        <p className="text-neutral-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                            Driven by the philosophy of "People helping people," we are redefining holistic primary healthcare for underserved communities in the Philippines.
                        </p>
                        <Link to="/about" className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                            Learn About Us <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal width="100%">
                <Pillars />
            </ScrollReveal>

            <ParallaxDivider
                image="/images/gallery/Group outside assesment.jpeg"
                quote="People helping people — through positive energy and tangible action."
            />

            {/* Exchange CTA */}
            <ScrollReveal width="100%">
                <section className="py-16 md:py-20 bg-blue-50">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                            <ArrowRightLeft className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">The Service Exchange Center</h2>
                        <p className="text-neutral-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                            Exchange your unique skills for healthcare services. No money required — just your talents and our community-powered network.
                        </p>
                        <Link to="/exchange" className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                            Explore the Exchange <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal width="100%">
                <Innovation />
            </ScrollReveal>

            {/* Gallery Preview */}
            <ScrollReveal width="100%">
                <section className="py-16 md:py-20 bg-neutral-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                                <Camera className="w-6 h-6 text-blue-600" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Our Impact in Action</h2>
                            <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                                Real stories, real people, real change across the Philippines.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8">
                            {[
                                { src: '/images/gallery/Karmaya Clinic Big and nice photo everyone outside with Mac.jpeg', alt: 'Karmaya Clinic Team', span: 'md:col-span-2 md:row-span-2' },
                                { src: '/images/gallery/Checking Vitals.jpeg', alt: 'Checking Vitals', span: '' },
                                { src: '/images/gallery/Child mouth check.jpeg', alt: 'Child Health Check', span: '' },
                                { src: '/images/gallery/Inside the Clinic.jpeg', alt: 'Inside the Clinic', span: '' },
                                { src: '/images/gallery/Doctor Eyesight test Older man.jpeg', alt: 'Vision Test', span: '' },
                            ].map((img, i) => (
                                <div key={i} className={`rounded-xl overflow-hidden ${img.span} aspect-square md:aspect-auto`}>
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <Link to="/gallery" className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                                View Full Gallery <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <Testimonials />

            <ParallaxDivider
                image="/images/gallery/Karmaya Group Photo with Mac.jpeg"
                quote="Every exchange strengthens the community. Every service creates a ripple of change."
            />

            {/* Resources CTA */}
            <ScrollReveal width="100%">
                <section className="py-16 md:py-20 bg-slate-50">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                            <BookOpen className="w-6 h-6 text-slate-600" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Resources & Documents</h2>
                        <p className="text-neutral-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                            Access research papers, community health guidelines, and educational materials.
                        </p>
                        <Link to="/resources" className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-600 text-white rounded-full font-bold text-sm hover:bg-slate-700 transition-colors shadow-lg shadow-slate-600/20">
                            Browse Resources <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>
            </ScrollReveal>
        </main>
    );
};

export default Home;
