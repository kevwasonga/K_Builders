import { Package, Wrench, Square, Layers, Building2, Eye, Home, Briefcase, Phone, Mail, MapPin, MessageCircle, Calendar, Video } from 'lucide-react';
import { useState } from 'react';

function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredService === index;
            
            return (
              <div 
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className="card-elegant group overflow-hidden"
              >
                {/* Background Image */}
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
    </section>
  );
}

export default Services;