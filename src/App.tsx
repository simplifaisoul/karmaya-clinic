import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Pillars from "./components/Pillars";
import Innovation from "./components/Innovation";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Pillars />
      <Innovation />
      <Gallery />
      <Contact />
    </Layout>
  );
}

export default App;
