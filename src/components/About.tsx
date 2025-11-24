function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-slate-600 mx-auto"></div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-12 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Clause Interior Fits provides reliable interior and exterior solutions across Western Kenya and the country at large. For over seven years, we've offered quality workmanship in interior design, glass installations, stainless steel work, and general exterior improvements.
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            Our team combines practical experience with creative thinking, allowing us to handle each project with care and deliver results that meet our clients' expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              MISSION
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Our mission is to provide consistent, quality interior and exterior services while maintaining safe practices and ensuring every client feels satisfied with the final result.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              VISION
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Our vision is to become a trusted and dependable provider of interior and exterior solutions in Kenya, known for quality work, practical designs, and reliable service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;