import { Phone, Mail, MapPin, Calendar, MessageCircle, Video, Clock, Users, Award } from 'lucide-react';
import { useState } from 'react';

function Contact() {
  const [activeMethod, setActiveMethod] = useState('call');


  const contactMethods = [
    { id: 'call', icon: Phone, label: 'Call Now', subtitle: 'Instant Response', color: 'bg-emerald-500' },
    { id: 'email', icon: Mail, label: 'Email Us', subtitle: '24hr Response', color: 'bg-blue-500' },
    { id: 'chat', icon: MessageCircle, label: 'Live Chat', subtitle: 'Online Now', color: 'bg-purple-500' },
    { id: 'meeting', icon: Calendar, label: 'Book Meeting', subtitle: 'Schedule Call', color: 'bg-orange-500' },
    { id: 'virtual', icon: Video, label: 'Virtual Tour', subtitle: 'See Our Work', color: 'bg-red-500' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Let's Create Something Amazing</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Choose your preferred way to connect with us. We're here to transform your vision into reality.
          </p>
        </div>

        {/* Contact Method Selector */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {contactMethods.map((method) => {
            const IconComponent = method.icon;
            return (
              <button
                key={method.id}
                onClick={() => setActiveMethod(method.id)}
                className={`p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  activeMethod === method.id
                    ? `${method.color} shadow-2xl`
                    : 'bg-slate-800 hover:bg-slate-700'
                }`}
              >
                <IconComponent size={32} className="text-white mx-auto mb-3" />
                <h3 className="text-white font-bold text-sm mb-1">{method.label}</h3>
                <p className="text-slate-300 text-xs">{method.subtitle}</p>
              </button>
            );
          })}
        </div>

        {/* Dynamic Content Based on Selected Method */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            {activeMethod === 'call' && (
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Call Us Directly</h3>
                <div className="space-y-4">
                  <a href="tel:+254700123456" className="flex items-center space-x-4 hover:bg-slate-700/50 p-3 rounded-lg transition-colors">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">+254 700 123 456</p>
                      <p className="text-slate-400 text-sm">Primary Line</p>
                    </div>
                  </a>
                  <a href="tel:+254720987654" className="flex items-center space-x-4 hover:bg-slate-700/50 p-3 rounded-lg transition-colors">
                    <div className="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">+254 720 987 654</p>
                      <p className="text-slate-400 text-sm">Projects Line</p>
                    </div>
                  </a>
                </div>
              </div>
            )}

            {activeMethod === 'email' && (
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Email Contacts</h3>
                <div className="space-y-4">
                  <a href="mailto:info@buildkenya.co.ke" className="flex items-center space-x-4 hover:bg-slate-700/50 p-3 rounded-lg transition-colors">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">info@buildkenya.co.ke</p>
                      <p className="text-slate-400 text-sm">General Inquiries</p>
                    </div>
                  </a>
                  <a href="mailto:projects@buildkenya.co.ke" className="flex items-center space-x-4 hover:bg-slate-700/50 p-3 rounded-lg transition-colors">
                    <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">projects@buildkenya.co.ke</p>
                      <p className="text-slate-400 text-sm">Project Quotes</p>
                    </div>
                  </a>
                </div>
              </div>
            )}

            {activeMethod === 'chat' && (
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Live Chat Support</h3>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-semibold">Online Now</span>
                  </div>
                  <p className="text-white mb-4">Chat with our design experts instantly</p>
                  <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                    Start Chat
                  </button>
                </div>
              </div>
            )}

            {activeMethod === 'meeting' && (
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Schedule a Meeting</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-slate-700 rounded-lg">
                    <Clock size={24} className="text-orange-400" />
                    <div>
                      <p className="text-white font-semibold">Free Consultation</p>
                      <p className="text-slate-400 text-sm">30 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-slate-700 rounded-lg">
                    <Users size={24} className="text-orange-400" />
                    <div>
                      <p className="text-white font-semibold">Project Planning</p>
                      <p className="text-slate-400 text-sm">60 minutes</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeMethod === 'virtual' && (
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Virtual Experience</h3>
                <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 rounded-xl">
                  <Video size={32} className="text-white mb-4" />
                  <p className="text-white mb-4">Take a virtual tour of our completed projects</p>
                  <button className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                    Start Virtual Tour
                  </button>
                </div>
              </div>
            )}

            {/* Office Location */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Visit Our Office</h3>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Kimathi Street, 5th Floor</p>
                  <p className="text-slate-400 mb-4">Nairobi, Kenya</p>
                  <button className="text-yellow-400 hover:text-yellow-300 transition-colors font-semibold">
                    Get Directions →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                    placeholder="Your phone"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white mb-2 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-medium">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award size={32} className="text-slate-900" />
            </div>
            <h4 className="text-white font-bold mb-2">7+ Years Experience</h4>
            <p className="text-slate-400 text-sm">Trusted by hundreds of clients</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-white" />
            </div>
            <h4 className="text-white font-bold mb-2">500+ Projects</h4>
            <p className="text-slate-400 text-sm">Completed successfully</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock size={32} className="text-white" />
            </div>
            <h4 className="text-white font-bold mb-2">24/7 Support</h4>
            <p className="text-slate-400 text-sm">We're always here to help</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;