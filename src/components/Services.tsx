import { Package, Wrench, Square, Layers, Building2, Eye, Home, Briefcase, ArrowRight } from 'lucide-react';
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
      bgImage: 'kitchen_cabinets_project.jpg'
    },
    {
      icon: Wrench,
      title: 'Stainless Steel & Glazing Works',
      description: 'Professional stainless steel fabrication and glazing installations for modern, durable finishes.',
      features: ['Modern Finishes', 'Durable Materials', 'Professional Install'],
      color: 'from-blue-500 to-indigo-600',
      bgImage: 'stainless_steel_bg.jpg'
    },
    {
      icon: Square,
      title: 'Marble Work',
      description: 'Premium marble installations and custom stonework for countertops, flooring, and decorative elements.',
      features: ['Premium Stone', 'Custom Cutting', 'Expert Installation'],
      color: 'from-purple-500 to-pink-600',
      bgImage: 'marble_work_project.jpg'
    },
    {
      icon: Layers,
      title: 'Gypsum Ceilings & Acoustic Ceilings',
      description: 'Professional ceiling installations including gypsum and acoustic solutions for optimal sound control.',
      features: ['Sound Control', 'Modern Design', 'Quality Install'],
      color: 'from-orange-500 to-red-600',
      bgImage: 'acoustic_ceiling_bg.jpg'
    },
    {
      icon: Building2,
      title: 'Aluminium Works & Office Partitions',
      description: 'Modern aluminium installations and office partition systems for commercial and residential spaces.',
      features: ['Space Division', 'Modern Systems', 'Commercial Grade'],
      color: 'from-cyan-500 to-blue-600',
      bgImage: 'aluminium_works_bg.jpg'
    },
    {
      icon: Eye,
      title: '3D Renders & Consultancy',
      description: 'Professional 3D visualization and design consultancy services to bring your vision to life.',
      features: ['3D Visualization', 'Design Consultation', 'Vision Realization'],
      color: 'from-yellow-500 to-orange-600',
      bgImage: 'renders_consultancy_bg.jpg'
    },
    {
      icon: Home,
      title: 'House Makeover & Renovation',
      description: 'Complete home transformation services from concept to completion with attention to detail.',
      features: ['Full Renovation', 'Concept to Completion', 'Detail Focused'],
      color: 'from-green-500 to-emerald-600',
      bgImage: 'house_makeover_bg.jpg'
    },
    {
      icon: Briefcase,
      title: 'Office Desk, Counter Layout & Marble Work',
      description: 'Custom office furniture, counter designs, and premium marble installations for professional spaces.',
      features: ['Custom Furniture', 'Professional Design', 'Premium Materials'],
      color: 'from-indigo-500 to-purple-600',
      bgImage: 'office_furniture_project.jpg'
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
          <h2 className="text-5xl font-bold text-slate-800 mb-6">Premium Services</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we deliver exceptional interior and exterior solutions 
            that transform spaces and exceed expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredService === index;
            
            return (
              <div 
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.bgImage} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`}></div>
                  
                  {/* Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <IconComponent size={32} className="text-white" />
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className={`absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                    isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}>
                    <ArrowRight size={20} className="text-white" />
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white leading-tight">{service.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3"></div>
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isHovered 
                      ? `bg-gradient-to-r ${service.color} text-white shadow-lg` 
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}>
                    Learn More
                  </button>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 ${
                  isHovered ? `border-gradient-to-r ${service.color}` : 'border-transparent'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something extraordinary together.
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-8 py-4 rounded-xl text-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;