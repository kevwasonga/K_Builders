import { useState, useRef, useEffect } from 'react';
import { X, Share2, Phone, Mail, MessageCircle } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  fullDescription?: string;
}

const ExpandableServiceCard = ({ title, category, location, description, image, fullDescription }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showCTAMenu, setShowCTAMenu] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const serviceMessage = `Hello! I'm interested in ${title}. Please share more details and pricing.`;
  const encodedMessage = encodeURIComponent(serviceMessage);

  const shareOptions = [
    { name: 'WhatsApp', icon: '💬', action: () => window.open(`https://wa.me/?text=${encodedMessage}`, '_blank') },
    { name: 'Facebook', icon: '📘', action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank') },
    { name: 'Instagram', icon: '📷', action: () => alert('Instagram sharing requires mobile app') },
    { name: 'TikTok', icon: '🎵', action: () => alert('TikTok sharing requires mobile app') },
    { name: 'Email', icon: '✉️', action: () => window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodedMessage}` },
    { name: 'Copy Link', icon: '🔗', action: () => { navigator.clipboard.writeText(window.location.href); alert('Link copied!'); } }
  ];

  const ctaOptions = [
    { name: 'WhatsApp', icon: <MessageCircle size={20} />, action: () => window.open(`https://wa.me/254701403851?text=${encodedMessage}`, '_blank') },
    { name: 'Instagram DM', icon: '📷', action: () => window.open('https://instagram.com/clauseinteriorfits', '_blank') },
    { name: 'Facebook Messenger', icon: '💬', action: () => window.open('https://m.me/clauseinteriorfits', '_blank') },
    { name: 'Phone Call', icon: <Phone size={20} />, action: () => window.location.href = 'tel:+254701403851' },
    { name: 'Email', icon: <Mail size={20} />, action: () => window.location.href = `mailto:Clauseinteriorfits@gmail.com?subject=${encodeURIComponent(title)}&body=${encodedMessage}` }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shareRef.current && !shareRef.current.contains(event.target as Node)) {
        setShowShareMenu(false);
      }
      if (ctaRef.current && !ctaRef.current.contains(event.target as Node)) {
        setShowCTAMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative group">
      {/* Main Card */}
      <div className={`bg-slate-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 border border-slate-600 ${isExpanded ? 'ring-2 ring-yellow-400' : 'hover:shadow-3xl hover:-translate-y-2'}`}>
        
        {/* Expanded Panel - Appears Above Image */}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-lg p-6 border-b border-slate-700/50 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-slate-700/50 hover:bg-red-500/80 rounded-full flex items-center justify-center transition-all duration-300 group/close"
            >
              <X size={18} className="text-white group-hover/close:rotate-90 transition-transform duration-300" />
            </button>

            {/* Service Description */}
            <div className="pr-12 mb-6">
              <h4 className="text-xl font-bold text-yellow-400 mb-3 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-orange-500 mr-3 rounded-full"></span>
                Service Details
              </h4>
              <p className="text-slate-200 leading-relaxed text-sm">
                {fullDescription || description}
              </p>
            </div>

            {/* Share Section */}
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-700/50">
              <span className="text-slate-400 text-sm font-medium">Share this service</span>
              <div className="relative" ref={shareRef}>
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-600 hover:from-yellow-400 hover:to-orange-500 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-yellow-400/20 group/share"
                >
                  <Share2 size={18} className="text-white group-hover/share:text-slate-900 transition-colors" />
                </button>

                {/* Share Popup Menu */}
                {showShareMenu && (
                  <div className="absolute right-0 top-12 w-56 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-slate-700/50 overflow-hidden z-50 animate-slideDown">
                    {shareOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => { option.action(); setShowShareMenu(false); }}
                        className="w-full px-4 py-3 flex items-center space-x-3 hover:bg-slate-700/50 transition-all duration-200 text-left border-b border-slate-700/30 last:border-b-0"
                      >
                        <span className="text-2xl">{option.icon}</span>
                        <span className="text-slate-200 text-sm font-medium">{option.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* CTA Button */}
            <div className="relative" ref={ctaRef}>
              <button
                onClick={() => setShowCTAMenu(!showCTAMenu)}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-yellow-400/30 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <span className="text-xl">→</span>
              </button>

              {/* CTA Quick Action Menu */}
              {showCTAMenu && (
                <div className="absolute bottom-full left-0 right-0 mb-2 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-slate-700/50 overflow-hidden z-50 animate-slideUp">
                  {ctaOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => { option.action(); setShowCTAMenu(false); }}
                      className="w-full px-4 py-3 flex items-center space-x-3 hover:bg-slate-700/50 transition-all duration-200 text-left border-b border-slate-700/30 last:border-b-0"
                    >
                      <span className="text-yellow-400">{typeof option.icon === 'string' ? option.icon : option.icon}</span>
                      <span className="text-slate-200 text-sm font-medium">{option.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Project Image */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className={`w-full h-full object-cover transition-transform duration-500 ${isExpanded ? '' : 'group-hover:scale-110'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <div className="mb-2">
            <span className="text-sm text-yellow-400 font-medium">{category}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
            {title}
          </h3>
          <div className="flex items-center text-slate-400 text-sm mb-3">
            <span className="mr-1">📍</span>
            {location}
          </div>
          <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full bg-gradient-to-r from-slate-700 to-slate-600 text-white py-2 rounded-xl font-medium hover:from-yellow-400 hover:to-orange-500 hover:text-slate-900 transition-all duration-300"
          >
            {isExpanded ? 'Close Details' : 'View Details'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpandableServiceCard;
