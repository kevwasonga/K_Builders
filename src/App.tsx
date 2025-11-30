import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';



function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },

    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-2xl border-b border-slate-200/50 transform translate-y-0' 
          : 'bg-transparent transform translate-y-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Designer Logo */}
            <div 
              className="flex items-center group cursor-pointer" 
              onClick={() => scrollToSection('home')}
            >
              <div className={`transition-all duration-700 ease-out ${
                isScrolled ? 'scale-75 opacity-95' : 'scale-100 opacity-100'
              }`}>
                <div className="relative">
                  {/* Main Logo Text */}
                  <div className="flex flex-col items-start">
                    <div className="flex items-center">
                      <h1 className={`font-serif font-bold tracking-tight transition-all duration-700 ease-out ${
                        isScrolled ? 'text-2xl' : 'text-4xl'
                      }`} style={{color: '#6A394F', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>
                        CLAUSE
                      </h1>
                      <span className="text-yellow-500 text-xs ml-1 font-bold">™</span>
                    </div>
                    <div className={`font-serif font-semibold tracking-widest transition-all duration-700 ease-out ${
                      isScrolled ? 'text-sm mt-0' : 'text-lg mt-1'
                    }`} style={{color: '#0F5C5F', textShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>
                      INTERIOR FITS
                    </div>
                  </div>
                  
                  {/* Flowing Wave Graphic */}
                  <div className={`absolute -bottom-1 left-0 transition-all duration-700 ease-out ${
                    isScrolled ? 'w-24 h-1 opacity-80' : 'w-32 h-2 opacity-100'
                  }`}>
                    <svg viewBox="0 0 100 10" className="w-full h-full" style={{fill: '#0F5C5F'}}>
                      <path d="M0,8 Q25,2 50,6 T100,4 L100,10 L0,10 Z" opacity="0.8"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-500 ease-out group ${
                    isScrolled 
                      ? 'text-slate-700 hover:text-slate-900' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:w-8 transition-all duration-500 ease-out"></div>
                </button>
              ))}
              
              {/* CTA Button */}
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="ml-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-6 py-3 rounded-xl font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-500 ease-out transform hover:scale-105 shadow-lg"
              >
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl transition-all duration-500 ease-out ${
                isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200/50 animate-in slide-in-from-top duration-500">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className="block w-full text-left px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-yellow-400/10 hover:to-orange-500/10 rounded-xl transition-all duration-400 ease-out font-medium"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full mt-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-6 py-3 rounded-xl font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      
      <Footer />


    </div>
  );
}

export default App;