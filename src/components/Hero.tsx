import { ChevronDown, Play, Award, Users, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroImages = [
    '/K_Builders/hero_bg.jpg',
    '/K_Builders/interior_design_project.jpg',
    '/K_Builders/kitchen_cabinets_project.jpg',
    '/K_Builders/office_furniture_project.jpg'
  ];

  const stats = [
    { number: '7+', label: 'Years Experience', icon: Award },
    { number: '500+', label: 'Projects Completed', icon: Users },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className={`text-left transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>

              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Design That
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Transforms
                </span>
                Lives
              </h1>
              
              <p className="text-xl sm:text-2xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
                Creating exceptional spaces with innovative design, quality craftsmanship, and attention to every detail across Kenya.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={scrollToAbout}
                  className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-8 py-4 rounded-xl text-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 shadow-2xl"
                >
                  Start Your Project
                  <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                </button>
                
                <button className="group flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/20 transition-all border border-white/20">
                  <Play size={20} className="mr-2" />
                  Watch Our Story
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <IconComponent size={24} className="text-yellow-400" />
                      </div>
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-sm text-slate-300">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Featured Project Card */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="mb-6">
                  <img 
                    src="/K_Builders/kitchen_cabinets_project.jpg" 
                    alt="Featured Project" 
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Latest Project</h3>
                <p className="text-slate-200 mb-4">
                  Modern kitchen transformation with custom cabinets and premium finishes in Karen, Nairobi.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 font-semibold">View Portfolio →</span>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div key={star} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce group"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 opacity-75 group-hover:opacity-100 transition-opacity">Scroll to explore</span>
          <ChevronDown size={32} className="group-hover:text-yellow-400 transition-colors" />
        </div>
      </button>

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