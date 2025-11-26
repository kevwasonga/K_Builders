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
      
      {/* Integrated CTA + Footer */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 mt-20">
        {/* CTA Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-5xl font-display font-bold text-white mb-6">Let's Create Something Amazing</h3>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Choose your preferred way to connect with us. We're here to transform your vision into reality.
            </p>
            
            {/* Contact Methods */}
            <div className="grid md:grid-cols-5 gap-6 mb-16">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all cursor-pointer group">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone size={28} className="text-white" />
                </div>
                <h4 className="font-bold text-white mb-2">Call Now</h4>
                <p className="text-slate-300 text-sm">Instant Response</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all cursor-pointer group">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail size={28} className="text-white" />
                </div>
                <h4 className="font-bold text-white mb-2">Email Us</h4>
                <p className="text-slate-300 text-sm">24hr Response</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all cursor-pointer group">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle size={28} className="text-white" />
                </div>
                <h4 className="font-bold text-white mb-2">Live Chat</h4>
                <p className="text-slate-300 text-sm">Online Now</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all cursor-pointer group">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Calendar size={28} className="text-white" />
                </div>
                <h4 className="font-bold text-white mb-2">Book Meeting</h4>
                <p className="text-slate-300 text-sm">Schedule Call</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all cursor-pointer group">
                <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Video size={28} className="text-white" />
                </div>
                <h4 className="font-bold text-white mb-2">Virtual Tour</h4>
                <p className="text-slate-300 text-sm">See Our Work</p>
              </div>
            </div>
            
            {/* Main CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-10 py-4 rounded-2xl text-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105">
                Start Virtual Tour
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-2xl text-lg font-medium hover:bg-white/20 transition-all border border-white/20">
                Get Directions →
              </button>
            </div>
          </div>
        </div>
        
        {/* Send Us a Message Section */}
        <div className="py-16 border-t border-slate-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-display font-bold text-white mb-4">Send Us a Message</h3>
              <p className="text-slate-300">Tell us about your project and we'll get back to you within 24 hours</p>
            </div>
            
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2 font-medium">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-medium">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all"
                  placeholder="Your phone"
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all"
                  placeholder="Project inquiry"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-white mb-2 font-medium">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-12 py-4 rounded-2xl text-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-4 gap-12">
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">CLAUSE INTERIOR FITS</h3>
                <p className="text-slate-300 mb-6">Transforming spaces with exceptional interior design and construction.</p>
                <div className="text-slate-400 text-sm">
                  <div className="mb-2">7+ Years Experience</div>
                  <div className="mb-2">500+ Projects Completed</div>
                  <div>24/7 Support Available</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-6">Quick Links</h4>
                <ul className="space-y-3 text-slate-300">
                  <li><a href="#home" className="hover:text-yellow-400 transition-colors">Home</a></li>
                  <li><a href="#about" className="hover:text-yellow-400 transition-colors">About</a></li>
                  <li><a href="#services" className="hover:text-yellow-400 transition-colors">Services</a></li>
                  <li><a href="#projects" className="hover:text-yellow-400 transition-colors">Projects</a></li>
                  <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-6">Services</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>Kitchen Cabinets</li>
                  <li>Marble Work</li>
                  <li>Gypsum Ceilings</li>
                  <li>Office Partitions</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-6">Contact Info</h4>
                <div className="space-y-4 text-slate-300">
                  <div className="flex items-center">
                    <Phone size={18} className="mr-3 text-yellow-400" />
                    <span>+254 700 123 456</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={18} className="mr-3 text-yellow-400" />
                    <span>info@buildkenya.co.ke</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={18} className="mr-3 text-yellow-400" />
                    <span>Kimathi Street, Nairobi</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-slate-700 pt-8 mt-12 text-center text-slate-400">
              <p>&copy; 2025 Clause Interior Fits. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;