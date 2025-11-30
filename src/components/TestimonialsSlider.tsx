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
      name: "James Mwangi",
      role: "CEO",
      company: "Mwangi Holdings Ltd",
      content: "We've worked with several construction companies over the years, but Clause Interior Fits stands out for their innovative approach and unwavering commitment to excellence. They delivered our project ahead of schedule. Outstanding work!",
      rating: 5
    },
    {
      id: "2",
      name: "Sarah Wanjiku",
      role: "Homeowner",
      company: "Private Client",
      content: "Clause Interior Fits transformed our dream home into reality. Their attention to detail, professionalism, and commitment to quality exceeded all our expectations. The project was completed on time and within budget.",
      rating: 5
    },
    {
      id: "3",
      name: "Dr. Grace Mutua",
      role: "Medical Director",
      company: "Mutua Medical Centre",
      content: "Building a medical facility requires precision and understanding of specialized requirements. Clause Interior Fits demonstrated exceptional expertise in all these areas. Our new medical center is not just beautiful but also highly functional.",
      rating: 5
    },
    {
      id: "4",
      name: "Peter Ochieng",
      role: "Property Developer",
      company: "Ochieng Properties",
      content: "As a property developer, I've partnered with Clause Interior Fits on multiple projects. Their consistency in delivering high-quality work, maintaining timelines, and managing costs effectively has made them our go-to construction partner.",
      rating: 5
    },
    {
      id: "5",
      name: "Mary Njeri",
      role: "Restaurant Owner",
      company: "Njeri's Kitchen",
      content: "Renovating our restaurant while keeping it operational was a complex challenge. Clause Interior Fits managed the project brilliantly, working around our business hours and ensuring minimal disruption to our customers.",
      rating: 5
    },
    {
      id: "6",
      name: "Robert Kimani",
      role: "County Engineer",
      company: "Kiambu County Government",
      content: "Clause Interior Fits' work on our county hospital project was exemplary. They navigated complex regulatory requirements and delivered a world-class facility that serves our community with pride.",
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
    <div className="text-center mt-20">
      <div className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-lg rounded-2xl p-12 border border-slate-500 shadow-2xl">
        <h3 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h3>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Real stories from real clients who trusted us with their construction dreams
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6">
            <div className="flex items-center justify-center mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={24} className="text-orange-500 fill-current mx-1" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-center text-white/95 leading-relaxed mb-8 font-light italic">
              "{testimonials[currentTestimonial].content}"
            </blockquote>
            
            <div className="text-center">
              <div className="font-semibold text-white text-lg">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-white/80 text-sm">
                {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSlider;