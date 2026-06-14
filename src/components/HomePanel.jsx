import React from 'react';
import ComicPanel from './ComicPanel';

const HomePanel = () => {
  const scrollToMissions = () => {
    const section = document.getElementById('start-button');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <ComicPanel className="row-span-2 col-span-2 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #ea3323 2px, transparent 0)',
          backgroundSize: '30px 30px'
        }}>
      </div>

      <div className="relative h-full flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
        {/* Left Column: Text Content */}
        <div className="md:w-1/2 p-4 md:p-8">
          {/* Speech Bubble */}
          <div className="relative bg-white border-4 border-comic-black p-6 md:p-8 rounded-[40px] mb-8 max-w-lg shadow-comic-lg transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <h1 className="font-comic text-4xl md:text-6xl lg:text-7xl text-comic-black leading-[0.9] tracking-wide mb-4">
              THE ADVENTURES OF
              <span className="text-comic-red block mt-2 text-stroke drop-shadow-md">Ayka Imran</span>
            </h1>
            <p className="font-comic text-xl md:text-2xl text-gray-700 mt-4">
              Full-Stack Developer & Digital Crusader
            </p>

            {/* Tail of speech bubble */}
            <div className="absolute -bottom-6 left-1/4 w-0 h-0 
                border-l-[20px] border-l-transparent
                border-r-[20px] border-r-transparent
                border-t-[40px] border-t-comic-black">
            </div>
            <div className="absolute -bottom-[22px] left-1/4 w-0 h-0 
                border-l-[16px] border-l-transparent
                border-r-[16px] border-r-transparent
                border-t-[36px] border-t-white">
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-8" id="start-button">
            <button
              onClick={scrollToMissions}
              className="font-comic text-xl bg-comic-red text-white border-4 border-black px-6 py-3 shadow-comic-sm hover:shadow-comic-lg hover:scale-105 transition-all uppercase tracking-wider"
            >
              START ADVENTURE!
            </button>
            <a
              href="/Comic_Themed_Portfolio/Ayka Imran Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-comic text-xl bg-comic-blue text-white border-4 border-black px-6 py-3 shadow-comic-sm hover:shadow-comic-lg hover:scale-105 transition-all uppercase tracking-wider inline-block"
            >
              VIEW RESUME
            </a>
          </div>
        </div>

        {/* Right Column: Mascot Hero Image */}
        <div className="md:w-1/2 flex justify-center items-center p-4">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Comic burst effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-red-400/20 rounded-full animate-pulse"></div>

            {/* Main mascot image */}
            <div className="relative z-10 w-full h-full">
              <img
                src="/Comic_Themed_Portfolio/mascot2.png"
                alt="Mascot Hero"
                className="w-full h-full object-contain drop-shadow-2xl animate-float"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23fbb03b'/%3E%3Ctext x='50%25' y='50%25' font-family='Comic Sans MS' font-size='48' text-anchor='middle' dy='.3em' fill='black'%3EHERO%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>

            {/* Comic action words */}
            <div className="absolute -top-8 -right-8 font-comic text-5xl text-comic-red animate-pow rotate-12">
              POW!
            </div>
            <div className="absolute -bottom-8 -left-8 font-comic text-4xl text-comic-blue animate-bam -rotate-12">
              BAM!
            </div>
          </div>
        </div>
      </div>
    </ComicPanel>
  );
};

export default HomePanel;