import React, { useState } from 'react';
import ComicPanel from './ComicPanel';

const ContactPanel = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mission: '',
    urgency: 'normal'
  });

  const contacts = [
    { platform: "EMAIL", handle: "hero@aykaimran.dev", icon: "✉️", color: "bg-red-500" },
    { platform: "GITHUB", handle: "github.com/aykaimran", icon: "💻", color: "bg-gray-800" },
    { platform: "LINKEDIN", handle: "linkedin.com/in/aykaimran", icon: "💼", color: "bg-blue-700" },
    { platform: "TWITTER", handle: "@codehero_ayka", icon: "🐦", color: "bg-cyan-500" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Mission brief submitted:', formData);
    alert('📬 MISSION BRIEF TRANSMITTED! I\'ll contact you soon, hero!');
    setFormData({ name: '', email: '', mission: '', urgency: 'normal' });
  };

  return (
    <ComicPanel 
      title="MISSION CONTROL" 
      variant="important"
      className="bg-gradient-to-br from-blue-50 to-cyan-100 h-full"
    >
      <div className="relative z-10 h-full p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
          {/* Contact Info Side */}
          <div className="space-y-4">
            <div className="mb-4">
              <h3 className="font-comic text-2xl uppercase mb-3 text-comic-black text-center">
                <span className="bg-yellow-200 px-3 py-1 border-2 border-black">HERO NETWORK</span>
              </h3>
            </div>
            
            {contacts.map((contact, index) => (
              <div 
                key={index}
                className="bg-white border-4 border-black p-3 hover:shadow-comic-lg transition-all duration-300 hover:-translate-x-1 group"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${contact.color} border-3 border-white flex items-center justify-center group-hover:rotate-12 transition-transform`}>
                    <span className="text-2xl">{contact.icon}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="font-comic text-sm uppercase text-gray-600">{contact.platform}</div>
                    <div className="font-bold text-lg break-all">{contact.handle}</div>
                  </div>
                  <button 
                    className="font-comic text-xs bg-black text-white px-3 py-1 border-2 border-white hover:bg-comic-red transition-colors"
                    onClick={() => navigator.clipboard.writeText(contact.handle)}
                  >
                    COPY
                  </button>
                </div>
              </div>
            ))}
            
            {/* Availability Status */}
            <div className="mt-6 p-3 bg-gradient-to-r from-green-500 to-emerald-600 border-4 border-white">
              <div className="flex items-center justify-between">
                <span className="font-comic text-white text-lg">STATUS:</span>
                <span className="font-comic text-white text-xl animate-pulse">
                  🟢 AVAILABLE FOR MISSIONS
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="bg-white border-4 border-black p-4 shadow-comic-sm">
            <h3 className="font-comic text-2xl uppercase mb-4 text-center text-comic-black">
              SEND MISSION BRIEF
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-comic text-sm uppercase block mb-1">
                  CODENAME
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full border-2 border-black p-2 font-comic focus:border-comic-blue focus:ring-4 focus:ring-comic-blue/20 outline-none"
                  placeholder="Your hero name..."
                  required
                />
              </div>
              
              <div>
                <label className="font-comic text-sm uppercase block mb-1">
                  COMMUNICATION DEVICE
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full border-2 border-black p-2 font-comic focus:border-comic-blue focus:ring-4 focus:ring-comic-blue/20 outline-none"
                  placeholder="email@example.com"
                  required
                />
              </div>
              
              <div>
                <label className="font-comic text-sm uppercase block mb-1">
                  MISSION URGENCY
                </label>
                <div className="flex gap-2 mb-3">
                  {['low', 'normal', 'urgent'].map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setFormData({...formData, urgency: level})}
                      className={`font-comic text-xs px-3 py-1 border-2 border-black transition-all ${
                        formData.urgency === level 
                          ? level === 'urgent' ? 'bg-orange-500 text-white'
                          : level === 'normal' ? 'bg-yellow-500 text-black'
                          : 'bg-green-500 text-black'
                          : 'bg-gray-200'
                      }`}
                    >
                      {level.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="font-comic text-sm uppercase block mb-1">
                  MISSION DETAILS
                </label>
                <textarea
                  value={formData.mission}
                  onChange={(e) => setFormData({...formData, mission: e.target.value})}
                  className="w-full border-2 border-black p-2 font-comic focus:border-comic-blue focus:ring-4 focus:ring-comic-blue/20 outline-none h-32"
                  placeholder="Describe your mission, villain to defeat, or project to build..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-comic-red to-red-600 text-white font-comic text-xl py-3 border-4 border-black shadow-comic-sm hover:shadow-comic-lg hover:scale-105 transition-all duration-300 uppercase tracking-widest"
              >
                TRANSMIT MISSION BRIEF
              </button>
              
              <div className="text-center mt-3">
                <span className="font-comic text-xs text-gray-600">
                  RESPONSE TIME: <span className="text-comic-red font-bold">24 HOURS</span>
                </span>
              </div>
            </form>
          </div>
        </div>
        
        {/* Emergency Contact */}
        <div className="mt-2 text-center">
          <div className="inline-flex items-center gap-2 bg-black text-white px-2 py-1 border-2 border-red-500">
            <span className="animate-pulse">🚨</span>
            <span className="font-comic text-sm">EMERGENCY BUG? CALL: 1-800-CODE-HERO</span>
            <span className="animate-pulse">🚨</span>
          </div>
        </div>
      </div>
    </ComicPanel>
  );
};

export default ContactPanel;