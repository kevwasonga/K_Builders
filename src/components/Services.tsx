import { Building, Palette, Zap, Trees, Cog, Home } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Building,
      title: 'New Building Construction',
      description: 'Whatever your construction requirements we can help you - from new builds to refurbishments.',
      color: 'bg-slate-500',
      hoverColor: 'hover:bg-slate-600'
    },
    {
      icon: Palette,
      title: 'Architectural Designs',
      description: 'Building Design, Interior Design, Structural Design, 3D Visualization.',
      color: 'bg-slate-600',
      hoverColor: 'hover:bg-slate-700'
    },
    {
      icon: Zap,
      title: 'Commercial and Electrical Installations',
      description: 'We install and cable associated devices such as switches, distribution boards, sockets, and light fittings in a structure.',
      color: 'bg-slate-700',
      hoverColor: 'hover:bg-slate-800'
    },
    {
      icon: Trees,
      title: 'Landscaping & External Works',
      description: 'Hard landscaping projects create an interesting outside area to your property and will add to its value.',
      color: 'bg-slate-400',
      hoverColor: 'hover:bg-slate-500'
    },
    {
      icon: Cog,
      title: 'Mechanical and Renewables',
      description: 'We design, install, commission, maintain and service a vast range of mechanical equipment in Private Housing, Social Housing and Commercial properties.',
      color: 'bg-slate-800',
      hoverColor: 'hover:bg-slate-900'
    },
    {
      icon: Home,
      title: 'Roofing Installation',
      description: 'We provide effective, service-oriented roofing and consistently providing our clients with materials of the highest quality.',
      color: 'bg-slate-300',
      hoverColor: 'hover:bg-slate-400'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-slate-600 mx-auto mb-6"></div>
          <h3 className="text-2xl font-semibold text-slate-700 mb-4">What We Do Offer</h3>
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
            As a leader in our industry, we have always worked to develop advanced technology and innovative methods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`${service.color} ${service.hoverColor} p-6 transition-colors duration-300`}>
                <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white text-center">{service.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-slate-600 leading-relaxed text-center group-hover:text-slate-700 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;