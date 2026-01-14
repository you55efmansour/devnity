import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProjects from './components/AllProjects';

function App() {
  useEffect(() => {
    document.title = 'Devnity';
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="font-sans">
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Hero />
                <Services />
                <Portfolio />
                <About />
                {/* <Testimonials /> */}
                <Contact />
                <Footer />
              </>
            } />
            <Route path="/all-projects" element={<AllProjects />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;