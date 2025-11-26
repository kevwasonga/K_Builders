import { Award, Users, Clock, Target, Eye, Lightbulb, ArrowRight } from 'lucide-react';
import { useState } from 'react';

function About() {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'Our Story', icon: Lightbulb },
    { id: 'mission', label: 'Mission', icon: Target },
    { id: 'vision', label: 'Vision', icon: Eye }
  ];

  const achievements = [
    { number: '7+', label: 'Years of Excellence', icon: Award },
    { number: '500+', label: 'Projects Completed', icon: Users },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];



  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-yellow-400 rotate-45 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 text-sm font-bold rounded-full mb-6">
            About Clause Interior Fits
          </div>
          <h2 className="text-5xl font-display font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            Crafting Exceptional Spaces
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            For over seven years, we've been transforming visions into reality, creating spaces that inspire and endure.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Interactive Tabs */}
          <div>
            {/* Tab Navigation */}
            <div className="flex space-x-2 mb-8">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 shadow-lg'
                        : 'bg-white text-slate-600 hover:bg-slate-50 shadow-sm'
                    }`}
                  >
                    <IconComponent size={20} className="mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              {activeTab === 'story' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-display font-bold text-slate-800 mb-4">Our Journey</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Clause Interior Fits began with a simple belief: every space has the potential to be extraordinary. 
                    Founded in 2017, we've grown from a small team with big dreams to Kenya's trusted partner in 
                    interior transformation.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Our journey spans across Western Kenya and beyond, where we've had the privilege of transforming 
                    homes, offices, and commercial spaces. Each project teaches us something new, and every client 
                    becomes part of our extended family.
                  </p>
                  <div className="flex items-center text-yellow-600 font-semibold">
                    <span>Discover our projects</span>
                    <ArrowRight size={20} className="ml-2" />
                  </div>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-display font-bold text-slate-800 mb-4">Our Mission</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To provide consistent, quality interior and exterior services while maintaining safe practices 
                    and ensuring every client feels satisfied with the final result. We believe in transparency, 
                    craftsmanship, and building lasting relationships.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl">
                      <h4 className="font-bold text-slate-800 mb-2">Quality First</h4>
                      <p className="text-sm text-slate-600">Premium materials and expert craftsmanship</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                      <h4 className="font-bold text-slate-800 mb-2">Client Focused</h4>
                      <p className="text-sm text-slate-600">Your vision is our priority</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-display font-bold text-slate-800 mb-4">Our Vision</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To become Kenya's most trusted and dependable provider of interior and exterior solutions, 
                    known for innovative designs, quality work, and reliable service that exceeds expectations.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    We envision a future where every space we touch becomes a testament to exceptional design 
                    and functionality, inspiring others and setting new standards in the industry.
                  </p>
                  <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl text-white">
                    <h4 className="font-bold mb-2">Looking Ahead</h4>
                    <p className="text-slate-200 text-sm">Expanding across East Africa while maintaining our commitment to excellence</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Image Gallery */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="assets/kitchen_cabinets_project.jpg" 
                  alt="Kitchen Project" 
                  className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img 
                  src="assets/office_furniture_project.jpg" 
                  alt="Office Project" 
                  className="w-full h-32 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="assets/gypsum_ceiling_project.jpg" 
                  alt="Ceiling Project" 
                  className="w-full h-32 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img 
                  src="assets/marble_work_project.jpg" 
                  alt="Marble Project" 
                  className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
              500+ Projects
            </div>
          </div>
        </div>



        {/* Achievements Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={32} className="text-slate-900" />
                  </div>
                  <div className="text-4xl font-display font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-slate-600 font-medium">{achievement.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;