
import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 bg-orange-600/10 rounded-xl">
          <Briefcase className="text-orange-500" size={32} />
        </div>
        <h2 className="text-4xl font-bold tracking-tight">Work Experience</h2>
      </div>

      <div className="space-y-12">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="group relative pl-8 border-l border-gray-800">
            {/* Dot */}
            <div className="absolute left-[-9px] top-1 w-4 h-4 bg-gray-950 border-2 border-orange-600 rounded-full transition-transform group-hover:scale-150 group-hover:bg-orange-600"></div>
            
            <div className="glass p-8 rounded-2xl hover:bg-white/[0.05] transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-orange-500 font-semibold">{exp.company}</p>
                </div>
                <div className="px-4 py-1 bg-gray-800 rounded-full text-sm text-gray-400 font-medium">
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-400">
                    <span className="text-orange-500 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
