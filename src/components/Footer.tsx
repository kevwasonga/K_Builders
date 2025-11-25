import { Phone, Mail, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Clause Interior Fits</h3>
            <p className="text-slate-300 leading-relaxed">
              Transforming spaces with exceptional interior design and construction.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li><button onClick={() => document.getElementById('home')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-yellow-400 transition-colors cursor-pointer">Home</button></li>
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-yellow-400 transition-colors cursor-pointer">About</button></li>
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-yellow-400 transition-colors cursor-pointer">Services</button></li>
              <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-yellow-400 transition-colors cursor-pointer">Projects</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-yellow-400 transition-colors cursor-pointer">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Custom Home Design</li>
              <li>Home Construction</li>
              <li>Home Renovations</li>
              <li>Interior Finishing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <a href="tel:+254700123456" className="hover:text-yellow-400 transition-colors">+254 700 123 456</a>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <a href="mailto:info@buildkenya.co.ke" className="hover:text-yellow-400 transition-colors">info@buildkenya.co.ke</a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Kimathi Street, Nairobi</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Clause Interior Fits. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;