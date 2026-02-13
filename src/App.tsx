import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Pillars from "./components/Pillars";
import Innovation from "./components/Innovation";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Resources from "./pages/Resources";
import WhatsAppWidget from "./components/WhatsAppWidget";

const Home = () => (
  <>
    <Hero />
    <About />
    <Pillars />
    <Innovation />
    <Gallery />
    <Contact />
  </>
);

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <WhatsAppWidget />
    </Layout>
  );
}

export default App;
