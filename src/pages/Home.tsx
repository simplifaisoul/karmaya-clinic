import Hero from "../components/Hero";
import About from "../components/About";
import Pillars from "../components/Pillars";
import Innovation from "../components/Innovation";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import JoinHub from "../components/JoinHub";
import { ScrollReveal } from "../components/ScrollReveal";

const Home = () => {
    return (
        <main className="w-full relative">
            <Hero />

            <ScrollReveal width="100%">
                <About />
            </ScrollReveal>

            <ScrollReveal width="100%">
                <Pillars />
            </ScrollReveal>

            <ScrollReveal width="100%">
                <Innovation />
            </ScrollReveal>

            <ScrollReveal width="100%">
                <Gallery />
            </ScrollReveal>

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
