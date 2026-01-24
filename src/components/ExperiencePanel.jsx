import React from 'react';
import ComicPanel from './ComicPanel';

const ExperiencePanel = () => {
  const experiences = [
    {
      year: "2023-2026",
      title: "FULL-STACK HERO",
      company: "Digital Frontiers Inc.",
      description: "Battling bugs and building responsive web applications",
      skills: ["React", "Node.js", "MongoDB", "AWS"],
      mascot: "/mascot-superhero.png",  // Superhero mascot
      color: "from-red-500 to-orange-500"
    },
    {
      year: "2021-2023",
      title: "FRONTEND CRUSADER",
      company: "Creative Coders Guild",
      description: "Crafted pixel-perfect interfaces and UX experiences",
      skills: ["Vue.js", "CSS3", "UI/UX", "Animation"],
      mascot: "/mascot-artist.png",  // Creative/artist mascot
      color: "from-blue-500 to-purple-500"
    },
    {
      year: "2019-2021",
      title: "CODE APPRENTICE",
      company: "Tech Dojo Academy",
      description: "Mastered the ancient arts of programming",
      skills: ["JavaScript", "HTML5", "Git", "APIs"],
      mascot: "/mascot-student.png",  // Student/learning mascot
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <ComicPanel 
      title="HERO'S JOURNEY" 
      variant="important"
      className="bg-gradient-to-br from-purple-50 to-blue-50 h-full"
    >
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: 'radial-gradient(circle at 2px 2px, #000 2px, transparent 0)',
             backgroundSize: '30px 30px'
           }}>
      </div>

      <div className="relative z-10 h-full p-4 md:p-6 overflow-y-auto">
        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-2 bg-gradient-to-b from-comic-red via-comic-yellow to-comic-blue border-2 border-black"></div>
          
          <div className="space-y-8 ml-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Timeline Node */}
                <div className="absolute -left-14 top-6 w-8 h-8 bg-white border-4 border-black rounded-full z-10 group-hover:scale-125 transition-transform"></div>
                
                <div className="bg-white border-4 border-black p-4 shadow-comic-sm hover:shadow-comic-lg transition-all duration-300 group-hover:-translate-x-2">
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Mascot Image */}
                    <div className="md:w-1/4 flex-shrink-0">
                      <div className="relative w-24 h-24 mx-auto">
                        <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-30 rounded-full blur-md`}></div>
                        <img
                          src={exp.mascot}
                          alt={`${exp.title} Mascot`}
                          className="relative z-10 w-full h-full object-contain group-hover:scale-110 transition-transform"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'%3E%3Ccircle cx='48' cy='48' r='48' fill='%238b5cf6'/%3E%3Ctext x='50%25' y='50%25' font-family='Comic Sans MS' font-size='20' text-anchor='middle' dy='.3em' fill='white'%3E👨‍💻%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="md:w-3/4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <div>
                          <h3 className="font-comic text-xl md:text-2xl text-comic-black uppercase tracking-wide">
                            {exp.title}
                          </h3>
                          <p className="font-bold text-lg text-gray-800">
                            {exp.company}
                          </p>
                        </div>
                        <span className="font-comic text-sm bg-black text-white px-3 py-1 border-2 border-comic-yellow mt-2 md:mt-0">
                          {exp.year}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-3">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span 
                            key={i}
                            className="font-comic text-xs bg-comic-blue/20 border-2 border-comic-blue px-3 py-1 hover:bg-comic-blue hover:text-white transition-colors cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Journey Continues... */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-comic-red to-comic-yellow border-4 border-black px-6 py-3">
            <span className="font-comic text-xl text-white text-stroke-thin">JOURNEY CONTINUES...</span>
            <span className="animate-bounce">🚀</span>
          </div>
        </div>
      </div>
    </ComicPanel>
  );
};

export default ExperiencePanel;