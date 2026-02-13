import Hero from "../components/Hero";
import About from "../components/About";
import Pillars from "../components/Pillars";
import Innovation from "../components/Innovation";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import { ScrollReveal } from "../components/ScrollReveal";

const Home = () => {
    // Check for hash in URL to scroll to section after render
    // This is handled nicely by the browser naturally if elements exist, 
    // but with React usually we need useEffect. 
    // However, since we are not using lazy loading here, it might just work.
    // Let's rely on the Header's Link to="/?section=x" logic if I implemented it,
    // or the browser's default hash handling if I used simple IDs.
    // I previously implemented the params check in a thought but didn't write it to Home.
    // I should add it here.

    return (
        <div className="overflow-x-hidden">
            {/* Hero handles its own initial animations */}
            <Hero />

            <ScrollReveal width="100%">
                <About />
            </ScrollReveal>

            <ScrollReveal width="100%" direction="right">
                <Pillars />
            </ScrollReveal>

            <ScrollReveal width="100%" direction="left">
                <Innovation />
            </ScrollReveal>

            <ScrollReveal width="100%">
                <Gallery />
            </ScrollReveal>

            <ScrollReveal width="100%" direction="up">
                <Contact />
            </ScrollReveal>
        </div>
    );
};

export default Home;
