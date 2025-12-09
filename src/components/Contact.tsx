import { Phone, Mail, MapPin } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-slate-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your space? Contact us today for a consultation and let's bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={28} className="text-slate-700" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">Phone</h3>
            <p className="text-base sm:text-lg text-slate-600">+254 700 123 456</p>
            <p className="text-base sm:text-lg text-slate-600">+254 720 987 654</p>
          </div>

          <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={28} className="text-slate-700" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">Email</h3>
            <p className="text-base sm:text-lg text-slate-600">info@buildkenya.co.ke</p>
            <p className="text-base sm:text-lg text-slate-600">projects@buildkenya.co.ke</p>
          </div>

          <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={28} className="text-slate-700" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">Office</h3>
            <p className="text-base sm:text-lg text-slate-600">Kimathi Street, 5th Floor</p>
            <p className="text-base sm:text-lg text-slate-600">Nairobi, Kenya</p>
          </div>
        </div>


      </div>
    </section>
  );
}

export default Contact;