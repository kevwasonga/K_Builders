import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/logo.jpg" alt="Clause Interior Fits" className="h-10 w-auto mr-3" />
              <span className="text-2xl font-bold text-slate-800">Clause Interior Fits</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-slate-900 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-slate-900 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-slate-900 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-600 hover:text-slate-900 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-slate-900 transition-colors">
                Contact
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-600 hover:text-slate-900"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-slate-600 hover:text-slate-900 py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-slate-600 hover:text-slate-900 py-2">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-slate-600 hover:text-slate-900 py-2">
                Services
              </button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-slate-600 hover:text-slate-900 py-2">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-slate-600 hover:text-slate-900 py-2">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;