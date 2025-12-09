import { ChevronDown, Play, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import hero1 from '../images/hero_images/hero1.png';
import hero2 from '../images/hero_images/hero2.png';
import hero3 from '../images/hero_images/hero3.png';
import hero4 from '../images/hero_images/hero4.png';
import hero5 from '../images/hero_images/hero5.png';
import hero6 from '../images/hero_images/hero6.png';

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroImages = [
    hero1,
    hero2,
    hero3,
    hero4,
    hero5,
    hero6
  ];



  const getRandomIndex = (currentIndex) => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * heroImages.length);
    } while (randomIndex === currentIndex && heroImages.length > 1);
    return randomIndex;
  };

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => getRandomIndex(prev));
    }, 8000);
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
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-slate-900/20 to-slate-900/40"></div>
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
            <div className={`transform transition-all duration-1000 mt-16 sm:mt-24 md:mt-32 lg:mt-36 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-display font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
                Design That
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Transforms
                </span>
                Lives
              </h1>
              
              <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-200 mb-6 sm:mb-8 md:mb-12 leading-relaxed max-w-4xl mx-auto px-4">
                Creating exceptional spaces with innovative design, quality craftsmanship, and attention to every detail across Kenya.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-row gap-2 xs:gap-3 sm:gap-4 md:gap-6 justify-center mb-12 sm:mb-16 px-2 xs:px-4">
                <a
                  href="#about"
                  onClick={(e) => { e.preventDefault(); scrollToAbout(); }}
                  className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-3 xs:px-4 sm:px-6 md:px-8 py-2 xs:py-3 sm:py-4 md:py-5 rounded-lg xs:rounded-xl sm:rounded-2xl text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 shadow-2xl group inline-block text-center whitespace-nowrap"
                >
                  Start Project
                  <span className="ml-1 xs:ml-2 group-hover:translate-x-2 transition-transform inline-block text-base xs:text-lg sm:text-xl md:text-2xl">→</span>
                </a>
                
                <a 
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('projects');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex-1 bg-white/10 backdrop-blur-lg text-white px-3 xs:px-4 sm:px-6 md:px-8 py-2 xs:py-3 sm:py-4 md:py-5 rounded-lg xs:rounded-xl sm:rounded-2xl text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:bg-white/20 transition-all border border-white/30 group flex items-center justify-center whitespace-nowrap"
                >
                  <Play size={16} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6 mr-1 xs:mr-2" />
                  <span className="hidden xs:inline">Watch Our Story</span>
                  <span className="xs:hidden">Story</span>
                </a>
              </div>

              {/* Stats and Scroll Indicator */}
              <div className="flex flex-col items-center">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award size={32} className="text-yellow-400" />
                  </div>
                  <div className="text-2xl xs:text-3xl md:text-4xl font-display font-bold text-white mb-2">7+</div>
                  <div className="text-xs xs:text-sm md:text-base text-slate-300">Years Experience</div>
                </div>
                
                <a
                  href="#about"
                  onClick={(e) => { e.preventDefault(); scrollToAbout(); }}
                  className="text-white animate-bounce group cursor-pointer"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-xs xs:text-sm mb-2 opacity-75 group-hover:opacity-100 transition-opacity">Scroll to explore</span>
                    <ChevronDown size={32} className="group-hover:text-yellow-400 transition-colors" />
                  </div>
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-20 right-8 flex flex-col space-y-3">
        {[0, 1].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-4 h-4 rounded-full transition-all cursor-pointer hover:cursor-pointer ${
              currentImageIndex % 2 === index 
                ? 'bg-yellow-400 scale-125 shadow-lg shadow-yellow-400/50' 
                : 'bg-white/60 hover:bg-white/80 hover:scale-110'
            }`}
            aria-label={`View hero image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;