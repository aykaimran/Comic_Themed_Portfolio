import React from 'react';
import ComicPanel from './ComicPanel';

const AchievementsPanel = () => {
  const achievements = [
    {
      title: "BUG SLAYER",
      description: "Fixed 1000+ critical bugs in production",
      icon: "🐛➡️💥",
      level: "LEGENDARY",
      color: "from-red-500 to-yellow-500"
    },
    {
      title: "CODE WIZARD",
      description: "Reduced load times by 300% on major project",
      icon: "⚡✨",
      level: "EPIC",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "TEAM LEADER",
      description: "Led 5 successful projects to completion",
      icon: "🦸‍♂️👥",
      level: "RARE",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "INNOVATOR",
      description: "3 patents pending for unique solutions",
      icon: "💡🚀",
      level: "LEGENDARY",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const skills = [
    { name: "React", level: 95, color: "bg-cyan-500" },
    { name: "TypeScript", level: 90, color: "bg-blue-600" },
    { name: "Node.js", level: 88, color: "bg-green-500" },
    { name: "UI/UX", level: 85, color: "bg-pink-500" },
    { name: "Cloud", level: 82, color: "bg-orange-500" },
    { name: "DevOps", level: 80, color: "bg-purple-500" },
  ];

  return (
    <ComicPanel 
      title="ACHIEVEMENTS UNLOCKED" 
      variant="action"
      className="bg-gradient-to-br from-yellow-50 to-amber-50 h-full"
    >
      <div className="relative z-10 h-full p-4">
        {/* Achievements Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {achievements.map((ach, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${ach.color} border-4 border-black p-3 shadow-comic-sm hover:shadow-comic-lg transition-all duration-300 hover:scale-105`}
            >
              <div className="text-3xl mb-2 text-center">{ach.icon}</div>
              <h4 className="font-comic text-lg uppercase text-white text-center text-stroke-thin mb-1">
                {ach.title}
              </h4>
              <p className="text-xs text-white/90 text-center mb-2">
                {ach.description}
              </p>
              <div className="text-center">
                <span className="font-comic text-xs bg-black text-white px-2 py-1 border border-white">
                  {ach.level}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mb-4">
          <div className="font-comic text-xl uppercase mb-3 text-center bg-black text-white py-2 border-2 border-comic-yellow">
            POWER LEVELS
          </div>
          <div className="space-y-3">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-comic text-sm uppercase">{skill.name}</span>
                  <span className="font-bold text-sm">{skill.level}%</span>
                </div>
                <div className="h-4 bg-gray-300 border-2 border-black overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} transition-all duration-1000 ease-out group-hover:animate-pulse`}
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* XP Progress Bar */}
        <div className="mt-4 p-3 bg-gradient-to-r from-gray-900 to-black border-4 border-yellow-500">
          <div className="flex justify-between items-center mb-2">
            <span className="font-comic text-yellow-300">DEVELOPER XP</span>
            <span className="font-comic text-white">LEVEL 99</span>
          </div>
          <div className="h-6 bg-gray-800 border-2 border-yellow-600 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 animate-pulse"
                 style={{ width: '95%' }}>
              <div className="h-full flex items-center justify-end pr-2">
                <span className="font-comic text-xs text-black font-bold">950,000/1,000,000 XP</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <span className="font-comic text-xs text-yellow-300">NEXT LEVEL: CODE SENSEI</span>
          </div>
        </div>
      </div>
    </ComicPanel>
  );
};

export default AchievementsPanel;