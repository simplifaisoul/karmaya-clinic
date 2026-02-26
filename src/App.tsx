import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import AboutUs from "./pages/AboutUs";
import ExchangeCenter from "./pages/ExchangeCenter";
import GalleryPage from "./pages/GalleryPage";
import PillarsPage from "./pages/PillarsPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import WhatsAppWidget from "./components/WhatsAppWidget";

function App() {
  const location = useLocation();

  // Scroll to top on route change, or handle hash/query scroll
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/exchange" element={<ExchangeCenter />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/pillars" element={<PillarsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <WhatsAppWidget />
    </Layout>
  );
}

export default App;
