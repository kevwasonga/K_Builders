import { useState, useRef, useEffect } from 'react';
import { X, Share2, Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  fullDescription?: string;
}

const ExpandableServiceCard = ({ title, category, location, description, image, fullDescription }: ServiceCardProps) => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);

  const websiteUrl = 'https://kevwasonga.github.io/K_Builders/';
  const serviceMessage = `CLAUSE INTERIOR FITS%0A%0A${title}%0A%0A${description}%0A%0AVisit: ${websiteUrl}`;
  const shareUrl = websiteUrl;

  const shareOptions = [
    { 
      name: 'WhatsApp', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ), 
      action: () => window.open(`https://wa.me/254701403851?text=${serviceMessage}`, '_blank') 
    },
    { 
      name: 'Facebook', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      action: () => window.open('https://www.facebook.com/people/Clause-Interior-fits-and-design/100091929919157/?rdid=qVrdHzdRb532AyUa&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F14Tu5azcVpa%2F', '_blank') 
    },
    { 
      name: 'Instagram', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ), 
      action: () => window.open('https://www.instagram.com/clausedesigninteriorfits/?igsh=cWdjYm1qdm8zZHhj', '_blank') 
    },
    { 
      name: 'TikTok', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ), 
      action: () => window.open('https://www.tiktok.com/@clauseinteriorfitsndesig?_r=1&_t=ZM-91kJYTvC2Ey', '_blank') 
    },
    { 
      name: 'X (Twitter)', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      action: () => window.open('https://x.com/ClauseFits47910?t=XBC90QhLlI2zfnuIlfntpw&s=09', '_blank') 
    },
    { 
      name: 'LinkedIn', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ), 
      action: () => window.open('https://www.linkedin.com/in/clause-interior-fits-and-design-b5a1a0341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank') 
    },
    { 
      name: 'Email', 
      icon: <Mail size={20} />, 
      action: () => window.location.href = `mailto:Clauseinteriorfits@gmail.com?subject=CLAUSE INTERIOR FITS - ${encodeURIComponent(title)}&body=${serviceMessage}%0A%0A${encodeURIComponent(shareUrl)}` 
    },
    { 
      name: 'Copy Link', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
      ), 
      action: () => { 
        navigator.clipboard.writeText(`CLAUSE INTERIOR FITS\n\n${title}\n\n${description}\n\nVisit: ${shareUrl}`);
        alert('Message copied! Right-click the image above and save it, then attach it when sharing.');
      } 
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shareRef.current && !shareRef.current.contains(event.target as Node)) {
        setShowShareMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative group">
      <div className="bg-slate-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 border border-slate-600 hover:shadow-3xl hover:-translate-y-2">
        
        <div className="aspect-16-9 relative overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
        </div>

        <div className="p-3 sm:p-4 md:p-5 lg:p-6">
          <div className="mb-2">
            <span className="text-xs xs:text-sm md:text-base text-yellow-400 font-medium">{category}</span>
          </div>
          <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
            {title}
          </h3>
          <div className="flex items-center text-slate-400 text-[10px] xs:text-xs sm:text-sm mb-3">
            <MapPin size={14} className="mr-1" />
            {location}
          </div>
          <p className="text-slate-300 text-[10px] xs:text-xs sm:text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>
          <div className="flex items-center gap-3">
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 py-2 rounded-xl text-[10px] xs:text-xs sm:text-sm md:text-base font-bold transition-all duration-300 text-center"
            >
              Start Your Project
            </a>
            <div className="relative" ref={shareRef}>
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-600 hover:from-yellow-400 hover:to-orange-500 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-yellow-400/20 group/share"
              >
                <Share2 size={18} className="text-white group-hover/share:text-slate-900 transition-colors" />
              </button>

              {showShareMenu && (
                <div className="absolute right-0 bottom-12 w-56 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-slate-700/50 overflow-hidden z-50 animate-slideUp">
                  {shareOptions.slice(0, -1).map((option, index) => (
                    <button
                      key={index}
                      onClick={() => { option.action(); setShowShareMenu(false); }}
                      className="w-full px-4 py-3 flex items-center space-x-3 hover:bg-slate-700/50 transition-all duration-200 text-left border-b border-slate-700/30"
                    >
                      <span className="text-yellow-400">{option.icon}</span>
                      <span className="text-slate-200 text-xs xs:text-sm font-medium">{option.name}</span>
                    </button>
                  ))}
                  <button
                    onClick={() => { shareOptions[shareOptions.length - 1].action(); setShowShareMenu(false); }}
                    className="w-full px-4 py-3 flex items-center space-x-3 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 hover:from-yellow-400/20 hover:to-orange-500/20 transition-all duration-200 text-left border-t-2 border-yellow-400/30"
                  >
                    <span className="text-yellow-400">{shareOptions[shareOptions.length - 1].icon}</span>
                    <span className="text-yellow-400 text-xs xs:text-sm font-bold">{shareOptions[shareOptions.length - 1].name}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableServiceCard;
