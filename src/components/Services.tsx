import { Package, Wrench, Square, Layers, Building2, Eye, Home, Briefcase } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Package,
      title: 'Wardrobes & Kitchen Cabinets',
      description: 'Custom-designed wardrobes and kitchen cabinets tailored to your space and storage needs.',
      color: 'bg-slate-500',
      hoverColor: 'hover:bg-slate-600'
    },
    {
      icon: Wrench,
      title: 'Stainless Steel & Glazing Works',
      description: 'Professional stainless steel fabrication and glazing installations for modern finishes.',
      color: 'bg-slate-600',
      hoverColor: 'hover:bg-slate-700'
    },
    {
      icon: Square,
      title: 'Marble Work',
      description: 'Premium marble installations and custom stonework for countertops, flooring, and decorative elements.',
      color: 'bg-slate-700',
      hoverColor: 'hover:bg-slate-800'
    },
    {
      icon: Layers,
      title: 'Gypsum Ceilings & Acoustic Ceilings',
      description: 'Professional ceiling installations including gypsum and acoustic solutions for optimal sound control.',
      color: 'bg-slate-400',
      hoverColor: 'hover:bg-slate-500'
    },
    {
      icon: Building2,
      title: 'Aluminium Works & Office Partitions',
      description: 'Modern aluminium installations and office partition systems for commercial and residential spaces.',
      color: 'bg-slate-800',
      hoverColor: 'hover:bg-slate-900'
    },
    {
      icon: Eye,
      title: '3D Renders & Consultancy',
      description: 'Professional 3D visualization and design consultancy services to bring your vision to life.',
      color: 'bg-slate-300',
      hoverColor: 'hover:bg-slate-400'
    },
    {
      icon: Home,
      title: 'House Makeover & Renovation',
      description: 'Complete home transformation services from concept to completion with attention to detail.',
      color: 'bg-slate-600',
      hoverColor: 'hover:bg-slate-700'
    },
    {
      icon: Briefcase,
      title: 'Office Desk, Counter Layout & Marble Work',
      description: 'Custom office furniture, counter designs, and premium marble installations for professional spaces.',
      color: 'bg-slate-500',
      hoverColor: 'hover:bg-slate-600'
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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