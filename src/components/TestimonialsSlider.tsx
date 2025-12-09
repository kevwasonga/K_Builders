import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

function TestimonialsSlider() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Refine Homes",
      role: "Client",
      company: "Nairobi",
      content: "Clause Interior Fits delivered a beautiful modern redesign for our residential units. Their creativity and attention to detail really stood out, and the workmanship was consistently top-notch. We're grateful for their reliability and the quality of the interior design work they provided here in Nairobi.",
      rating: 5
    },
    {
      id: "2",
      name: "Ryder's Enterprise",
      role: "Client",
      company: "Kisumu",
      content: "Working with Clause Interior Fits truly changed our space. They gave us a clean, modern look that fits our brand perfectly, and the whole team was professional and easy to work with. If you're looking for dependable commercial interior designers in Kisumu, they're an excellent choice.",
      rating: 5
    },
    {
      id: "3",
      name: "Nebraska Investment",
      role: "Client",
      company: "Siaya",
      content: "We hired Clause Interior Fits for a full interior revamp, and they went above what we expected. The layout, finishes, and overall design completely transformed our property. Their interior renovation services were smooth and professional from beginning to end.",
      rating: 5
    },
    {
      id: "4",
      name: "InforAfrica Group",
      role: "Client",
      company: "Nairobi",
      content: "Clause Interior Fits gave our office a modern, professional feel that reflects our company well. The new design has boosted both functionality and comfort for the entire team. For anyone needing trusted office interior fit-outs in Nairobi, we definitely recommend them.",
      rating: 5
    },
    {
      id: "5",
      name: "Pabari Enterprise",
      role: "Client",
      company: "Kisumu",
      content: "Clause Interior Fits upgraded our premises with a fresh, modern look that really makes a difference. Their workmanship was clean and detailed, and the whole project was handled professionally. A great option for businesses seeking modern interior improvements in Kisumu.",
      rating: 5
    },
    {
      id: "6",
      name: "Gohar Glazier",
      role: "Client",
      company: "Kisumu",
      content: "We're very pleased with the interior design work from Clause Interior Fits. They managed to combine practicality with a modern aesthetic in a way that truly elevated our workspace. Their consistency and expertise make them one of the best teams we've worked with in Kisumu.",
      rating: 5
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="text-center mt-6 sm:mt-8 md:mt-10">
      <div className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-lg rounded-2xl p-2 xs:p-3 sm:p-4 md:p-6 border border-slate-500 shadow-2xl w-full mx-auto">
        <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 xs:mb-3 sm:mb-4">What Our Clients Say</h3>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg text-slate-300 mb-4 xs:mb-6 sm:mb-8 max-w-2xl mx-auto px-2 xs:px-4">
          Real stories from real clients who trusted us with their interior construction dreams
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-slate-100/20 to-slate-300/20 backdrop-blur-sm rounded-xl p-3 xs:p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
            <div className="flex items-center justify-center mb-3 xs:mb-4 sm:mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={16} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-orange-500 fill-current mx-0.5 xs:mx-1" />
              ))}
            </div>
            
            <blockquote className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-center text-white/95 leading-relaxed mb-4 xs:mb-6 sm:mb-8 font-light italic">
              "{testimonials[currentTestimonial].content}"
            </blockquote>
            
            <div className="text-center">
              <div className="font-semibold text-white text-sm xs:text-base sm:text-lg md:text-xl">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-white/80 text-[10px] xs:text-xs sm:text-sm md:text-base">
                {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-2 xs:space-x-3 sm:space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft size={16} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-1 xs:space-x-1.5 sm:space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight size={16} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSlider;