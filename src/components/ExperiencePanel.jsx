import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Rocket } from 'lucide-react';
import ComicPanel from './ComicPanel';

const ExperiencePanel = () => {
  const experiences = [
    {
      year: "Jun 2025 – Jul 2025",
      title: "MERN STACK INTERN",
      company: "Code5 Technologies · Lahore",
      description:
        "Built admin dashboards and backend REST APIs. Integrated AI-powered resume generation using MERN stack with Flask + Ollama.",
      skills: ["React", "Node.js", "Express", "MongoDB", "Flask", "Ollama"],
      mascot: "/Comic_Themed_Portfolio/Mern_stack_Mascot.png",
      color: "from-red-500 to-orange-500"
    },
    {
      year: "Dec 2024 – Present",
      title: "CODE MENTOR",
      company: "Polymath Kids · Lahore",
      description:
        "Teaching C++ fundamentals and web development, guiding young minds through logic, problem-solving, and coding best practices.",
      skills: ["C++", "HTML", "CSS", "JavaScript", "Teaching"],
      mascot: "/Comic_Themed_Portfolio/Teacher_Mascot.png",
      color: "from-blue-500 to-purple-500"
    },
    {
      year: "Aug 2025 – Present",
      title: "LAB DEMONSTRATOR",
      company: "FAST-NUCES · Lahore",
      description:
        "Assisting students in Assembly Language labs, debugging low-level logic, and strengthening core computing concepts.",
      skills: ["Assembly Language", "Computer Architecture", "Debugging"],
      mascot: "/Comic_Themed_Portfolio/Mern_stack_Mascot.png",
      color: "from-green-500 to-teal-500"
    },
    {
      year: "Aug 2025 – Present",
      title: "TEACHER ASSISTANT",
      company: "FAST-NUCES · Lahore",
      description:
        "Assist students in understanding Database, Assembly Language and Digital Logic Design concepts.",
      skills: ["Database", "Assembly Language", "Digital Logic Design"],
      mascot: "/Comic_Themed_Portfolio/Teacher_Mascot.png",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  /* ================= PAGINATION LOGIC ================= */
  const ITEMS_PER_PAGE = 2;
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(experiences.length / ITEMS_PER_PAGE);

  const visibleExperiences = experiences.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  /* =================================================== */

  return (
    <ComicPanel
      title="HERO'S JOURNEY"
      variant="important"
      className="bg-gradient-to-br from-purple-50 to-blue-50 h-full"
    >
      {/* Background dots */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, #000 2px, transparent 0)',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="relative z-10 h-full p-3 sm:p-4 md:p-6">
        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-2 bg-gradient-to-b from-comic-red via-comic-yellow to-comic-blue border-2 border-black" />

          <div className="space-y-8 ml-6 sm:ml-12">
            {visibleExperiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline Node */}
                <div className="absolute -left-[28px] sm:-left-14 top-6 w-6 h-6 sm:w-8 sm:h-8 bg-white border-4 border-black rounded-full z-10 group-hover:scale-125 transition-transform" />

                {/* Card */}
                <div className="bg-white border-4 border-black p-4 shadow-comic-sm hover:shadow-comic-lg transition-all duration-300 group-hover:-translate-x-2 animate-[flipIn_0.4s_ease]">
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Mascot */}
                    <div className="md:w-1/4 flex-shrink-0">
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-30 rounded-full blur-md`}
                        />
                        <img
                          src={exp.mascot}
                          alt={`${exp.title} Mascot`}
                          className="relative z-10 w-full h-full object-contain group-hover:scale-110 transition-transform"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:w-3/4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <div>
                          <h3 className="font-comic text-xl md:text-2xl uppercase tracking-wide">
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

                      <p className="text-gray-600 mb-3 text-sm sm:text-base">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="font-comic text-xs bg-comic-blue/20 border-2 border-comic-blue px-3 py-1 hover:bg-comic-blue hover:text-white transition-colors"
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

        {/* ================= PAGINATION BUTTONS ================= */}
        <div className="mt-6 flex justify-center items-center gap-4">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className={`font-comic px-4 py-2 border-4 border-black transition-all flex items-center gap-1.5
              ${
                page === 0
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-comic-blue text-white hover:scale-105 cursor-pointer"
              }`}
          >
            <ArrowLeft className="w-4 h-4 shrink-0" strokeWidth={2.5} />
            <span>PREV</span>
          </button>

          <span className="font-comic text-lg bg-white border-4 border-black px-4 py-1">
            PAGE {page + 1} / {totalPages}
          </span>

          <button
            onClick={() =>
              setPage((p) => Math.min(p + 1, totalPages - 1))
            }
            disabled={page === totalPages - 1}
            className={`font-comic px-4 py-2 border-4 border-black transition-all flex items-center gap-1.5
              ${
                page === totalPages - 1
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-comic-red text-white hover:scale-105 cursor-pointer"
              }`}
          >
            <span>NEXT</span>
            <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.5} />
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-comic-red to-comic-yellow border-4 border-black px-6 py-3">
            <span className="font-comic text-xl text-white">
              JOURNEY CONTINUES...
            </span>
            <Rocket className="w-5 h-5 text-white animate-bounce" strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </ComicPanel>
  );
};

export default ExperiencePanel;
