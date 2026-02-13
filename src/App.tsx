import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import WhatsAppWidget from "./components/WhatsAppWidget";

function App() {
  const location = useLocation();

  // Handle scroll to section from URL query param (e.g. /?section=mission)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (section) {
      // Small timeout to ensure DOM is ready and layout is stable
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (location.hash) {
      // Fallback for standard hash
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    // Check for scrollTo state if passed
  }, [location]);

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
