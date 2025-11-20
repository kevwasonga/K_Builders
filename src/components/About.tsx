function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-slate-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To build exceptional homes that enhance the quality of life for families across Kenya.
              We are committed to excellence, sustainability, and innovation in every home we construct,
              creating spaces where memories are made and dreams come true.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be Kenya's most trusted home building company, recognized for our unwavering commitment
              to quality, safety, and environmental stewardship. We envision communities filled with
              beautiful, sustainable homes that stand as lasting testaments to superior craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;