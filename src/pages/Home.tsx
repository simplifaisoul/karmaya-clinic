import Hero from "../components/Hero";
import ImpactStats from "../components/ImpactStats";
import Pillars from "../components/Pillars";
import Innovation from "../components/Innovation";
import ParallaxDivider from "../components/ParallaxDivider";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import { ScrollReveal } from "../components/ScrollReveal";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <main className="w-full relative">
            <Hero />

            <ImpactStats />

            <ScrollReveal width="100%">
                <div className="bg-blue-50 py-16 text-center px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Discover Our Mission</h2>
                    <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
                        Driven by the philosophy of "People helping people," we are redefining holistic primary healthcare for underserved communities.
                    </p>
                    <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
                        Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </ScrollReveal>

            <ScrollReveal width="100%">
                <Pillars />
            </ScrollReveal>

            <ParallaxDivider
                image="/images/gallery/Group outside assesment.jpeg"
                quote="People helping people — through positive energy and tangible action."
            />

            <ScrollReveal width="100%">
                <div className="bg-emerald-50 py-16 text-center px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">The Exchange Center</h2>
                    <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
                        Join our community-powered ecosystem. Offer your unique skills and receive the support you need, creating a sustainable cycle of care.
                    </p>
                    <Link to="/exchange" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors">
                        Enter the Exchange <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </ScrollReveal>

            <ScrollReveal width="100%">
                <Innovation />
            </ScrollReveal>

            <ScrollReveal width="100%">
                <Gallery />
            </ScrollReveal>

            <Testimonials />

            <ParallaxDivider
                image="/images/gallery/Karmaya Group Photo with Mac.jpeg"
                quote="Every exchange strengthens the community. Every service creates a ripple of change."
            />


            <ScrollReveal width="100%" direction="up">
                <Contact />
            </ScrollReveal>
        </main>
    );
};

export default Home;
