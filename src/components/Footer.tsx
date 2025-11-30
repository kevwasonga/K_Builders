import { Phone, Mail, MapPin, MessageCircle, Calendar, Video } from 'lucide-react';

function Footer() {
  return (
    <div className="bg-slate-800">
      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-5xl font-display font-bold text-white mb-6">Let's Create Something Amazing</h3>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Choose your preferred way to connect with us. We're here to transform your vision into reality.
          </p>
          
          {/* Contact Methods */}
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone size={28} className="text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">Call Now</h4>
              <p className="text-slate-300 text-sm">Instant Response</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail size={28} className="text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">Email Us</h4>
              <p className="text-slate-300 text-sm">24hr Response</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle size={28} className="text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">Live Chat</h4>
              <p className="text-slate-300 text-sm">Online Now</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Calendar size={28} className="text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">Book Meeting</h4>
              <p className="text-slate-300 text-sm">Schedule Call</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Video size={28} className="text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">Virtual Tour</h4>
              <p className="text-slate-300 text-sm">See Our Work</p>
            </div>
          </div>
          
          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <button className="bg-orange-500 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:bg-orange-600 transition-all transform hover:scale-105">
              Start Virtual Tour
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-2xl text-lg font-medium hover:bg-white/20 transition-all border border-white/20">
              Get Directions →
            </button>
          </div>
        </div>
      </div>
      
      {/* Send Us a Message Section */}
      <div className="py-16 border-t border-slate-700 bg-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-white mb-4">Send Us a Message</h3>
            <p className="text-slate-300">Tell us about your project and we'll get back to you within 24 hours</p>
          </div>
          
          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white mb-2 font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-white mb-2 font-medium">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all"
                placeholder="Your phone"
              />
            </div>
            <div>
              <label className="block text-white mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-white mb-2 font-medium">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all"
                placeholder="Project inquiry"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-white mb-2 font-medium">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-12 py-4 rounded-2xl text-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200/50 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">CLAUSE INTERIOR FITS</h3>
              <p className="text-slate-300 mb-6">Transforming spaces with exceptional interior design and construction.</p>
              <div className="text-slate-400 text-sm">
                <div className="mb-2">7+ Years Experience</div>
                <div className="mb-2">500+ Projects Completed</div>
                <div>24/7 Support Available</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3 text-slate-300">
                <li><a href="#home" className="hover:text-yellow-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-yellow-400 transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-yellow-400 transition-colors">Services</a></li>
                <li><a href="#projects" className="hover:text-yellow-400 transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Services</h4>
              <ul className="space-y-3 text-slate-300">
                <li>Kitchen Cabinets</li>
                <li>Marble Work</li>
                <li>Gypsum Ceilings</li>
                <li>Office Partitions</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Contact Info</h4>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-center">
                  <Phone size={18} className="mr-3 text-yellow-400" />
                  <span>+254 700 123 456</span>
                </div>
                <div className="flex items-center">
                  <Mail size={18} className="mr-3 text-yellow-400" />
                  <span>info@clauseinteriorfits.co.ke</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={18} className="mr-3 text-yellow-400" />
                  <span>Kimathi Street, Nairobi</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 mt-12 text-center text-slate-400">
            <p>&copy; 2025 Clause Interior Fits. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;