import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Grid, List } from 'lucide-react';
import TestimonialsSlider from './TestimonialsSlider';
import ExpandableServiceCard from './ExpandableServiceCard';
import tvNiche1 from '../images/tv_niches/tv1.jpg';
import tvNiche2 from '../images/tv_niches/tv2.png';
import tvNiche3 from '../images/tv_niches/tv3.jpg';
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
import aluminium1 from '../images/aluminium_glass/sliding_glass_door.png';
import aluminium2 from '../images/aluminium_glass/aluminiumworks2.png';
import aluminium3 from '../images/aluminium_glass/aluminiumworks3.jpg';
import ceiling1 from '../images/ceiling_systems/acousticceiling1.jpeg';
import ceiling2 from '../images/ceiling_systems/acousticceiling2.jpeg';
import ceiling3 from '../images/ceiling_systems/gypsum_ceiling_project.jpg';
import ceiling4 from '../images/ceiling_systems/gypsumceiling3.jpeg';
import ceiling5 from '../images/ceiling_systems/gypsumceilings.jpeg';
import ceiling6 from '../images/ceiling_systems/gypsumceilinng2.jpeg';
import ceiling7 from '../images/ceiling_systems/gypsum-ceiling-elegant.jpeg';
import ceiling8 from '../images/ceiling_systems/gypsum-ceiling-systme.jpeg';
import roof1 from '../images/ceiling_systems/pagola-glass-roof-full-view.jpeg';
import roof2 from '../images/ceiling_systems/pagola-glass-roof(bluishglass).jpeg';
import roof3 from '../images/ceiling_systems/pagola-glass-roof-installation-procedue.jpeg';
import marble1 from '../images/marble_work/marble1.jpeg';
import marble2 from '../images/marble_work/marble2.jpeg';
import marble3 from '../images/marble_work/marblework.jpeg';
import marble4 from '../images/marble_work/kitchen_marble_work.jpg';
import glass1 from '../images/glasswork/all-glass-cubicleshower.jpeg';
import glass2 from '../images/glasswork/frameless-glass-door1(clear-glass).jpeg';
import glass3 from '../images/glasswork/glasswork_curtain-walling1.jpeg';
import glass4 from '../images/glasswork/pagola-glass-roof-full-view.jpeg';
import wardrobe5 from '../images/wardrobes/mirror-attached-sliding-wardrobe.jpeg';
import wardrobe6 from '../images/wardrobes/modern-spaciou-sliding-wardrobe.jpeg';
import wardrobe7 from '../images/wardrobes/walk-in-closet.jpeg';
import wardrobe8 from '../images/wardrobes/sliding-wardrobe-with-mirror.jpeg';
import wardrobe9 from '../images/wardrobes/multi-sectioned-sliding-wardrobe.jpeg';
import wardrobe10 from '../images/wardrobes/wall-embedded-wardrobe.jpeg';
import wardrobe11 from '../images/wardrobes/walkin-closet-wardrobe.jpeg';
import wardrobe12 from '../images/wardrobes/modern-spaciours-closet-wardrobe.jpeg';
import office5 from '../images/office_partitions/elegant-glassandaluminium-office-partitioning.jpeg';
import aluminium4 from '../images/aluminium_glass/aluminiumandglass-sliding-window-view-from-inhouse.jpeg';
import aluminium5 from '../images/aluminium_glass/aluminiumandglassdoorfor-cubicle-shower.png';

import glass6 from '../images/glasswork/frameless-glassdoor2.png';
import glass7 from '../images/glasswork/glasswork_curtainwalling2.jpeg';
import glass8 from '../images/glasswork/glasswork_modern_windowpane.jpeg';
import glass9 from '../images/glasswork/glass-partitioned-bathroom-space.jpeg';
import glass10 from '../images/glasswork/tinted_glass_shower.jpg';
import glass11 from '../images/glasswork/glasswork_sliding_window1.jpeg';

import glass13 from '../images/glasswork/frameless-glassdoor2.png';
import glass14 from '../images/glasswork/all-glass-cubicleshower2.jpeg';
import glass15 from '../images/glasswork/aluminiumandglass-sliding-window-view-from-inhouse.jpeg';

import glass17 from '../images/glasswork/pagola-glass-roof-installation-procedue.jpeg';
import glass18 from '../images/glasswork/pagola-glass-roof(bluishglass).jpeg';
import aluminium6 from '../images/glasswork/elegant-glassandaluminium-office-partitioning.jpeg';
import kitchen7 from '../images/kitchen_cabinets/interior_design_project_kitchen.jpg';
import kitchen8 from '../images/kitchen_cabinets/kitchen_cabinet.jpg';
import makeover1 from '../images/house_makeover/house_makeover.jpeg';
import makeover2 from '../images/house_makeover/house_makeover2.jpeg';
import makeover3 from '../images/house_makeover/house_makover1.jpeg';

function Projects() {
  const projects = [
    {
      title: 'Marble Work & Stone Installations',
      category: 'Marble Work & Stone',
      location: 'Karen, Nairobi',
      description: 'Premium marble countertops, natural stone flooring, wall cladding, and custom stone work',
      image: marble1
    },
    {
      title: 'Modern TV Niche & Wall Features',
      category: 'Modern TV Niche & Wall Features',
      location: 'Karen, Nairobi',
      description: 'Custom TV niches, backdrop panels, floating units, media walls with LED, and textured accent walls',
      image: tvNiche1
    },
    {
      title: 'Office Partitions & Workstations',
      category: 'Office Partitions & Workstations',
      location: 'Kisumu, Kenya',
      description: 'Glass and drywall partitions, office cubicles, custom workstations, and boardroom enclosures',
      image: office1
    },
    {
      title: 'Premium Kitchen Cabinets',
      category: 'Premium Kitchen Cabinets',
      location: 'Westlands, Nairobi',
      description: 'Luxury cabinetry, soft-close modular cabinets, heat-resistant boards, custom islands, and smart storage',
      image: kitchen1
    },
    {
      title: 'Ceiling Systems',
      category: 'Ceiling & Roofing Systems',
      location: 'Thika, Kenya',
      description: 'Gypsum ceiling designs, acoustic panels, and decorative drop ceiling installations',
      image: ceiling1
    },
    {
      title: 'Wardrobes & Closet Systems',
      category: 'Wardrobes & Closet Systems',
      location: 'Nakuru, Kenya',
      description: 'Built-in wardrobes, walk-in closets, sliding systems, mirror-finish panels, and integrated lighting',
      image: wardrobe1
    },
    {
      title: 'Stainless Steel & Metal Works',
      category: 'Stainless Steel & Metal Works',
      location: 'Mombasa, Kenya',
      description: 'Stainless steel railings, handles, metal brackets, frames, decorative screens, and counter enhancements',
      image: steel1
    },
    {
      title: 'Marble Countertops & Surfaces',
      category: 'Marble Work & Stone',
      location: 'Westlands, Nairobi',
      description: 'Luxury marble surfaces for kitchens and bathrooms with professional installation',
      image: marble2
    },

    {
      title: 'Modern Kitchen Design',
      category: 'Premium Kitchen Cabinets',
      location: 'Karen, Nairobi',
      description: 'Contemporary kitchen layouts with premium finishes and smart storage solutions',
      image: kitchen2
    },
    {
      title: 'TV Wall Mount & Media Center',
      category: 'Modern TV Niche & Wall Features',
      location: 'Westlands, Nairobi',
      description: 'Professional TV mounting with cable management and custom media wall designs',
      image: tvNiche2
    },
    {
      title: 'Sliding Wardrobe Design',
      category: 'Wardrobes & Closet Systems',
      location: 'Karen, Nairobi',
      description: 'Modern sliding wardrobes with premium finishes and space-saving design',
      image: wardrobe2
    },
    {
      title: 'Metal Railings & Balustrades',
      category: 'Stainless Steel & Metal Works',
      location: 'Nairobi, Kenya',
      description: 'Custom stainless steel railings for staircases and balconies with modern designs',
      image: steel2
    },

    {
      title: 'Acoustic Ceiling Solutions',
      category: 'Ceiling & Roofing Systems',
      location: 'CBD, Nairobi',
      description: 'Professional acoustic ceiling installations for offices and commercial spaces',
      image: ceiling2
    },
    {
      title: 'Kitchen Island & Countertops',
      category: 'Premium Kitchen Cabinets',
      location: 'Kiambu, Kenya',
      description: 'Custom kitchen islands with marble countertops and integrated appliances',
      image: kitchen3
    },
    {
      title: 'Modern Office Layout',
      category: 'Office Partitions & Workstations',
      location: 'Nairobi, Kenya',
      description: 'Open office designs with flexible workstation configurations and meeting areas',
      image: office2
    },
    {
      title: 'Stone Cladding & Features',
      category: 'Marble Work & Stone',
      location: 'Nakuru, Kenya',
      description: 'Decorative stone work and marble feature walls for elegant interior designs',
      image: marble3
    },
    {
      title: 'Entertainment Wall Design',
      category: 'Modern TV Niche & Wall Features',
      location: 'Nakuru, Kenya',
      description: 'Complete entertainment wall solutions with integrated lighting and storage',
      image: tvNiche3
    },


    {
      title: 'Luxury Kitchen Renovation',
      category: 'Premium Kitchen Cabinets',
      location: 'Thika, Kenya',
      description: 'Complete kitchen makeover with high-end cabinetry and modern appliances',
      image: kitchen4
    },
    {
      title: 'Decorative Metal Screens',
      category: 'Stainless Steel & Metal Works',
      location: 'Kisumu, Kenya',
      description: 'Artistic metal screens and partitions for interior and exterior applications',
      image: steel3
    },
    {
      title: 'Executive Office Design',
      category: 'Office Partitions & Workstations',
      location: 'Mombasa, Kenya',
      description: 'Premium executive office setups with custom furniture and glass partitions',
      image: office3
    },
    {
      title: 'Gypsum Ceiling Design',
      category: 'Ceiling & Roofing Systems',
      location: 'Westlands, Nairobi',
      description: 'Custom gypsum ceiling designs with integrated lighting and modern patterns',
      image: ceiling3
    },
    {
      title: 'Kitchen Storage Solutions',
      category: 'Premium Kitchen Cabinets',
      location: 'Eldoret, Kenya',
      description: 'Maximized storage with pull-out drawers and corner cabinet solutions',
      image: kitchen5
    },
    {
      title: 'Built-in Bedroom Storage',
      category: 'Wardrobes & Closet Systems',
      location: 'CBD, Nairobi',
      description: 'Custom built-in wardrobes maximizing bedroom space with elegant finishes',
      image: wardrobe4
    },
    {
      title: 'Steel Fabrication Works',
      category: 'Stainless Steel & Metal Works',
      location: 'Nakuru, Kenya',
      description: 'Custom steel fabrication for gates, frames, and structural elements',
      image: steel4
    },
    {
      title: 'Sliding Glass Door',
      category: 'Aluminium Works',
      location: 'Karen, Kenya',
      description: 'Frameless glass doors and sliding systems for modern architectural designs',
      image: aluminium3
    },
    {
      title: 'Open Staff Space Design and Partition',
      category: 'Office Partitions & Workstations',
      location: 'Nakuru, Kenya',
      description: 'Open staff space design with modern partitioning systems and collaborative work areas',
      image: office4
    },
    {
      title: 'Contemporary Kitchen Setup',
      category: 'Premium Kitchen Cabinets',
      location: 'Mombasa, Kenya',
      description: 'Sleek modern kitchen with handleless cabinets and integrated lighting',
      image: kitchen6
    },
    {
      title: 'Metal Finishing & Polish',
      category: 'Stainless Steel & Metal Works',
      location: 'Eldoret, Kenya',
      description: 'Professional metal finishing services with mirror and brushed finishes',
      image: steel5
    },
    {
      title: 'Kitchen Marble Installation',
      category: 'Marble Work & Stone',
      location: 'Kiambu, Kenya',
      description: 'Professional kitchen marble work with seamless joints and polished finishes',
      image: marble4
    },
    {
      title: 'Modern Gypsum Ceiling Design',
      category: 'Ceiling & Roofing Systems',
      location: 'Karen, Nairobi',
      description: 'Contemporary gypsum ceiling installations with LED strip lighting integration',
      image: ceiling4
    },
    {
      title: 'Decorative Ceiling Features',
      category: 'Ceiling & Roofing Systems',
      location: 'Mombasa, Kenya',
      description: 'Artistic gypsum ceiling designs with geometric patterns and ambient lighting',
      image: ceiling5
    },
    {
      title: 'Commercial Ceiling Solutions',
      category: 'Ceiling & Roofing Systems',
      location: 'Eldoret, Kenya',
      description: 'Professional gypsum ceiling systems for offices and commercial spaces',
      image: ceiling6
    },
    {
      title: 'Elegant Gypsum Ceiling',
      category: 'Ceiling & Roofing Systems',
      location: 'Kisumu, Kenya',
      description: 'Sophisticated gypsum ceiling designs with premium finishing and lighting',
      image: ceiling7
    },
    {
      title: 'Advanced Ceiling Systems',
      category: 'Ceiling & Roofing Systems',
      location: 'Machakos, Kenya',
      description: 'State-of-the-art gypsum ceiling installations for modern interiors',
      image: ceiling8
    },
    {
      title: 'Swing Door Cubicle Shower',
      category: 'Glasswork',
      location: 'Karen, Nairobi',
      description: 'Premium swing door cubicle showers with tempered safety glass for modern bathrooms',
      image: glass1
    },


    {
      title: 'Glass Roof Installations',
      category: 'Glasswork',
      location: 'Nakuru, Kenya',
      description: 'Pagola glass roof systems for outdoor spaces and natural lighting',
      image: glass4
    },
    {
      title: 'Mirror Sliding Wardrobes',
      category: 'Wardrobes & Closet Systems',
      location: 'Mombasa, Kenya',
      description: 'Elegant sliding wardrobes with full-length mirror panels',
      image: wardrobe5
    },
    {
      title: 'Spacious Modern Wardrobes',
      category: 'Wardrobes & Closet Systems',
      location: 'Eldoret, Kenya',
      description: 'Large capacity wardrobes with modern sliding door systems',
      image: wardrobe6
    },
    {
      title: 'Luxury Walk-in Closets',
      category: 'Wardrobes & Closet Systems',
      location: 'Kiambu, Kenya',
      description: 'Premium walk-in closet designs with custom organization systems',
      image: wardrobe7
    },
    {
      title: 'Glass Office Partitioning',
      category: 'Office Partitions & Workstations',
      location: 'Nairobi, Kenya',
      description: 'Elegant glass and aluminium office partition systems for modern workspaces',
      image: office5
    },
    {
      title: 'Sliding Window Systems',
      category: 'Aluminium Works',
      location: 'Karen, Kenya',
      description: 'Premium aluminium and glass sliding window installations with interior views',
      image: aluminium4
    },
    {
      title: 'Glass Roof Systems',
      category: 'Ceiling & Roofing Systems',
      location: 'Karen, Nairobi',
      description: 'Premium glass roofing systems for patios, pergolas, and outdoor spaces with natural lighting',
      image: roof1
    },
    {
      title: 'Tinted Glass Roofing',
      category: 'Ceiling & Roofing Systems',
      location: 'Westlands, Nairobi',
      description: 'Stylish tinted glass roof installations for UV protection and aesthetic appeal',
      image: roof2
    },
    {
      title: 'Glass Roof Installation',
      category: 'Ceiling & Roofing Systems',
      location: 'Nakuru, Kenya',
      description: 'Professional glass roof installation process with structural support systems',
      image: roof3
    },
    {
      title: 'Mirror Sliding Wardrobes Premium',
      category: 'Wardrobes & Closet Systems',
      location: 'Kisumu, Kenya',
      description: 'Premium sliding wardrobes with full mirror panels and soft-close mechanisms',
      image: wardrobe8
    },
    {
      title: 'Multi-Section Wardrobes',
      category: 'Wardrobes & Closet Systems',
      location: 'Machakos, Kenya',
      description: 'Large multi-sectioned sliding wardrobes for maximum storage capacity',
      image: wardrobe9
    },
    {
      title: 'Wall Embedded Wardrobes',
      category: 'Wardrobes & Closet Systems',
      location: 'Thika, Kenya',
      description: 'Space-efficient wall-embedded wardrobe systems with seamless integration',
      image: wardrobe10
    },
    {
      title: 'Walk-in Closet Premium',
      category: 'Wardrobes & Closet Systems',
      location: 'Karen, Nairobi',
      description: 'Luxury walk-in closet with custom organization and premium lighting',
      image: wardrobe11
    },
    {
      title: 'Spacious Closet Systems',
      category: 'Wardrobes & Closet Systems',
      location: 'Nakuru, Kenya',
      description: 'Large capacity closet systems with modern design and functionality',
      image: wardrobe12
    },
    {
      title: 'Frameless Glass Cubicle Shower',
      category: 'Glasswork',
      location: 'Mombasa, Kenya',
      description: 'Premium frameless glass cubicle shower installations for modern bathrooms',
      image: aluminium5
    },

    {
      title: 'Frameless Glass Door Systems',
      category: 'Glasswork',
      location: 'Kiambu, Kenya',
      description: 'Advanced frameless glass door systems for seamless architectural integration',
      image: glass6
    },
    {
      title: 'Glass Curtain Wall Systems',
      category: 'Glasswork',
      location: 'Nairobi, Kenya',
      description: 'Commercial grade glass curtain wall installations for office buildings',
      image: glass7
    },


    {
      title: 'Complete House Makeover',
      category: 'House Makeover',
      location: 'Karen, Nairobi',
      description: 'Full home renovation and makeover with modern interior design solutions',
      image: makeover1
    },
    {
      title: 'Home Renovation Project',
      category: 'House Makeover',
      location: 'Kiambu, Kenya',
      description: 'Comprehensive home renovation with updated fixtures and modern styling',
      image: makeover2
    },
    {
      title: 'Interior Transformation',
      category: 'House Makeover',
      location: 'Nakuru, Kenya',
      description: 'Complete interior transformation with contemporary design elements',
      image: makeover3
    },
    {
      title: 'Tinted Glass Shower Cubicles',
      category: 'Glasswork',
      location: 'Mombasa, Kenya',
      description: 'Stylish tinted glass shower cubicles for privacy and modern aesthetics',
      image: glass10
    },

    {
      title: 'Aluminium Office Partitions',
      category: 'Aluminium Works',
      location: 'CBD, Nairobi',
      description: 'Professional aluminium and glass office partition systems for corporate environments',
      image: aluminium6
    },

    {
      title: 'Frameless Glass Door Premium',
      category: 'Glasswork',
      location: 'Karen, Nairobi',
      description: 'Premium frameless glass door installations with seamless integration',
      image: glass13
    },
    {
      title: 'All-Glass Shower Cubicle Deluxe',
      category: 'Glasswork',
      location: 'Nakuru, Kenya',
      description: 'Deluxe all-glass shower cubicle systems with premium hardware',
      image: glass14
    },
    {
      title: 'Sliding Window Glass Systems',
      category: 'Glasswork',
      location: 'Eldoret, Kenya',
      description: 'Premium sliding window glass installations with interior view optimization',
      image: glass15
    },

    {
      title: 'Glass Roof Installation Process',
      category: 'Glasswork',
      location: 'Machakos, Kenya',
      description: 'Complete glass roof installation process with structural engineering',
      image: glass17
    },
    {
      title: 'Tinted Glass Roof Systems',
      category: 'Glasswork',
      location: 'Thika, Kenya',
      description: 'Stylish tinted glass roof systems for outdoor spaces and patios',
      image: glass18
    },
    {
      title: 'Designer Kitchen Interiors',
      category: 'Premium Kitchen Cabinets',
      location: 'Karen, Nairobi',
      description: 'Designer kitchen interior projects with premium finishes and modern appliances',
      image: kitchen7
    },
    {
      title: 'Custom Kitchen Cabinet Solutions',
      category: 'Premium Kitchen Cabinets',
      location: 'CBD, Nairobi',
      description: 'Custom kitchen cabinet solutions with optimized storage and elegant design',
      image: kitchen8
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  const categories = ['All', 'Marble Work & Stone', 'Modern TV Niche & Wall Features', 'Premium Kitchen Cabinets', 'Wardrobes & Closet Systems', 'Stainless Steel & Metal Works', 'Office Partitions & Workstations', 'Aluminium Works', 'Ceiling & Roofing Systems', 'Glasswork', 'House Makeover'];

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const getCardCount = () => {
    if (typeof window === 'undefined') return 9;
    const width = window.innerWidth;
    if (width < 768) return 6;   // xs/sm: 1 col × 6 rows
    if (width < 1024) return 6;  // md: 2 cols × 3 rows
    return 9;                    // lg/xl/2xl: 3 cols × 3 rows (max 3 width)
  };

  const filteredProjects = activeFilter === 'All' 
    ? shuffleArray(projects).slice(0, getCardCount())
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
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 border border-yellow-400 rotate-12 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 text-sm font-bold rounded-full mb-6">
            Our Portfolio
          </div>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 mb-4 sm:mb-6">
            Exceptional
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 xs:w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6 xs:mb-8"></div>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            From concept to completion, Clause Interior Fits delivers exceptional interior fit-out solutions that transform spaces and elevate your environment beyond the ordinary.
          </p>

          {/* Filter Buttons */}
          <div className="mt-6 sm:mt-8 md:mt-12 max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveFilter('All')}
                className={`w-full tablet:w-auto px-2 py-1.5 text-[10px] xs:text-xs tablet:px-3 tablet:py-2 tablet:text-sm md:px-4 md:py-2.5 md:text-base lg:text-lg rounded-lg tablet:rounded-xl font-medium transition-all duration-300 whitespace-nowrap mb-2 tablet:mb-0 ${
                  activeFilter === 'All'
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 shadow-sm'
                }`}
              >
                All
              </button>
            </div>
            <div className="grid grid-cols-2 tablet:flex tablet:flex-wrap justify-center gap-2 mt-2 tablet:mt-2">
              {categories.slice(1).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-2 py-1.5 text-[9px] xs:text-[10px] tablet:px-3 tablet:py-2 tablet:text-sm md:px-4 md:py-2.5 md:text-base lg:text-lg rounded-lg tablet:rounded-xl font-medium transition-all duration-300 whitespace-nowrap overflow-hidden text-ellipsis ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 shadow-lg'
                      : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 shadow-sm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-center mt-4 sm:mt-5 md:mt-6">
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
        </div>

        {/* Projects Display */}
        <div className="mb-6 sm:mb-8 md:mb-12"></div>
        {viewMode === 'grid' ? (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <ExpandableServiceCard
                key={index}
                title={project.title}
                category={project.category}
                location={project.location}
                description={project.description}
                image={project.image}
                fullDescription={project.description}
              />
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
                    <div className="text-xs xs:text-sm md:text-base text-yellow-400 mb-2 font-medium">{project.category}</div>
                    <h3 className="text-base xs:text-lg md:text-xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="text-xs xs:text-sm md:text-base text-slate-400 mb-3">{project.location}</div>
                    <p className="text-slate-300 text-xs xs:text-sm md:text-base leading-relaxed">{project.description}</p>
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

        {/* Location Tagline */}
        <div className="text-center mt-16 mb-8">
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent italic font-medium">
            Clause Interior Fits | Kisumu, serving all Kenya
          </p>
        </div>

        {/* Category Navigation Arrows */}
        <div className="flex justify-center items-center gap-4 mt-8 mb-12">
          <button
            onClick={() => {
              const currentIdx = categories.indexOf(activeFilter);
              const prevIdx = (currentIdx - 1 + categories.length) % categories.length;
              setActiveFilter(categories[prevIdx]);
            }}
            className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 rounded-full flex items-center justify-center hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => {
              const currentIdx = categories.indexOf(activeFilter);
              const nextIdx = (currentIdx + 1) % categories.length;
              setActiveFilter(categories[nextIdx]);
            }}
            className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 rounded-full flex items-center justify-center hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Testimonials Section */}
        <TestimonialsSlider />
      </div>
    </section>
  );
}

export default Projects;