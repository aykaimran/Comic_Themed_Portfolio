import React, { useState } from 'react';
import ComicPanel from './ComicPanel';

const ProjectsPanel = () => {
  const projects = [
    {
      id: 1,
      title: "SICKLEAF",
      type: "Group Project",
      year: "2026 – Present",
      description:
        "Built AI plant disease detector achieving 88.6% accuracy on 20,000+ leaf images and extracted 55 features (shape, texture, color, edge) for disease classification. Implemented PCA for dimensionality reduction and model optimization and created web interface for real-time leaf image diagnosis.",
      status: "IN_PROGRESS",
      tech: ["Python", "Scikit-learn", "OpenCV", "SVM", "Random Forest", "XGBoost"],
      impact: "Achieved 88.6% accuracy on 20k+ images",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      title: "COOKIEWISE AI",
      type: "AI Extension",
      year: "2026",
      description:
        "An AI-powered browser extension that detects cookie consent banners and extracts privacy policy text in real time. Generates clear, plain-English summaries highlighting tracking, data sharing, and privacy risks before user consent. Provides concise alerts and detailed visual insights (e.g., data flow maps) to help users make informed, privacy-safe decisions.",
      status: "COMPLETED",
      tech: ["JavaScript", "Python", "HTML", "CSS", "Browser Extension APIs", "NLP Models"],
      impact: "Real-time privacy analysis and flow maps",
      color: "from-yellow-400 to-amber-500"
    },
    {
      id: 3,
      title: "EVENTEASE",
      type: "Group Project",
      year: "2026",
      description:
        "A web-based event management system that helps users plan and organize events in one platform. It supports event creation, guest list management, budget and expense tracking, vendor browsing, invitation card generation, and automated email sending to guests. Designed to simplify event planning through a centralized and user-friendly dashboard.",
      status: "COMPLETED",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "HTML", "CSS", "Nodemailer"],
      impact: "Centralized planning and guest tracking",
      color: "from-pink-500 to-purple-500"
    },
    {
      id: 4,
      title: "MEDIPREDICT",
      type: "AI / NLP System",
      year: "2024",
      description:
        "An NLP-powered system that analyzes patient reports and predicts diseases with descriptions and recommended medicines.",
      status: "COMPLETED",
      tech: ["Python", "BERT", "NLP", "Machine Learning"],
      impact: "Automated disease prediction from reports",
      color: "from-red-400 to-pink-500"
    },
    {
      id: 5,
      title: "LOGISIM",
      type: "Desktop Application",
      year: "2024",
      description:
        "A logic circuit simulator allowing users to design, simulate, and export circuits with truth tables and Boolean expressions.",
      status: "COMPLETED",
      tech: ["Java", "Java Swing", "PostgreSQL"],
      impact: "Interactive learning for digital logic",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "RENTINEL",
      type: "Group Project",
      year: "2025",
      description:
        "Developed an end-to-end system to streamline rent tracking, tenant records, and lease management. Automated reminders and payment logs reduced manual errors by ~50% and improved organization efficiency for both tenants and landlords.",
      status: "COMPLETED",
      tech: ["Spring Boot (Java)", "React.js", "MySQL"],
      impact: "Reduced manual errors by ~50%",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 7,
      title: "AI RESUME MAKER",
      type: "AI Full-Stack Platform",
      year: "2025",
      description:
        "AI-powered resume builder with real-time preview, PDF export, authentication, and content generation.",
      status: "COMPLETED",
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Flask", "Ollama"],
      impact: "Automated resume creation with AI",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 8,
      title: "PEAKSAVER",
      type: "Desktop Application",
      year: "2024",
      description:
        "A C++ application that tracks electricity usage and optimizes peak and off-peak consumption.",
      status: "COMPLETED",
      tech: ["C++", "SQL", ".NET Framework"],
      impact: "Optimized household energy usage",
      color: "from-yellow-400 to-amber-500"
    },
    {
      id: 9,
      title: "FINAL YEAR PROJECT",
      type: "Capstone / Research Project",
      year: "2026",
      description:
        "A large-scale final year project focused on advanced problem-solving and real-world impact. Project details are intentionally kept confidential.",
      status: "IN_PROGRESS",
      tech: ["AI", "Full-Stack", "Research", "System Design"],
      impact: "Confidential — to be revealed upon completion",
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
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #000 2px, transparent 0)',
          backgroundSize: '25px 25px'
        }}
      />

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
              className="group bg-white border-4 border-black p-4 shadow-comic-sm hover:shadow-comic-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden comic-hover-pop flex flex-col justify-between"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Status Ribbon */}
                <div className={`absolute top-0 right-0 px-3 py-1 font-comic text-xs uppercase ${getStatusClass(project.status)} text-white border-l-2 border-b-2 border-black z-10`}>
                  {project.status.replace('_', ' ')}
                </div>

                {/* Gradient Header */}
                <div className={`h-20 mb-4 bg-gradient-to-r ${project.color} border-2 border-black flex items-center justify-center`}>
                  <span className="font-comic text-white text-lg tracking-wider text-center px-2 text-stroke-sm">
                    {project.title}
                  </span>
                </div>

                {/* Project Type & Year */}
                <div className="mb-3 text-center flex flex-wrap gap-2 justify-center">
                  <span className="text-xs font-bold uppercase bg-comic-black text-white px-3 py-1 inline-block border-2 border-white">
                    {project.type}
                  </span>
                  {project.year && (
                    <span className="text-xs font-bold bg-comic-yellow text-black px-3 py-1 inline-block border-2 border-black font-comic">
                      {project.year}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-center text-sm min-h-[3rem] line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
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
                <button className="w-full bg-gradient-to-r from-comic-blue to-cyan-600 text-white font-comic py-2 border-2 border-black hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  VIEW MISSION
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-xs">
            <div className="bg-white border-6 sm:border-8 border-black max-w-2xl w-full p-6 shadow-comic-lg sm:shadow-comic-xl relative max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-comic text-3xl uppercase text-stroke-sm text-comic-black">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="font-comic text-2xl bg-comic-red text-white w-10 h-10 border-4 border-black hover:bg-black hover:text-comic-red transition-colors flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className={`h-16 mb-4 bg-gradient-to-r ${selectedProject.color} border-4 border-black flex items-center justify-center`}>
                <span className="font-comic text-white text-xl tracking-wider text-stroke-sm uppercase">{selectedProject.type}</span>
              </div>

              <p className="mb-6 font-dialogue text-gray-800 text-lg leading-relaxed">{selectedProject.description}</p>

              <div className="space-y-3 font-comic text-lg border-t-4 border-black pt-4 bg-yellow-50 p-4 border-2 border-black">
                {selectedProject.year && (
                  <div className="flex justify-between border-b-2 border-dashed border-gray-300 pb-1">
                    <span className="text-gray-600">MISSION TIMELINE:</span>
                    <span className="font-bold text-comic-black">{selectedProject.year}</span>
                  </div>
                )}
                <div className="flex justify-between border-b-2 border-dashed border-gray-300 pb-1">
                  <span className="text-gray-600">MISSION STATUS:</span>
                  <span className="font-bold text-comic-red">{selectedProject.status.replace('_', ' ')}</span>
                </div>
                <div className="flex justify-between border-b-2 border-dashed border-gray-300 pb-1">
                  <span className="text-gray-600">DIRECT IMPACT:</span>
                  <span className="font-bold text-comic-blue">{selectedProject.impact}</span>
                </div>
                <div>
                  <span className="text-gray-600 block mb-2">EQUIPPED TOOLS & SYSTEMS:</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="text-sm bg-black text-white px-3 py-1 border border-white font-mono">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Counter */}
        <div className="mt-8 p-4 bg-gradient-to-r from-black to-gray-900 border-4 border-comic-yellow text-center">
          <div className="font-comic text-3xl text-white">
            <span className="text-comic-yellow">{projects.length}</span> MAJOR MISSIONS
          </div>
        </div>

      </div>
    </ComicPanel>
  );
};

export default ProjectsPanel;