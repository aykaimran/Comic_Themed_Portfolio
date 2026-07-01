import React from 'react';
import HomePanel from './components/HomePanel';
import AboutPanel from './components/AboutPanel';
import ProjectsPanel from './components/ProjectsPanel';
import ExperiencePanel from './components/ExperiencePanel';
import AchievementsPanel from './components/AchievementsPanel';
import ContactPanel from './components/ContactPanel';

export default function AppLayout() {
  return (
    
    <div className="min-h-screen bg-[#eeebe3] py-3 sm:py-6 md:py-8 lg:py-12 px-2 sm:px-4 comic-print">
      {/* Comic Dot Pattern Background */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0" 
           style={{
             backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)',
             backgroundSize: '20px 20px'
           }}>
      </div>
      {/* Comic Page Number and Copyright */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 font-comic text-xs text-gray-600 z-20 bg-white/80 px-2 py-1 border-2 border-black">
          © AYKA STUDIOS 2026
        </div>
      {/* Comic Page Container */}
      <div className="relative bg-white border-4 sm:border-[10px] border-black w-full max-w-7xl mx-auto shadow-[10px_10px_0_0_#000] sm:shadow-[20px_20px_0_0_#000] overflow-hidden comic-page-flip transform-gpu">
        
        {/* Paper Texture Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/20 to-white opacity-30 pointer-events-none z-10"></div>
        
        {/* Comic Header with Issue Info */}
        <div className="border-b-4 sm:border-b-[6px] border-[#1a1a1a] bg-gradient-to-r from-[#7a2218] via-[#8b6914] to-[#164f73] p-2 sm:p-3 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center comic-header">
          <div className="font-comic text-sm sm:text-lg uppercase tracking-widest text-white text-stroke-sm flex items-center gap-3 mb-2 sm:mb-0">
            <span className="bg-black px-2 sm:px-4 py-1 sm:py-2 border-2 border-white">ISSUE #1</span>
            <span className="hidden md:inline text-xl">•</span>
            <span className="hidden md:inline text-lg">THE ORIGIN STORY</span>
          </div>
          <div className="font-comic text-xl sm:text-2xl md:text-3xl uppercase font-bold text-white text-stroke comic-title text-center">
            <span className="text-white">AYKA IMRAN</span>
            <span className="block text-base sm:text-lg md:text-xl mt-1">FULL-STACK DEVELOPER</span>
          </div>
          <div className="font-comic text-sm sm:text-lg uppercase tracking-widest text-white text-stroke-sm mt-2 sm:mt-0">
            <span className="bg-black px-2 sm:px-4 py-1 sm:py-2 border-2 border-white">PAGE 1</span>
          </div>
        </div>

        {/* Comic Page Grid */}
        <div className="p-3 sm:p-4 md:p-6 lg:p-8 comic-grid-bg">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            
            {/* PANEL 1: HERO INTRODUCTION (Full Width Top) */}
            <div className="col-span-1 md:col-span-3 lg:col-span-4 min-h-fit md:min-h-[400px] lg:min-h-[450px] comic-panel-frame comic-panel-frame-wide mb-4 md:mb-6">
              <div className="relative h-full">
                <HomePanel />
              </div>
            </div>

            {/* PANEL 2: ORIGIN STORY */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 min-h-fit md:min-h-[350px] comic-panel-frame comic-hover-shake">
              <div className="relative h-full">
                <AboutPanel />
              </div>
            </div>

            {/* PANEL 3: EXPERIENCE TIMELINE */}
            <div className="col-span-1 md:col-span-1 lg:col-span-2 min-h-fit md:min-h-[350px] comic-panel-frame">
              <div className="relative h-full">
                <ExperiencePanel />
              </div>
            </div>

            {/* PANEL 4: PROJECTS SHOWCASE */}
            <div className="col-span-1 md:col-span-3 lg:col-span-4 min-h-fit md:min-h-[400px] comic-panel-frame comic-panel-frame-wide mt-4">
              <div className="relative h-full">
                <ProjectsPanel />
              </div>
            </div>

            {/* PANEL 5: ACHIEVEMENTS & SKILLS */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 min-h-fit md:min-h-[300px] comic-panel-frame">
              <div className="relative h-full">
                <AchievementsPanel />
              </div>
            </div>

            {/* PANEL 6: CONTACT & MISSION CONTROL */}
            <div className="col-span-1 md:col-span-1 lg:col-span-2 min-h-fit md:min-h-[300px] comic-panel-frame">
              <div className="relative h-full">
                <ContactPanel />
              </div>
            </div>

            {/* PANEL 7: FOOTER STATS */}
            <div className="col-span-1 md:col-span-3 lg:col-span-4 min-h-fit md:min-h-[150px] comic-panel-frame mt-4 bg-gradient-to-r from-[#1a1a1a] via-[#2c2c2c] to-[#1a1a1a]">
              <div className="relative h-full p-4 md:p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full">
                  <div className="text-center border-r-2 border-gray-700 pr-4 flex flex-col justify-center">
                    <div className="font-comic text-3xl sm:text-4xl text-comic-yellow">50+</div>
                    <div className="font-comic text-xs sm:text-sm uppercase text-gray-400">PROJECTS</div>
                    <div className="text-[10px] sm:text-xs text-gray-500 mt-1">COMPLETED</div>
                  </div>
                  <div className="text-center border-r-0 md:border-r-2 border-gray-700 pr-4 flex flex-col justify-center">
                    <div className="font-comic text-3xl sm:text-4xl text-comic-red">100%</div>
                    <div className="font-comic text-xs sm:text-sm uppercase text-gray-400">SUCCESS</div>
                    <div className="text-[10px] sm:text-xs text-gray-500 mt-1">RATE</div>
                  </div>
                  <div className="text-center border-r-2 border-gray-700 pr-4 flex flex-col justify-center">
                    <div className="font-comic text-3xl sm:text-4xl text-comic-blue">24/7</div>
                    <div className="font-comic text-xs sm:text-sm uppercase text-gray-400">AVAILABLE</div>
                    <div className="text-[10px] sm:text-xs text-gray-500 mt-1">FOR MISSIONS</div>
                  </div>
                  <div className="text-center flex flex-col justify-center">
                    <div className="font-comic text-4xl sm:text-5xl text-amber-600">∞</div>
                    <div className="font-comic text-xs sm:text-sm uppercase text-gray-400">POSSIBILITIES</div>
                    <div className="text-[10px] sm:text-xs text-gray-500 mt-1">UNLOCKED</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Comic Footer - Added padding to prevent overlap */}
        <div className="border-t-4 sm:border-t-[8px] border-black bg-gradient-to-r from-gray-900 via-black to-gray-900 p-4 px-8 relative">
          

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-2">
            <div className="font-comic text-xs sm:text-sm uppercase text-white/80">
              <span className="text-comic-yellow">PUBLISHER:</span> AYKA STUDIOS
            </div>
            <div className="font-comic text-lg sm:text-xl md:text-2xl uppercase font-bold text-white text-center">
              <span className="flex items-center gap-2">
                <span className="text-comic-red">TO</span>
                <span className="text-comic-yellow">BE</span>
                <span className="text-comic-blue">CONTINUED</span>
                <span className="text-white">...</span>
              </span>
            </div>
            <div className="font-comic text-xs sm:text-sm uppercase text-white/80 text-center md:text-right">
              NEXT: <span className="text-comic-yellow">"THE DEBUGGING CRUSADE"</span>
            </div>
          </div>
          
          {/* Page Tabs - Adjusted margin */}
          <div className="flex justify-center gap-2 mt-6">
            {['COVER', '01', '02', '03', 'BACK'].map((page, index) => (
              <div 
                key={page}
                className={`font-comic text-xs px-3 py-1 border-2 ${page === '01' ? 'bg-comic-yellow text-black border-white' : 'bg-gray-800 text-white border-gray-700'}`}
              >
                {page}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom right corner details - Moved to left side */}
        <div className="absolute bottom-2 sm:bottom-4 left-4 sm:left-6 font-comic text-[10px] sm:text-xs text-gray-400 flex items-center gap-2">
          <span className="bg-black/25 px-2 py-1 border border-gray-700">PRICE: FREE</span>
          <span className="text-gray-600">|</span>
          <span>ALL AGES</span>
        </div>
      </div>
    </div>
  )
}