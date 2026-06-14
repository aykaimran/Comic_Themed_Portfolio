import React, { useState } from 'react';
import { Award, FileText, Medal, Trophy, Palette, Globe, GraduationCap, School, Zap, Rocket } from 'lucide-react';
import ComicPanel from './ComicPanel';

const AchievementsPanel = () => {
  const [activeTab, setActiveTab] = useState('skills'); // 'skills', 'education', 'achievements'

  const achievements = [
    {
      title: "DEPARTMENT TOPPER",
      description: "Secured first position and received a gold medal and cash prize for achieving the highest GPA in the Software Engineering Department. (2024)",
      icon: Award,
      level: "LEGENDARY",
      color: "from-yellow-500 to-amber-500"
    },
    {
      title: "DEAN’S HONOR LIST",
      description: "Recognized for academic excellence (Spring 2024, Fall 2025 and Spring 2025).",
      icon: FileText,
      level: "RARE",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "MERIT SCHOLAR",
      description: "Merit-based scholarship holder (2019 – 2023)",
      icon: Medal,
      level: "EPIC",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "HIGH ACHIEVER",
      description: "Awarded 5 High Achiever Awards across O & A Levels",
      icon: Trophy,
      level: "EPIC",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "UI/UX CERTIFIED",
      description: "Advanced Graphic Designing & UI/UX Certification (2024)",
      icon: Palette,
      level: "RARE",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "LANGUAGE PROFICIENCY",
      description: "O-Level Certificate in French Language",
      icon: Globe,
      level: "UNCOMMON",
      color: "from-indigo-500 to-violet-500"
    }
  ];

  const skillGroups = [
    {
      category: "LANGUAGES",
      color: "border-comic-red bg-red-50/50",
      barColor: "bg-comic-red",
      textColor: "text-comic-red",
      items: [
        { name: "Python", level: 90 },
        { name: "Java", level: 95 },
        { name: "C++ / C", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "SQL (PostgreSQL/MSSQL)", level: 88 },
        { name: "Assembly", level: 80 },
        { name: "JUnit", level: 85 }
      ]
    },
    {
      category: "FRAMEWORKS & LIBRARIES",
      color: "border-comic-blue bg-blue-50/50",
      barColor: "bg-comic-blue",
      textColor: "text-comic-blue",
      items: [
        { name: "React.js", level: 92 },
        { name: "Node.js / Express.js", level: 88 },
        { name: "Next.js", level: 85 },
        { name: "Spring Boot", level: 90 },
        { name: "Scikit-learn", level: 82 },
        { name: "OpenCV", level: 80 },
        { name: "Flask", level: 85 }
      ]
    },
    {
      category: "TOOLS & PLATFORMS",
      color: "border-comic-yellow bg-yellow-50/50",
      barColor: "bg-amber-500",
      textColor: "text-amber-600",
      items: [
        { name: "Git / GitHub", level: 95 },
        { name: "MongoDB / MySQL", level: 88 },
        { name: "JIRA / VS Code", level: 90 },
        { name: "MATLAB", level: 75 },
        { name: "Ubuntu Linux", level: 88 },
        { name: "NLP", level: 82 },
        { name: "Photoshop / Illustrator", level: 78 }
      ]
    }
  ];

  const education = [
    {
      institution: "FAST-NUCES",
      degree: "Software Engineering Degree",
      timeline: "Aug 2023 – Present",
      details: "Currently in 6th semester with a GPA of 3.67/4.",
      decor: "border-comic-red bg-red-50/50",
      sticker: GraduationCap
    },
    {
      institution: "Keynesian Institute of Management and Sciences (KIMS)",
      degree: "A-Levels & O-Levels",
      timeline: "2021 – 2023",
      details: "A-Levels: Computer Science (92% - 1012/1100 marks) | O-Levels: Sciences (92.44% - 832/900 marks).",
      decor: "border-comic-blue bg-blue-50/50",
      sticker: School
    }
  ];

  return (
    <ComicPanel
      title="ACHIEVEMENTS UNLOCKED"
      variant="action"
      className="bg-gradient-to-br from-yellow-50 to-amber-50 h-full"
    >
      <div className="relative z-10 h-full p-4 flex flex-col justify-between">
        
        {/* Tab Buttons Container */}
        <div>
          <div className="grid grid-cols-3 gap-2 mb-6">
            {[
              { id: 'skills', label: 'SKILLS', icon: Zap, color: 'bg-comic-blue text-white' },
              { id: 'education', label: 'EDUCATION', icon: GraduationCap, color: 'bg-comic-red text-white' },
              { id: 'achievements', label: 'AWARDS', icon: Trophy, color: 'bg-comic-yellow text-black' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-comic py-2 border-3 border-black text-xs sm:text-sm transition-all hover:scale-105 cursor-pointer uppercase flex items-center justify-center gap-1.5 ${
                  activeTab === tab.id
                    ? `${tab.color} shadow-comic-sm -translate-y-1`
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
                style={{ color: activeTab === tab.id && tab.id === 'achievements' ? 'black' : undefined }}
              >
                <tab.icon className="w-4 h-4 shrink-0" strokeWidth={2.5} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content Area */}
          <div className="min-h-[250px]">
            
            {/* SKILLS TAB */}
            {activeTab === 'skills' && (
              <div className="space-y-4 animate-[fadeIn_0.3s_ease]">
                {skillGroups.map((group, index) => (
                  <div key={index} className={`border-4 border-black p-4 ${group.color} shadow-comic-sm`}>
                    <h4 className={`font-comic text-lg uppercase ${group.textColor} mb-3 border-b-2 border-black pb-1`}>
                      {group.category}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {group.items.map((skill, sIdx) => (
                        <div key={sIdx} className="flex flex-col">
                          <div className="flex justify-between items-center text-xs font-bold mb-1 uppercase font-comic">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <div className="h-3 bg-white border-2 border-black overflow-hidden">
                            <div 
                              className={`h-full ${group.barColor} transition-all duration-1000 ease-out`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* EDUCATION TAB */}
            {activeTab === 'education' && (
              <div className="space-y-4 animate-[fadeIn_0.3s_ease]">
                {education.map((edu, index) => (
                  <div 
                    key={index} 
                    className={`relative border-4 border-black p-4 ${edu.decor} shadow-comic-sm transform ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'} hover:rotate-0 transition-transform duration-300`}
                  >
                    {/* Sticker Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-white border-3 border-black rounded-full flex items-center justify-center shadow-comic-sm">
                      <edu.sticker className="w-5 h-5 text-black" strokeWidth={2.5} />
                    </div>
                    <div className="font-comic text-xs uppercase text-gray-500 mb-1">{edu.timeline}</div>
                    <h4 className="font-comic text-xl text-black uppercase mb-1">{edu.institution}</h4>
                    <div className="font-bold text-sm text-gray-800 mb-2 uppercase">{edu.degree}</div>
                    <p className="font-dialogue text-gray-700 text-sm leading-relaxed border-t border-black/10 pt-2">{edu.details}</p>
                  </div>
                ))}
              </div>
            )}

            {/* ACHIEVEMENTS TAB */}
            {activeTab === 'achievements' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-[fadeIn_0.3s_ease]">
                {achievements.map((ach, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${ach.color} border-4 border-black p-3 shadow-comic-sm hover:shadow-comic-lg transition-all duration-300 hover:scale-105 flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex justify-center mb-2">
                        <ach.icon className="w-10 h-10 text-white drop-shadow-md" strokeWidth={2.5} />
                      </div>
                      <h4 className="font-comic text-lg uppercase text-white text-center mb-1 text-stroke-thin">
                        {ach.title}
                      </h4>
                      <p className="text-xs text-white/95 text-center mb-3 leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
                    <div className="text-center mt-2">
                      <span className="font-comic text-xs bg-black text-white px-2 py-1 border border-white">
                        {ach.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

        {/* XP Progress Bar (Always visible at the bottom) */}
        <div className="mt-6 p-3 bg-gradient-to-r from-gray-900 to-black border-4 border-yellow-500">
          <div className="flex justify-between items-center mb-2">
            <span className="font-comic text-yellow-300">CAREER XP</span>
            <span className="font-comic text-white">SOFTWARE ENGINEER (IN PROGRESS)</span>
          </div>

          <div className="h-6 bg-gray-800 border-2 border-yellow-600 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 animate-pulse"
              style={{ width: '72%' }}
            >
              <div className="h-full flex items-center justify-end pr-2">
                <span className="font-comic text-xs text-black font-bold">
                  FAST-NUCES | 7th Semester
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mt-2 flex items-center justify-center gap-1.5">
            <span className="font-comic text-xs text-yellow-300">
              NEXT UNLOCK: FULL-TIME SOFTWARE ENGINEER
            </span>
            <Rocket className="w-4 h-4 text-yellow-300 animate-bounce" strokeWidth={2.5} />
          </div>
        </div>

      </div>
    </ComicPanel>
  );
};

export default AchievementsPanel;
