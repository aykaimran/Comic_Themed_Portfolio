import React from 'react';

const ComicPanel = ({ children, className = "", title, variant = "normal" }) => {
  const getVariantStyle = () => {
    switch(variant) {
      case "important":
        return "border-[6px] border-double border-comic-red bg-gradient-to-br from-red-50 to-yellow-50";
      case "thought":
        return "border-4 border-dashed border-comic-blue bg-gradient-to-tr from-blue-50 to-white rounded-[50%]";
      case "action":
        return "border-[5px] border-comic-yellow bg-gradient-to-r from-yellow-100 to-orange-50 animate-pulse";
      default:
        return "border-4 border-comic-black bg-white";
    }
  };

  return (
    <div className={`
      relative ${getVariantStyle()}
      p-4 flex flex-col overflow-hidden
      transition-all duration-300 hover:scale-[1.02] hover:shadow-comic-lg
      group comic-hover-pop
      ${className}
    `}>
      {/* Panel Border Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-[6px] border-l-[6px] border-comic-black"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-[6px] border-r-[6px] border-comic-black"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[6px] border-l-[6px] border-comic-black"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[6px] border-r-[6px] border-comic-black"></div>
      </div>
      
      {title && (
        <div className={`
          absolute top-0 left-0 
          ${variant === "important" ? 'bg-comic-red' : 'bg-comic-yellow'} 
          border-b-[4px] border-r-[4px] border-comic-black px-4 py-2 z-10 
          shadow-comic-sm transform -rotate-2 origin-top-left 
          group-hover:rotate-0 transition-transform duration-300
        `}>
          <h2 className="font-comic text-2xl uppercase tracking-widest text-black text-stroke-thin">
            <span className="drop-shadow-md">{title}</span>
          </h2>
          {/* Title Tail */}
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-inherit transform rotate-45 border-r-[3px] border-b-[3px] border-comic-black"></div>
        </div>
      )}
      
      {/* Comic Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
           style={{
             backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)',
             backgroundSize: '15px 15px'
           }}>
      </div>
      
      <div className={`relative z-0 h-full w-full p-2 ${title ? 'pt-14 sm:pt-12' : ''}`}>
        {children}
      </div>
      
      {/* Panel Number */}
      <div className="absolute bottom-1 right-1 font-comic text-xs text-gray-400 opacity-70">
        {Math.floor(Math.random() * 9) + 1}
      </div>
    </div>
  );
};

export default ComicPanel;