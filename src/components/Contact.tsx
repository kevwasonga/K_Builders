import { Phone, Mail, MapPin } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-slate-600 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your space? Contact us today for a consultation and let's bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={28} className="text-slate-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Phone</h3>
            <p className="text-slate-600">+254 700 123 456</p>
            <p className="text-slate-600">+254 720 987 654</p>
          </div>

          <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={28} className="text-slate-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Email</h3>
            <p className="text-slate-600">info@buildkenya.co.ke</p>
            <p className="text-slate-600">projects@buildkenya.co.ke</p>
          </div>

          <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={28} className="text-slate-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Office</h3>
            <p className="text-slate-600">Kimathi Street, 5th Floor</p>
            <p className="text-slate-600">Nairobi, Kenya</p>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Send Us a Message</h3>
          <form className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-slate-700 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-slate-700 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-slate-700 mb-2 font-medium">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-500"
                placeholder="Project inquiry"
              />
            </div>
            <div className="mb-6">
              <label className="block text-slate-700 mb-2 font-medium">Message</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-500"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-slate-700 text-white py-3 rounded-lg font-medium hover:bg-slate-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;