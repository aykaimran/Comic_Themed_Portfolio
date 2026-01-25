import React, { useState } from 'react';
import ComicPanel from './ComicPanel';

const ProjectsPanel = () => {
  const projects = [
  {
    id: 1,
    title: "MEDIPREDICT",
    type: "AI / NLP System",
    description:
      "An NLP-powered system that analyzes patient reports and predicts diseases with descriptions and recommended medicines.",
    status: "COMPLETED",
    tech: ["Python", "BERT", "NLP", "Machine Learning"],
    impact: "Automated disease prediction from reports",
    mascot: "/mascot-medical.png",
    color: "from-red-400 to-pink-500"
  },
  {
    id: 2,
    title: "LOGISIM",
    type: "Desktop Application",
    description:
      "A logic circuit simulator allowing users to design, simulate, and export circuits with truth tables and Boolean expressions.",
    status: "COMPLETED",
    tech: ["Java", "Java Swing", "PostgreSQL"],
    impact: "Interactive learning for digital logic",
    mascot: "/mascot-circuit.png",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 3,
    title: "RENTINEL",
    type: "Full-Stack Web App",
    description:
      "A management system for rent tracking, lease handling, and tenant-landlord communication.",
    status: "COMPLETED",
    tech: ["React", "Spring Boot", "Java"],
    impact: "Simplified property management",
    mascot: "/mascot-building.png",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 4,
    title: "AI RESUME MAKER",
    type: "AI Full-Stack Platform",
    description:
      "AI-powered resume builder with real-time preview, PDF export, authentication, and content generation.",
    status: "COMPLETED",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Flask", "Ollama"],
    impact: "Automated resume creation with AI",
    mascot: "/mascot-laptop.png",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "PEAKSAVER",
    type: "Desktop Application",
    description:
      "A C++ application that tracks electricity usage and optimizes peak and off-peak consumption.",
    status: "COMPLETED",
    tech: ["C++", "SQL", ".NET Framework"],
    impact: "Optimized household energy usage",
    mascot: "/mascot-energy.png",
    color: "from-yellow-400 to-amber-500"
  },
   {
      id: 7,
      title: "FINAL YEAR PROJECT",
      type: "Capstone / Research Project",
      description:
        "A large-scale final year project focused on advanced problem-solving and real-world impact. Project details are intentionally kept confidential.",
      status: "IN_PROGRESS",
      tech: ["AI", "Full-Stack", "Research", "System Design"],
      impact: "Confidential — to be revealed upon completion",
      mascot: "/mascot-secret.png",
      color: "from-gray-700 to-black"
    }
  
];


  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.status === filter.toUpperCase().replace(' ', '_');
  });

  const getStatusClass = (status) => {
    switch(status) {
      case 'ACTIVE': return 'bg-green-500';
      case 'COMPLETED': return 'bg-blue-500';
      case 'IN_PROGRESS': return 'bg-yellow-500';
      case 'DEPLOYED': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <ComicPanel 
      title="MISSION ARCHIVES" 
      className="bg-gradient-to-br from-gray-50 to-slate-100 h-full"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: 'radial-gradient(circle at 2px 2px, #000 2px, transparent 0)',
             backgroundSize: '25px 25px'
           }}>
      </div>

      <div className="relative z-10 p-4 md:p-6">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {['all', 'completed', 'in progress', 'deployed'].map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`font-comic px-4 py-2 border-3 border-black transition-all hover:scale-105 ${
                filter === filterType
                  ? 'bg-comic-red text-white shadow-comic-sm'
                  : 'bg-white text-black shadow-sm'
              }`}
            >
              {filterType.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white border-4 border-black p-4 shadow-comic-sm hover:shadow-comic-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden comic-hover-pop"
              onClick={() => setSelectedProject(project)}
            >
              {/* Status Ribbon */}
              <div className={`absolute top-0 right-0 px-3 py-1 font-comic text-xs uppercase ${getStatusClass(project.status)} text-white border-l-2 border-b-2 border-black`}>
                {project.status.replace('_', ' ')}
              </div>

              {/* Mascot Image Container */}
              <div className="relative h-32 mb-4 overflow-hidden rounded-lg border-2 border-gray-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                <div className="relative h-full flex items-center justify-center p-4">
                  <img
                    src={project.mascot}
                    alt={`${project.title} Mascot`}
                    className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23${project.color.includes('blue') ? '00aeef' : project.color.includes('green') ? '10b981' : project.color.includes('purple') ? '8b5cf6' : project.color.includes('orange') ? 'f97316' : 'ef4444'}20'/%3E%3Ctext x='50%25' y='50%25' font-family='Comic Sans MS' font-size='24' text-anchor='middle' dy='.3em' fill='%23666'%3E${project.title.split(' ')[1]}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                </div>
              </div>

              {/* Project Info */}
              <h3 className="font-comic text-xl uppercase tracking-wider mb-2 text-center group-hover:text-comic-red transition-colors">
                {project.title}
              </h3>
              
              <div className="mb-3 text-center">
                <span className="text-xs font-bold uppercase bg-comic-black text-white px-3 py-1 inline-block border-2 border-white">
                  {project.type}
                </span>
              </div>

              <p className="text-gray-600 mb-4 text-center text-sm min-h-[3rem]">
                {project.description}
              </p>

              {/* Impact Badge */}
              <div className="mb-4 p-2 bg-gradient-to-r from-gray-100 to-gray-200 border-2 border-gray-300 text-center">
                <span className="font-comic text-xs text-gray-700">IMPACT:</span>
                <span className="font-bold text-sm ml-2 text-comic-blue">{project.impact}</span>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1 justify-center mb-3">
                {project.tech.slice(0, 3).map((tech, i) => (
                  <span 
                    key={i}
                    className="text-xs bg-gradient-to-r from-gray-800 to-black text-white px-2 py-1 font-mono border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-xs bg-gray-300 text-gray-700 px-2 py-1 font-mono border border-gray-400">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              {/* Action Button */}
              <button className="w-full bg-gradient-to-r from-comic-blue to-cyan-600 text-white font-comic py-2 border-2 border-black hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group-hover:animate-bam">
                VIEW MISSION
              </button>
            </div>
          ))}
        </div>

        {/* Selected Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white border-8 border-black max-w-2xl w-full p-6 shadow-comic-xl">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-comic text-3xl uppercase">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="font-comic text-2xl bg-comic-red text-white w-10 h-10 border-4 border-black"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img 
                    src={selectedProject.mascot} 
                    alt={selectedProject.title}
                    className="w-full h-48 object-contain border-4 border-black"
                  />
                </div>
                <div>
                  <p className="mb-4">{selectedProject.description}</p>
                  <div className="space-y-2">
                    <div><strong>Status:</strong> {selectedProject.status}</div>
                    <div><strong>Impact:</strong> {selectedProject.impact}</div>
                    <div><strong>Tech Stack:</strong> {selectedProject.tech.join(', ')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Total Projects Counter */}
        <div className="mt-8 p-4 bg-gradient-to-r from-black to-gray-900 border-4 border-comic-yellow text-center">
          <div className="font-comic text-3xl text-white">
            <span className="text-comic-yellow">{projects.length}</span> MAJOR MISSIONS
          </div>
          <div className="font-comic text-sm text-gray-300 mt-2 flex justify-center items-center gap-2">
            <span>SCROLL FOR MORE ADVENTURES</span>
            <span className="animate-bounce">👇</span>
          </div>
        </div>
      </div>
    </ComicPanel>
  );
};

export default ProjectsPanel;