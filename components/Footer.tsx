
import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/5 bg-gray-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-2xl font-bold font-heading mb-2">Zaber <span className="text-orange-500">Shawon</span></h2>
          <p className="text-gray-500 text-sm">Crafting digital experiences with precision and passion.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
        </div>

        <div className="text-gray-500 text-sm flex items-center gap-2">
          © {currentYear} • Built with <Heart size={14} className="text-red-500 fill-red-500" /> by Zaber
        </div>
      </div>
    </footer>
  );
};

export default Footer;
