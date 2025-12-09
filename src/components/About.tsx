import { Target, Eye, Lightbulb } from 'lucide-react';

function About() {
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
            For over seven years, we've been delivering premium interior design and turnkey fit-out solutions across Kenya, transforming visions into functional, elegant spaces that inspire, elevate, and stand the test of time.
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Our Story */}
          <div className="card-elegant text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                <Lightbulb size={28} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-800 mb-4">Our Story</h3>
            <p className="text-slate-600 leading-relaxed">
              Clause Interior Fits began with a simple belief: every space has the potential to be extraordinary. Founded in 2017, we've grown from a small team with big dreams to Kenya's trusted partner in interior transformation. Our journey spans across Western Kenya and beyond, where we've had the privilege of transforming homes, offices, and commercial spaces.
            </p>
          </div>

          {/* Mission */}
          <div className="card-elegant text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                <Target size={28} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-800 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To provide consistent, quality interior design services while maintaining safe practices and ensuring every client feels satisfied with the final result.
            </p>
          </div>

          {/* Vision */}
          <div className="card-elegant text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center">
                <Eye size={28} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-800 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To become Kenya's most dependable interior solutions provider by delivering innovative designs, exceptional craftsmanship, and reliable service that consistently exceeds client expectations. We aspire to create functional, beautiful spaces that inspire confidence, enhance everyday living, and set new standards of quality across the industry.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;