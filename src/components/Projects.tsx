import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Grid, List, MapPin } from 'lucide-react';
import TestimonialsSlider from './TestimonialsSlider';
import tvNiche1 from '../images/tv_niches/tv1.jpeg';
import tvNiche2 from '../images/tv_niches/tv2.jpeg';
import tvNiche3 from '../images/tv_niches/tv3.jpeg';
import kitchen1 from '../images/kitchen_cabinets/kitchen1.jpeg';
import kitchen2 from '../images/kitchen_cabinets/kitchen2.jpeg';
import kitchen3 from '../images/kitchen_cabinets/kitchen3.jpeg';
import kitchen4 from '../images/kitchen_cabinets/kitchen4.jpeg';
import kitchen5 from '../images/kitchen_cabinets/kitchen5.jpeg';
import kitchen6 from '../images/kitchen_cabinets/kitchen6.jpeg';
import wardrobe1 from '../images/wardrobes/wardrobe1.jpeg';
import wardrobe2 from '../images/wardrobes/wardrob2.jpeg';
import wardrobe3 from '../images/wardrobes/wardrobe3.jpeg';
import wardrobe4 from '../images/wardrobes/wardrobe4.jpeg';
import steel1 from '../images/stainless_steel/steel1.jpeg';
import steel2 from '../images/stainless_steel/steel2.jpeg';
import steel3 from '../images/stainless_steel/steel3.jpeg';
import steel4 from '../images/stainless_steel/steel4.jpeg';
import steel5 from '../images/stainless_steel/steel5.jpeg';
import office1 from '../images/office_partitions/office1.jpeg';
import office2 from '../images/office_partitions/office2.jpeg';
import office3 from '../images/office_partitions/office3.jpeg';
import office4 from '../images/office_partitions/office4.jpeg';
import aluminium1 from '../images/aluminium_glass/aluminiumworks.jpeg';
import aluminium2 from '../images/aluminium_glass/aluminiumworks2.jpeg';
import aluminium3 from '../images/aluminium_glass/aluminiumworks3.jpeg';
import ceiling1 from '../images/ceiling_systems/acousticceiling1.jpeg';
import ceiling2 from '../images/ceiling_systems/acousticceiling2.jpeg';
import ceiling3 from '../images/ceiling_systems/gypsum_ceiling_project.jpg';
import marble1 from '../images/marble_work/marble1.jpeg';
import marble2 from '../images/marble_work/marble2.jpeg';
import marble3 from '../images/marble_work/marblework.jpeg';
import marble4 from '../images/marble_work/kitchen_marble_work.jpg';

function Projects() {
  const projects = [
    {
      title: 'Modern TV Niche & Wall Features',
      category: 'Modern TV Niche & Wall Features',
      location: 'Karen, Nairobi',
      description: 'Custom TV Niches & Backdrop Panels • Modern Floating TV Units • Media Walls with LED & Hidden Wiring • Textured & Slatted TV Accent Walls',
      image: tvNiche1
    },
    {
      title: 'TV Wall Mount & Media Center',
      category: 'Modern TV Niche & Wall Features',
      location: 'Westlands, Nairobi',
      description: 'Professional TV mounting with cable management and custom media wall designs',
      image: tvNiche2
    },
    {
      title: 'Entertainment Wall Design',
      category: 'Modern TV Niche & Wall Features',
      location: 'Nakuru, Kenya',
      description: 'Complete entertainment wall solutions with integrated lighting and storage',
      image: tvNiche3
    },
    {
      title: 'Premium Kitchen Cabinets',
      category: 'Premium Kitchen Cabinets',
      location: 'Westlands, Nairobi',
      description: 'Luxury Kitchen Cabinetry • Soft-Close Modular Cabinets • Water & Heat-Resistant Kitchen Boards • Custom Kitchen Island Designs • Smart Kitchen Storage Integration',
      image: kitchen1
    },
    {
      title: 'Modern Kitchen Design',
      category: 'Premium Kitchen Cabinets',
      location: 'Karen, Nairobi',
      description: 'Contemporary kitchen layouts with premium finishes and smart storage solutions',
      image: kitchen2
    },
    {
      title: 'Kitchen Island & Countertops',
      category: 'Premium Kitchen Cabinets',
      location: 'Kiambu, Kenya',
      description: 'Custom kitchen islands with marble countertops and integrated appliances',
      image: kitchen3
    },
    {
      title: 'Luxury Kitchen Renovation',
      category: 'Premium Kitchen Cabinets',
      location: 'Thika, Kenya',
      description: 'Complete kitchen makeover with high-end cabinetry and modern appliances',
      image: kitchen4
    },
    {
      title: 'Kitchen Storage Solutions',
      category: 'Premium Kitchen Cabinets',
      location: 'Eldoret, Kenya',
      description: 'Maximized storage with pull-out drawers and corner cabinet solutions',
      image: kitchen5
    },
    {
      title: 'Contemporary Kitchen Setup',
      category: 'Premium Kitchen Cabinets',
      location: 'Mombasa, Kenya',
      description: 'Sleek modern kitchen with handleless cabinets and integrated lighting',
      image: kitchen6
    },
    {
      title: 'Wardrobes & Closet Systems',
      category: 'Wardrobes & Closet Systems',
      location: 'Nakuru, Kenya',
      description: 'Built-in Wardrobes • Walk-in Closet Designs • Sliding & Hinge Wardrobe Systems • Mirror-Finish Wardrobe Panels • Wardrobes with Integrated Lighting',
      image: wardrobe1
    },
    {
      title: 'Walk-in Closet Design',
      category: 'Wardrobes & Closet Systems',
      location: 'Karen, Nairobi',
      description: 'Spacious walk-in closets with custom shelving and mirror installations',
      image: wardrobe2
    },
    {
      title: 'Sliding Door Wardrobes',
      category: 'Wardrobes & Closet Systems',
      location: 'Westlands, Nairobi',
      description: 'Space-saving sliding door wardrobes with mirror panels and LED lighting',
      image: wardrobe3
    },
    {
      title: 'Built-in Bedroom Storage',
      category: 'Wardrobes & Closet Systems',
      location: 'CBD, Nairobi',
      description: 'Custom built-in wardrobes maximizing bedroom space with elegant finishes',
      image: wardrobe4
    },
    {
      title: 'Storage & Smart Interior Cabinetry',
      category: 'Storage & Smart Interior Cabinetry',
      location: 'CBD, Nairobi',
      description: 'Overhead & Concealed Storage Units • Hallway & Lobby Storage Cabinets • Multi-Purpose Wall Storage • Bathroom Vanity & Organizer Storage • Custom Shelving & Display Storage',
      image: kitchen2
    },
    {
      title: 'Stainless Steel & Metal Works',
      category: 'Stainless Steel & Metal Works',
      location: 'Mombasa, Kenya',
      description: 'Stainless Steel Railings & Handles • Metal Brackets, Frames & Holders • Decorative Metal Screens • Stainless Steel Counter Enhancements',
      image: steel1
    },
    {
      title: 'Metal Railings & Balustrades',
      category: 'Stainless Steel & Metal Works',
      location: 'Nairobi, Kenya',
      description: 'Custom stainless steel railings for staircases and balconies with modern designs',
      image: steel2
    },
    {
      title: 'Decorative Metal Screens',
      category: 'Stainless Steel & Metal Works',
      location: 'Kisumu, Kenya',
      description: 'Artistic metal screens and partitions for interior and exterior applications',
      image: steel3
    },
    {
      title: 'Steel Fabrication Works',
      category: 'Stainless Steel & Metal Works',
      location: 'Nakuru, Kenya',
      description: 'Custom steel fabrication for gates, frames, and structural elements',
      image: steel4
    },
    {
      title: 'Metal Finishing & Polish',
      category: 'Stainless Steel & Metal Works',
      location: 'Eldoret, Kenya',
      description: 'Professional metal finishing services with mirror and brushed finishes',
      image: steel5
    },
    {
      title: 'Office Partitions & Workstations',
      category: 'Office Partitions & Workstations',
      location: 'Kisumu, Kenya',
      description: 'Glass & Drywall Office Partitions • Office Cubicles & Custom Workstations • Boardroom Enclosures & Dividers',
      image: office1
    },
    {
      title: 'Modern Office Layout',
      category: 'Office Partitions & Workstations',
      location: 'Nairobi, Kenya',
      description: 'Open office designs with flexible workstation configurations and meeting areas',
      image: office2
    },
    {
      title: 'Executive Office Design',
      category: 'Office Partitions & Workstations',
      location: 'Mombasa, Kenya',
      description: 'Premium executive office setups with custom furniture and glass partitions',
      image: office3
    },
    {
      title: 'Conference Room Setup',
      category: 'Office Partitions & Workstations',
      location: 'Nakuru, Kenya',
      description: 'Professional conference rooms with acoustic panels and modern furniture',
      image: office4
    },
    {
      title: 'Aluminium & Glass Works',
      category: 'Aluminium & Glass Works',
      location: 'Eldoret, Kenya',
      description: 'Aluminium Doors & Windows • Frameless Shower Cubicles • Folding & Sliding Door Installation',
      image: aluminium1
    },
    {
      title: 'Aluminium Window Systems',
      category: 'Aluminium & Glass Works',
      location: 'Nairobi, Kenya',
      description: 'Energy-efficient aluminium windows with double glazing and modern hardware',
      image: aluminium2
    },
    {
      title: 'Glass Door Installation',
      category: 'Aluminium & Glass Works',
      location: 'Karen, Kenya',
      description: 'Frameless glass doors and sliding systems for modern architectural designs',
      image: aluminium3
    },
    {
      title: 'Ceiling Systems',
      category: 'Ceiling Systems',
      location: 'Thika, Kenya',
      description: 'Gypsum Ceiling Designs • Acoustic Ceiling Panels • Decorative Drop Ceiling Installations',
      image: ceiling1
    },
    {
      title: 'Acoustic Ceiling Solutions',
      category: 'Ceiling Systems',
      location: 'CBD, Nairobi',
      description: 'Professional acoustic ceiling installations for offices and commercial spaces',
      image: ceiling2
    },
    {
      title: 'Gypsum Ceiling Design',
      category: 'Ceiling Systems',
      location: 'Westlands, Nairobi',
      description: 'Custom gypsum ceiling designs with integrated lighting and modern patterns',
      image: ceiling3
    },
    {
      title: 'Marble Work & Stone Installations',
      category: 'Marble Work & Stone',
      location: 'Karen, Nairobi',
      description: 'Premium marble countertops • Natural stone flooring • Marble wall cladding • Custom stone work',
      image: marble1
    },
    {
      title: 'Marble Countertops & Surfaces',
      category: 'Marble Work & Stone',
      location: 'Westlands, Nairobi',
      description: 'Luxury marble surfaces for kitchens and bathrooms with professional installation',
      image: marble2
    },
    {
      title: 'Stone Cladding & Features',
      category: 'Marble Work & Stone',
      location: 'Nakuru, Kenya',
      description: 'Decorative stone work and marble feature walls for elegant interior designs',
      image: marble3
    },
    {
      title: 'Kitchen Marble Installation',
      category: 'Marble Work & Stone',
      location: 'Kiambu, Kenya',
      description: 'Professional kitchen marble work with seamless joints and polished finishes',
      image: marble4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  const categories = ['All', 'Modern TV Niche & Wall Features', 'Premium Kitchen Cabinets', 'Wardrobes & Closet Systems', 'Storage & Smart Interior Cabinetry', 'Stainless Steel & Metal Works', 'Office Partitions & Workstations', 'Aluminium & Glass Works', 'Ceiling Systems', 'Marble Work & Stone'];

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
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
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
            From concept to completion, we deliver exceptional interior and exterior solutions 
            that transform spaces and exceed expectations.
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

        {/* Testimonials Section */}
        <TestimonialsSlider />
      </div>
    </section>
  );
}

export default Projects;