import Hero from "../components/Hero";
import ImpactStats from "../components/ImpactStats";
import About from "../components/About";
import Pillars from "../components/Pillars";
import HowItWorks from "../components/HowItWorks";
import Innovation from "../components/Innovation";
import ParallaxDivider from "../components/ParallaxDivider";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import JoinHub from "../components/JoinHub";
import Contact from "../components/Contact";
import { ScrollReveal } from "../components/ScrollReveal";

const Home = () => {
    return (
        <main className="w-full relative">
            <Hero />

            <ImpactStats />

            <ScrollReveal width="100%">
                <About />
            </ScrollReveal>

            <ScrollReveal width="100%">
                <Pillars />
            </ScrollReveal>

            <ParallaxDivider
                image="/images/gallery/Group outside assesment.jpeg"
                quote="People helping people — through positive energy and tangible action."
            />

            <ScrollReveal width="100%">
                <HowItWorks />
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

            <ScrollReveal width="100%">
                <JoinHub />
            </ScrollReveal>

            <ScrollReveal width="100%" direction="up">
                <Contact />
            </ScrollReveal>
        </main>
    );
};

export default Home;
