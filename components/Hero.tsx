
import React from 'react';
import { RESUME_SUMMARY, PROFILE_IMAGE_URL, SOCIAL_LINKS } from '../constants';
import { ArrowDown, Github, Linkedin, Send } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-orange-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div className="order-2 lg:order-1 space-y-8">
          <div className="inline-block px-4 py-1 rounded-full bg-orange-600/10 border border-orange-600/20 text-orange-500 text-sm font-semibold tracking-wide uppercase">
            Full Stack Developer
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            I'm <span className="text-orange-500">Zaber Shawon</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
            {RESUME_SUMMARY}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold flex items-center gap-2 transition-all transform hover:scale-105"
            >
              Get in touch
              <Send size={18} />
            </a>
            <div className="flex items-center gap-2">
               <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-xl hover:bg-white/10 transition-colors text-gray-300 hover:text-white" title="GitHub">
                <Github size={20} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-xl hover:bg-white/10 transition-colors text-gray-300 hover:text-white" title="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="flex gap-8 pt-8 border-t border-white/5">
            <div>
              <p className="text-2xl font-bold text-white">3+</p>
              <p className="text-sm text-gray-500 uppercase">Years Exp</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">1200</p>
              <p className="text-sm text-gray-500 uppercase">CF Rating</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">10+</p>
              <p className="text-sm text-gray-500 uppercase">Projects</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-72 h-96 md:w-[400px] md:h-[500px]">
             {/* Styled Portrait Container */}
             <div className="absolute inset-0 bg-gradient-to-tr from-orange-600 to-orange-400 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-sm"></div>
             <div className="absolute inset-0 bg-gray-900 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img 
                  src={PROFILE_IMAGE_URL} 
                  alt="Zaber Shawon" 
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                />
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl animate-float">
                <div className="flex items-center gap-3">
                   <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                      <Terminal className="text-white" size={24} />
                   </div>
                   <div>
                      <p className="text-xs text-gray-400 font-bold uppercase">Main Stack</p>
                      <p className="text-sm text-white font-bold">MERN Specialist</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
        <a href="#experience">
           <ArrowDown size={32} />
        </a>
      </div>
    </div>
  );
};

const Terminal = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="4 17 10 11 4 5"></polyline>
    <line x1="12" y1="19" x2="20" y2="19"></line>
  </svg>
);

export default Hero;
