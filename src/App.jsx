import { useEffect } from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Certifications from './components/Certifications';

export default function App() {
  useEffect(() => {
    document.title = 'Jean Granger | ML & AI Engineer';
  }, []);

  return (

    <div className="min-h-screen bg-slate-50 text-gray-900 overflow-hidden w-full">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow animation-delay-4000"></div>
      </div>

      <Header />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}