import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: 'Modern Kitchen Construction',
      category: 'Kitchen Renovation',
      location: 'Karen, Nairobi',
      description: 'Complete kitchen renovation with modern appliances, custom cabinetry, and granite countertops.',
      image: '/kitchen_construction.jpg'
    },
    {
      title: 'Professional Roofing Services',
      category: 'Roofing Work',
      location: 'Kiambu, Kenya',
      description: 'Quality roofing installation using durable materials, ensuring weather protection and longevity.',
      image: '/roofing_work.jpg'
    },
    {
      title: 'Foundation & Structural Work',
      category: 'Foundation Construction',
      location: 'Westlands, Nairobi',
      description: 'Solid foundation construction ensuring structural integrity and long-lasting home stability.',
      image: '/foundation_work.jpg'
    },
    {
      title: 'Interior Finishing',
      category: 'Interior Work',
      location: 'Diani, Mombasa',
      description: 'Complete interior finishing including flooring, ceiling work, and custom built-in furniture.',
      image: '/interior_work.jpg'
    },
    {
      title: 'Professional Painting',
      category: 'Painting Services',
      location: 'Nakuru, Kenya',
      description: 'Expert painting services for both interior and exterior, using high-quality paints and finishes.',
      image: '/painting_work.jpg'
    },
    {
      title: 'Complete Home Construction',
      category: 'Full Construction',
      location: 'Nyeri, Kenya',
      description: 'End-to-end home construction from foundation to finishing, delivering your dream home.',
      image: '/home_construction.jpg'
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
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Homes</h2>
          <div className="w-24 h-1 bg-slate-600 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of beautifully crafted homes across Kenya, showcasing our
            expertise in residential construction and design excellence.
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