import { ChevronDown } from 'lucide-react';

function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="/kitchen_construction.jpg"
          alt="Kitchen Construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900 bg-opacity-60"></div>
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Build Your Dream Home
          </h1>
          <p className="text-xl sm:text-2xl text-slate-200 mb-8 leading-relaxed">
            Quality home construction services across Kenya
          </p>
          <button
            onClick={scrollToAbout}
            className="bg-slate-700 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-slate-600 transition-colors"
          >
View Our Homes
          </button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}

export default Hero;