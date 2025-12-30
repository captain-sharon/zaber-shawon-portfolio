
import React from 'react';
import { SKILLS, ICON_MAP } from '../constants';
import { Code2, GraduationCap, Award } from 'lucide-react';

const SkillsSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-orange-600/10 rounded-xl">
              <Code2 className="text-orange-500" size={32} />
            </div>
            <h2 className="text-4xl font-bold tracking-tight">Technical Arsenal</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILLS.map((skill, index) => (
              <div 
                key={index} 
                className="glass p-6 rounded-2xl hover:border-orange-600/30 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-800 rounded-xl group-hover:bg-orange-600/10 transition-colors text-gray-400 group-hover:text-orange-500">
                    {ICON_MAP[skill.icon]}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{skill.name}</h4>
                    <p className="text-sm text-gray-500">
                      {skill.name === 'BSc in CSE' ? 'Ongoing' : `${skill.years} Years Experience`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
           <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-600/10 rounded-xl">
                  <GraduationCap className="text-blue-500" size={32} />
                </div>
                <h2 className="text-4xl font-bold tracking-tight">Education</h2>
              </div>
              <div className="glass p-8 rounded-2xl border-l-4 border-l-blue-500">
                <h3 className="text-xl font-bold text-white mb-1">BSc in Computer Science & Engineering</h3>
                <p className="text-blue-500 font-semibold mb-4">SOUTHEAST UNIVERSITY</p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                   <span className="px-3 py-1 bg-gray-800 rounded-full">2023 - PRESENT</span>
                </div>
              </div>
           </div>

           <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-yellow-600/10 rounded-xl">
                  <Award className="text-yellow-500" size={32} />
                </div>
                <h2 className="text-4xl font-bold tracking-tight">Achievements</h2>
              </div>
              <div className="glass p-8 rounded-2xl border-l-4 border-l-yellow-500">
                <h3 className="text-xl font-bold text-white mb-1">Competitive Programmer</h3>
                <p className="text-yellow-500 font-semibold mb-4">Codeforces Active Participant</p>
                <div className="flex items-center gap-4">
                   <div className="flex flex-col">
                      <span className="text-3xl font-bold text-white">1200</span>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Current Rating</span>
                   </div>
                   <div className="w-[2px] h-10 bg-gray-800"></div>
                   <div className="text-gray-400 text-sm italic">
                      "I love solving complex algorithmic challenges and optimizing code performance."
                   </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
