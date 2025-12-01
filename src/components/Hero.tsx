import { ChevronDown, Play, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroBg from '../images/hero_bg.jpg';
import interiorProject from '../images/interior_design_project.jpg';
import kitchenProject from '../images/kitchen_cabinets_project.jpg';
import officeProject from '../images/office_furniture_project.jpg';

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroImages = [
    heroBg,
    interiorProject,
    kitchenProject,
    officeProject
  ];



  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      {/* Background Images with Parallax Effect */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt="Interior Design"
              className="w-full h-full object-cover scale-110 animate-slow-zoom"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80"></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-yellow-400/20 rotate-45 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 border-2 border-blue-400/20 animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative h-full flex items-center justify-center z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

              
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-display font-bold text-white mb-8 leading-tight">
                Design That
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Transforms
                </span>
                Lives
              </h1>
              
              <p className="text-2xl sm:text-3xl text-slate-200 mb-12 leading-relaxed max-w-4xl mx-auto">
                Creating exceptional spaces with innovative design, quality craftsmanship, and attention to every detail across Kenya.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button
                  onClick={scrollToAbout}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-12 py-5 rounded-2xl text-xl font-bold hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 shadow-2xl group"
                >
                  Start Your Project
                  <span className="ml-3 group-hover:translate-x-2 transition-transform inline-block text-2xl">→</span>
                </button>
                
                <button 
                  onClick={() => {
                    const element = document.getElementById('projects');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-white/10 backdrop-blur-lg text-white px-12 py-5 rounded-2xl text-xl font-medium hover:bg-white/20 transition-all border border-white/30 group flex items-center justify-center"
                >
                  <Play size={24} className="mr-3" />
                  Watch Our Story
                </button>
              </div>

              {/* Stats and Scroll Indicator */}
              <div className="flex flex-col items-center">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award size={32} className="text-yellow-400" />
                  </div>
                  <div className="text-3xl font-display font-bold text-white mb-2">7+</div>
                  <div className="text-slate-300">Years Experience</div>
                </div>
                
                <button
                  onClick={scrollToAbout}
                  className="text-white animate-bounce group"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-sm mb-2 opacity-75 group-hover:opacity-100 transition-opacity">Scroll to explore</span>
                    <ChevronDown size={32} className="group-hover:text-yellow-400 transition-colors" />
                  </div>
                </button>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-20 right-8 flex flex-col space-y-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImageIndex 
                ? 'bg-yellow-400 scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;