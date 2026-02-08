import React, { useState } from 'react';
import { 
  ArrowRight, 
  Activity,
  Twitter,
  Instagram,
  MessageCircle,
  Globe,
  Menu,
  X 
} from 'lucide-react';
import { NavLink } from 'react-router-dom';


const HeroLogin: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-purple-100 overflow-x-hidden relative flex flex-col">
      
      {/* --- Background --- */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-125 bg-linear-to-b from-purple-50/50 via-orange-50/30 to-transparent rounded-full blur-3xl opacity-80 z-0 pointer-events-none" />

      {/* --- Header --- */}
      <nav className="relative z-50 px-6 py-6 max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <Activity size={22} className="text-black" />
          <span>SocialPulse</span>
        </div>

        <div className="flex items-center gap-6">
          <NavLink to={"Login"} className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-gray-800 transition-all shadow-lg shadow-black/10 cursor-pointer">
            Login <ArrowRight size={16} />
          </NavLink>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* --- Hero Content --- */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-12 pb-24">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-[11px] font-bold uppercase tracking-wider mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
          New: Reddit Integration Live
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-8 max-w-4xl">
          Centralized Analytics <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-900 via-purple-700 to-gray-800">Unified Intelligence</span> <br />
          For Digital Growth
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Stop manually switching between platforms. Aggregating social media data from 
          <span className="text-gray-900 font-medium"> Instagram, X, and Reddit</span> into a single unified dashboard. 
          Process likes, impressions, and reach to make data-driven decisions in real time.
        </p>

        {/* Primary CTA */}
        <NavLink to={"Signup"} className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold shadow-2xl shadow-gray-900/20 hover:bg-black hover:scale-105 transition-all transform duration-300 flex items-center gap-3 cursor-pointer">
          Get Started Free <ArrowRight size={20} />
        </NavLink>

        {/* Social Proof Bar */}
        <div className="mt-32 w-full max-w-4xl opacity-50">
          <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mb-8"></div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8 text-center">
            Integrates seamlessly with
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 grayscale transition-all duration-500 hover:grayscale-0">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
              <Twitter size={18} fill="currentColor" /> X (Twitter)
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
              <Instagram size={18} /> Instagram
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
              <MessageCircle size={18} fill="currentColor" className="text-orange-600" /> Reddit
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
              <Globe size={18} /> Web
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-60 flex flex-col p-8 md:hidden">
          <div className="flex justify-between items-center mb-12">
            <span className="font-bold text-xl">SocialPulse</span>
            <X size={32} onClick={() => setIsMenuOpen(false)} />
          </div>
          <div className="space-y-6 text-2xl font-bold">
            <a href="#" className="block">Login</a>
            <a href="#" className="block">Documentation</a>
            <a href="#" className="block">Pricing</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroLogin;