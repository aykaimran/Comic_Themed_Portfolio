import React, { useState } from 'react';
import { MessageSquare, Sun, Moon, Zap, Rocket, Search } from 'lucide-react';
import ComicPanel from './ComicPanel';

const AboutPanel = () => {
    const [isRevealed, setIsRevealed] = useState(false);
    return (
        <ComicPanel title="THE ORIGIN STORY" className="bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 h-full">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #00aeef 2px, transparent 0)',
                    backgroundSize: '30px 30px'
                }}>
            </div>

            <div className="relative z-10 p-4 md:p-6 h-full flex flex-col">
                {/* Top Section: Main Quote */}
                <div className="mb-6 md:mb-8">
                    <div className="relative bg-white border-4 border-comic-black shadow-comic-lg p-4 md:p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-500 max-w-2xl mx-auto">
                        <div className="absolute -top-4 -left-4 w-8 h-8 bg-comic-yellow border-4 border-black rounded-full flex items-center justify-center">
                            <MessageSquare className="w-5 h-5 text-black" strokeWidth={2.5} />
                        </div>
                        <p className="font-comic text-2xl md:text-3xl lg:text-4xl font-bold uppercase italic text-center text-comic-black leading-tight">
                            "It all started with<br />
                            <span className="text-comic-red">a single line of code...</span>"
                        </p>
                    </div>
                </div>

                {/* Middle Section: Two Columns */}
                <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
                    {/* Left Column: Day Identity */}
                    <div className="bg-gradient-to-br from-white to-blue-50 border-4 border-comic-blue shadow-comic-sm p-4 md:p-6 flex flex-col">
                        <div className="mb-4 text-center">
                            <div className="inline-block bg-comic-blue text-white font-comic text-lg uppercase px-4 py-2 border-2 border-black mb-3">
                                <span className="flex items-center gap-1.5 justify-center">
                                    <Sun className="w-5 h-5 text-yellow-300 fill-yellow-300" strokeWidth={2.5} />
                                    BY DAY
                                </span>
                            </div>
                        </div>

                        <div className="flex-grow flex flex-col items-center justify-center">
                            <div className="relative w-40 h-40 mb-4">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full blur-xl opacity-30"></div>
                                <img
                                    src="/Comic_Themed_Portfolio/mascot6.png" 
                                    alt="Developer Mascot"
                                    className="relative z-10 w-full h-full object-contain drop-shadow-lg"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Ccircle cx='80' cy='80' r='80' fill='%2300aeef'/%3E%3Ctext x='50%25' y='48%25' font-family='Comic Sans MS' font-weight='bold' font-size='56' text-anchor='middle' dy='.3em' fill='white'%3E&lt;/&gt;%3C/text%3E%3C/svg%3E";
                                    }}
                                />
                                {/* Code symbols floating around */}
                                <div className="absolute -top-2 -left-2 z-20 font-mono bg-white border-2 border-black px-2 py-1 text-sm animate-bounce">
                                    {"<div>"}
                                </div>
                                <div className="absolute -bottom-2 -right-2 z-20 font-mono bg-black text-white border-2 border-white px-2 py-1 text-sm animate-bounce delay-100">
                                    {"{}"}
                                </div>
                            </div>

                            <div className="text-center">
                                <h3 className="font-comic text-2xl md:text-3xl text-comic-black mb-2">
                                    <span className="font-bold text-comic-blue underline decoration-4 decoration-comic-yellow">Developer</span>
                                </h3>
                                <p className="font-comic text-lg text-gray-700">
                                    Crafting elegant solutions<br />
                                    with clean, semantic code
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2 justify-center">
                            {['React', 'TypeScript', 'Node.js', 'UI/UX'].map((skill, i) => (
                                <span key={i} className="font-comic text-xs bg-blue-100 border-2 border-blue-400 px-3 py-1">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Night Identity */}
                    <div className="bg-gradient-to-br from-black to-gray-900 border-4 border-comic-red shadow-comic-sm p-4 md:p-6 flex flex-col">
                        <div className="mb-4 text-center">
                            <div className="inline-block bg-comic-red text-white font-comic text-lg uppercase px-4 py-2 border-2 border-white mb-3">
                                <span className="flex items-center gap-1.5 justify-center">
                                    <Moon className="w-5 h-5 text-yellow-200 fill-yellow-200" strokeWidth={2.5} />
                                    BY NIGHT
                                </span>
                            </div>
                        </div>

                        <div className="flex-grow flex flex-col items-center justify-center">
                            <div className="relative w-40 h-40 mb-4">
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-600 rounded-full blur-xl opacity-30"></div>
                                <img
                                    src="/Comic_Themed_Portfolio/mascot7.png" 
                                    alt="Superhero Mascot"
                                    className="relative z-10 w-full h-full object-contain drop-shadow-lg"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Ccircle cx='80' cy='80' r='80' fill='%23ea3323'/%3E%3Ctext x='50%25' y='48%25' font-family='Comic Sans MS' font-weight='bold' font-size='38' text-anchor='middle' dy='.3em' fill='white'%3EHERO%3C/text%3E%3C/svg%3E";
                                    }}
                                />
                                {/* Action words */}
                                <div className="absolute -top-4 -right-4 font-comic text-xl text-yellow-300 animate-pow">
                                    POW!
                                </div>
                                <div className="absolute -bottom-4 -left-4 font-comic text-xl text-cyan-300 animate-bam">
                                    BAM!
                                </div>
                            </div>

                            <div className="text-center">
                                <h3 className="font-comic text-2xl md:text-3xl text-white text-stroke-thin mb-2">
                                    <span className="text-yellow-300">BUG-SQUASHING<br />SUPERHERO!</span>
                                </h3>
                                <p className="font-comic text-lg text-gray-300">
                                    Battling bugs &<br />
                                    saving the digital world
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2 justify-center">
                            {['Debugging', 'Optimization', 'Security', 'Problem-Solving'].map((power, i) => (
                                <span key={i} className="font-comic text-xs bg-red-900 border-2 border-red-600 text-white px-3 py-1">
                                    {power}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Mission Statement */}
                <div className="bg-gradient-to-r from-yellow-100 via-amber-100 to-orange-100 border-4 border-black shadow-comic-sm p-4 md:p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                        <div className="w-20 h-20 flex-shrink-0">
                            <div className="relative w-full h-full">
                                <img
                                    src="/mascot-coffee.png" 
                                    alt="Coffee Mascot"
                                    className="w-full h-full object-contain animate-float"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Ccircle cx='40' cy='40' r='40' fill='%23fbb03b'/%3E%3Ctext x='50%25' y='48%25' font-family='Comic Sans MS' font-weight='bold' font-size='20' text-anchor='middle' dy='.3em' fill='black'%3EFUEL%3C/text%3E%3C/svg%3E";
                                    }}
                                />
                            </div>
                        </div>

                        <div className="text-center md:text-left flex-grow">
                            <h4 className="font-comic text-2xl md:text-3xl text-black uppercase mb-2">
                                MISSION STATEMENT
                            </h4>
                            <p className="font-comic text-xl text-gray-800">
                                Turning <span className="font-bold text-brown-800">caffeine</span> into clean, semantic code.<br />
                                <span className="font-bold text-comic-red">Saving the web one div at a time!</span>
                                <Zap className="w-5 h-5 inline text-comic-red animate-pulse ml-2" strokeWidth={2.5} />
                            </p>
                        </div>

                        <div className="flex-shrink-0">
                            <div className="animate-bounce">
                                <Rocket className="w-10 h-10 text-comic-red" strokeWidth={2.5} />
                            </div>
                        </div>
                    </div>

                    {/* Stats Bar */}
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
                        <div className="bg-white border-2 border-black p-2">
                            <div className="font-comic text-2xl text-comic-blue">1000+</div>
                            <div className="font-comic text-xs uppercase font-bold">Bugs Squashed</div>
                        </div>
                        <div className="bg-white border-2 border-black p-2">
                            <div className="font-comic text-2xl text-comic-red">50+</div>
                            <div className="font-comic text-xs uppercase font-bold">Projects</div>
                        </div>
                        <div className="bg-white border-2 border-black p-2">
                            <div className="font-comic text-2xl text-comic-yellow">∞</div>
                            <div className="font-comic text-xs uppercase font-bold">Cups of Coffee</div>
                        </div>
                    </div>
                </div>

                {/* Secret Identity Reveal (Small Easter Egg) */}
                <div className="mt-4 text-center">
                    {!isRevealed ? (
                        <button
                            onClick={() => setIsRevealed(true)}
                            className="font-comic text-sm bg-black/10 border-2 border-dashed border-gray-400 px-4 py-2 text-gray-600 hover:bg-black/20 transition-all hover:scale-105 active:scale-95"
                        >
                            <span className="flex items-center gap-1.5 justify-center">
                                <Search className="w-4 h-4 text-gray-500" strokeWidth={2.5} />
                                Click to reveal secret identity...
                            </span>
                        </button>
                    ) : (
                        /* The Revealed Image - Shown when isRevealed is true */
                        <div className="relative animate-in fade-in zoom-in duration-500 flex flex-col items-center">
                            <div className="relative bg-white border-4 border-black p-2 shadow-comic-sm transform -rotate-2">
                                <img
                                    src="/Comic_Themed_Portfolio/mascot9.png" 
                                    alt="Real Identity"
                                    className="w-48 h-64 object-cover border-2 border-black"
                                />
                                <div className="absolute -top-3 -right-3 bg-comic-red text-white text-xs font-bold px-2 py-1 border-2 border-black rotate-12">
                                    IT'S ME!
                                </div>
                            </div>
                            <button
                                onClick={() => setIsRevealed(false)}
                                className="mt-2 font-comic text-xs text-gray-500 underline hover:text-comic-red"
                            >
                                Hide again...
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </ComicPanel>
    );
};

export default AboutPanel;