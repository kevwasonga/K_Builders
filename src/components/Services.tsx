import { Package, Wrench, Square, Layers, Building2, Eye, Home, Briefcase, Tv, Phone, Mail, MapPin, MessageCircle, Calendar, Video, ChevronUp, ChevronDown } from 'lucide-react';
import { useState } from 'react';

function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  const scrollUp = () => {
    setCurrentSlide(prev => prev > 0 ? prev - 1 : totalSlides - 1);
  };

  const scrollDown = () => {
    setCurrentSlide(prev => prev < totalSlides - 1 ? prev + 1 : 0);
  };

  const services = [
    {
      icon: Package,
      title: 'Wardrobes & Kitchen Cabinets',
      description: 'Custom-designed wardrobes and kitchen cabinets tailored to your space and storage needs with premium materials.',
      features: ['Custom Design', 'Premium Materials', 'Space Optimization'],
      color: 'from-emerald-500 to-teal-600',
      bgImage: 'assets/kitchen_cabinets_project.jpg'
    },
    {
      icon: Wrench,
      title: 'Stainless Steel & Glazing Works',
      description: 'Professional stainless steel fabrication and glazing installations for modern, durable finishes.',
      features: ['Modern Finishes', 'Durable Materials', 'Professional Install'],
      color: 'from-blue-500 to-indigo-600',
      bgImage: 'assets/stainless_steel_bg.jpg'
    },
    {
      icon: Square,
      title: 'Marble Work',
      description: 'Premium marble installations and custom stonework for countertops, flooring, and decorative elements.',
      features: ['Premium Stone', 'Custom Cutting', 'Expert Installation'],
      color: 'from-purple-500 to-pink-600',
      bgImage: 'assets/marble_work_project.jpg'
    },
    {
      icon: Layers,
      title: 'Gypsum Ceilings & Acoustic Ceilings',
      description: 'Professional ceiling installations including gypsum and acoustic solutions for optimal sound control.',
      features: ['Sound Control', 'Modern Design', 'Quality Install'],
      color: 'from-orange-500 to-red-600',
      bgImage: 'assets/acoustic_ceiling_bg.jpg'
    },
    {
      icon: Building2,
      title: 'Aluminium Works & Office Partitions',
      description: 'Modern aluminium installations and office partition systems for commercial and residential spaces.',
      features: ['Space Division', 'Modern Systems', 'Commercial Grade'],
      color: 'from-cyan-500 to-blue-600',
      bgImage: 'assets/aluminium_works_bg.jpg'
    },
    {
      icon: Eye,
      title: '3D Renders & Consultancy',
      description: 'Professional 3D visualization and design consultancy services to bring your vision to life.',
      features: ['3D Visualization', 'Design Consultation', 'Vision Realization'],
      color: 'from-yellow-500 to-orange-600',
      bgImage: 'assets/renders_consultancy_bg.jpg'
    },
    {
      icon: Home,
      title: 'House Makeover & Renovation',
      description: 'Complete home transformation services from concept to completion with attention to detail.',
      features: ['Full Renovation', 'Concept to Completion', 'Detail Focused'],
      color: 'from-green-500 to-emerald-600',
      bgImage: 'assets/house_makeover_bg.jpg'
    },
    {
      icon: Briefcase,
      title: 'Office Desk, Counter Layout & Marble Work',
      description: 'Custom office furniture, counter designs, and premium marble installations for professional spaces.',
      features: ['Custom Furniture', 'Professional Design', 'Premium Materials'],
      color: 'from-indigo-500 to-purple-600',
      bgImage: 'assets/office_furniture_project.jpg'
    },
    {
      icon: Tv,
      title: 'Television Mounting',
      description: 'Professional TV mounting services with cable management and optimal viewing angle positioning.',
      features: ['Professional Mounting', 'Cable Management', 'Optimal Positioning'],
      color: 'from-slate-500 to-gray-600',
      bgImage: 'assets/tv_mounting_bg.jpg'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 text-sm font-bold rounded-full mb-6">
            Our Expertise
          </div>
          <h2 className="text-5xl font-display font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">Premium Services</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we deliver exceptional interior and exterior solutions 
            that transform spaces and exceed expectations.
          </p>
        </div>

        {/* Services Slider */}
        <div className="relative">
          {/* Scroll Controls */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 flex flex-col gap-2">
            <button 
              onClick={scrollUp}
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
            >
              <ChevronUp size={20} className="text-slate-700" />
            </button>
            <button 
              onClick={scrollDown}
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
            >
              <ChevronDown size={20} className="text-slate-700" />
            </button>
          </div>
          
          <div className="overflow-hidden h-[600px]">
            <div className="transition-transform duration-700 ease-in-out" style={{transform: `translateY(-${currentSlide * 100}%)`}}>
              {/* Slide 1 */}
              <div className="h-[600px] flex flex-col">
                <div className="grid grid-cols-4 gap-6 mb-6 flex-1">
                  {services.slice(0, 4).map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div 
                        key={index}
                        className="card-elegant group overflow-hidden h-full"
                      >
                        <div className="relative h-32 mb-4 overflow-hidden rounded-xl">
                          <img 
                            src={service.bgImage} 
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                          <div className="absolute top-2 left-2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <IconComponent size={16} className="text-white" />
                          </div>
                        </div>
                        <h3 className="text-base font-display font-bold text-slate-800 mb-2">{service.title}</h3>
                        <p className="text-slate-600 text-xs leading-relaxed mb-3">
                          {service.description}
                        </p>
                        <button className="w-full btn-primary text-xs py-2">
                          Learn More
                        </button>
                      </div>
                    );
                  })}
                </div>
                
                <div className="grid grid-cols-4 gap-6 flex-1">
                  {services.slice(4, 8).map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div 
                        key={index + 4}
                        className="card-elegant group overflow-hidden h-full"
                      >
                        <div className="relative h-32 mb-4 overflow-hidden rounded-xl">
                          <img 
                            src={service.bgImage} 
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                          <div className="absolute top-2 left-2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <IconComponent size={16} className="text-white" />
                          </div>
                        </div>
                        <h3 className="text-base font-display font-bold text-slate-800 mb-2">{service.title}</h3>
                        <p className="text-slate-600 text-xs leading-relaxed mb-3">
                          {service.description}
                        </p>
                        <button className="w-full btn-primary text-xs py-2">
                          Learn More
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Slide 2 */}
              <div className="h-[600px] flex flex-col justify-center">
                <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
                  {services.slice(8, 9).map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div 
                        key={index + 8}
                        className="card-elegant group overflow-hidden"
                      >
                        <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                          <img 
                            src={service.bgImage} 
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                          <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <IconComponent size={24} className="text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-display font-bold text-slate-800 mb-4">{service.title}</h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <button className="w-full btn-primary text-sm py-3">
                          Learn More
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;