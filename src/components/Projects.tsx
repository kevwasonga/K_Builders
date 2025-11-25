import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Filter, Grid, List, MapPin, Calendar } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: 'Luxury Kitchen Transformation',
      category: 'Kitchen Design',
      location: 'Karen, Nairobi',
      description: 'Modern kitchen with custom-built cabinets, granite countertops, and stainless steel appliances featuring premium finishes.',
      image: 'kitchen_cabinets_project.jpg'
    },
    {
      title: 'Executive Gypsum Ceiling',
      category: 'Ceiling Work',
      location: 'Westlands, Nairobi',
      description: 'Professional gypsum ceiling installation with modern lighting integration and smooth finishes for corporate office.',
      image: 'gypsum_ceiling_project.jpg'
    },
    {
      title: 'Modern Office Partitions',
      category: 'Commercial Interiors',
      location: 'CBD, Nairobi',
      description: 'Aluminium and glass office partitions creating functional workspace divisions with contemporary design.',
      image: 'office_partition_project.jpg'
    },
    {
      title: 'Premium Wardrobe Solutions',
      category: 'Custom Furniture',
      location: 'Kiambu, Kenya',
      description: 'Built-in wardrobes with optimized storage solutions and modern sliding door systems for master bedroom.',
      image: 'wardrobe_project.jpg'
    },
    {
      title: 'Marble Countertop Excellence',
      category: 'Stone Work',
      location: 'Nakuru, Kenya',
      description: 'Premium marble countertops with precision cutting and professional installation for luxury kitchen.',
      image: 'marble_work_project.jpg'
    },
    {
      title: 'Complete Office Makeover',
      category: 'Renovation',
      location: 'Kisumu, Kenya',
      description: 'Full office renovation including partitions, furniture, lighting, and modern finishes for tech startup.',
      image: 'office_furniture_project.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  const categories = ['All', 'Kitchen Design', 'Ceiling Work', 'Commercial Interiors', 'Custom Furniture', 'Stone Work', 'Renovation'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    if (isPaused || viewMode === 'grid') return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredProjects.length, isPaused, viewMode]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const getVisibleProjects = () => {
    if (viewMode === 'grid') return filteredProjects;
    
    const visibleCount = window.innerWidth < 768 ? 1 : 3;
    const projects_visible = [];
    for (let i = 0; i < visibleCount; i++) {
      projects_visible.push(filteredProjects[(currentIndex + i) % filteredProjects.length]);
    }
    return projects_visible;
  };

  return (
    <section id="projects" className="py-20 bg-slate-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 border border-yellow-400 rotate-12 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 text-sm font-bold rounded-full mb-6">
            Our Portfolio
          </div>
          <h2 className="text-5xl font-bold text-slate-800 mb-6">
            Exceptional
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of transformative projects across Kenya, showcasing innovation, 
            craftsmanship, and attention to detail.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-4 md:space-y-0">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2 bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
            <button
              onClick={() => setViewMode('carousel')}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === 'carousel' 
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900' 
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              <List size={20} />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === 'grid' 
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900' 
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              <Grid size={20} />
            </button>
          </div>
        </div>

        {/* Projects Display */}
        {viewMode === 'grid' ? (
          /* Grid View */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-slate-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-600"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-yellow-400 font-medium">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-slate-400 text-sm mb-3">
                    <MapPin size={16} className="mr-1" />
                    {project.location}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <button className="w-full bg-gradient-to-r from-slate-700 to-slate-600 text-white py-2 rounded-xl font-medium hover:from-yellow-400 hover:to-orange-500 hover:text-slate-900 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Carousel View */
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {getVisibleProjects().map((project, index) => (
                <div key={index} className="bg-slate-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-slate-600">
                  <div className="h-48 relative">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-yellow-400 mb-2 font-medium">{project.category}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                    <div className="text-sm text-slate-400 mb-3">{project.location}</div>
                    <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-x-16 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 rounded-full flex items-center justify-center hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-2xl"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform translate-x-16 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 rounded-full flex items-center justify-center hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-2xl"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}

        {/* Pagination Dots for Carousel */}
        {viewMode === 'carousel' && (
          <div className="flex justify-center gap-2 mt-12">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 w-8' 
                    : 'bg-slate-600 w-3 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-lg rounded-2xl p-12 border border-slate-500 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">Ready for Your Dream Project?</h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together. Every great space starts with a conversation.
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-8 py-4 rounded-xl text-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;