import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: 'Custom Kitchen Cabinets',
      category: 'Kitchen Design',
      location: 'Karen, Nairobi',
      description: 'Modern kitchen with custom-built cabinets, granite countertops, and stainless steel appliances.',
      image: '/kitchen_cabinets_project.jpg'
    },
    {
      title: 'Gypsum Ceiling Installation',
      category: 'Ceiling Work',
      location: 'Westlands, Nairobi',
      description: 'Professional gypsum ceiling installation with modern lighting integration and smooth finishes.',
      image: '/gypsum_ceiling_project.jpg'
    },
    {
      title: 'Office Partition Systems',
      category: 'Commercial Interiors',
      location: 'CBD, Nairobi',
      description: 'Aluminium and glass office partitions creating functional workspace divisions.',
      image: '/office_partition_project.jpg'
    },
    {
      title: 'Wardrobe & Storage Solutions',
      category: 'Custom Furniture',
      location: 'Kiambu, Kenya',
      description: 'Built-in wardrobes with optimized storage solutions and modern sliding door systems.',
      image: '/wardrobe_project.jpg'
    },
    {
      title: 'Marble Countertop Installation',
      category: 'Stone Work',
      location: 'Nakuru, Kenya',
      description: 'Premium marble countertops with precision cutting and professional installation.',
      image: '/marble_work_project.jpg'
    },
    {
      title: 'Complete Office Makeover',
      category: 'Renovation',
      location: 'Kisumu, Kenya',
      description: 'Full office renovation including partitions, furniture, lighting, and modern finishes.',
      image: '/office_furniture_project.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 4000); // Auto-advance every 4 seconds

    return () => clearInterval(interval);
  }, [projects.length, isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const getVisibleProjects = () => {
    const visibleCount = window.innerWidth < 768 ? 1 : 3;
    const projects_visible = [];
    for (let i = 0; i < visibleCount; i++) {
      projects_visible.push(projects[(currentIndex + i) % projects.length]);
    }
    return projects_visible;
  };

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Projects</h2>
          <div className="w-24 h-1 bg-slate-600 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of interior design and construction projects across Kenya, showcasing our
            expertise in custom furniture, ceiling work, and space transformation.
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getVisibleProjects().map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-slate-300 flex items-center justify-center">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-slate-500 mb-2 font-medium">{project.category}</div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{project.title}</h3>
                  <div className="text-sm text-slate-600 mb-3">{project.location}</div>
                  <p className="text-slate-600 leading-relaxed text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/3 transform -translate-x-16 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-slate-100 transition-colors z-10"
          >
            <ChevronLeft size={24} className="text-slate-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/3 transform translate-x-16 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-slate-100 transition-colors z-10"
          >
            <ChevronRight size={24} className="text-slate-700" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-slate-700 w-8' : 'bg-slate-300 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;