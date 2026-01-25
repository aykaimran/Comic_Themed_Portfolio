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
    {
      platform: "EMAIL",
      label: "Signal me via email",
      url: "mailto:aykaimran28@gmail.com",
      copyText: "aykaimran28@gmail.com",
      icon: "✉️",
      color: "bg-red-500"
    },
    {
      platform: "GITHUB",
      label: "Peek into my code lair",
      url: "https://github.com/aykaimran",
      copyText: "https://github.com/aykaimran",
      icon: "💻",
      color: "bg-gray-800"
    },
    {
      platform: "LINKEDIN",
      label: "Professional hero profile",
      url: "https://linkedin.com/in/ayka-imran",
      copyText: "https://linkedin.com/in/ayka-imran",
      icon: "💼",
      color: "bg-blue-700"
    },
    {
      platform: "PORTFOLIO",
      label: "Visit my hero portfolio",
      url: "https://aykaimran.github.io/portfolio/",
      copyText: "https://aykaimran.github.io/portfolio/",
      icon: "🖥️",
      color: "bg-purple-500"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Mission brief submitted:', formData);
    alert("📬 MISSION BRIEF TRANSMITTED! I'll contact you soon!");
    setFormData({ name: '', email: '', mission: '', urgency: 'normal' });
  };

  return (
    <ComicPanel
      title="MISSION CONTROL"
      variant="important"
      className="bg-gradient-to-br from-blue-50 to-cyan-100 h-full"
    >
      <div className="relative z-10 h-full p-4 md:p-6 flex flex-col gap-6">

        {/* Contact Links */}
        <div className="space-y-4">
          <h3 className="font-comic text-2xl uppercase mb-3 text-comic-black text-center">
            <span className="bg-yellow-200 px-3 py-1 border-2 border-black">
              HERO NETWORK
            </span>
          </h3>

          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black p-3 hover:shadow-comic-lg transition-all duration-300 hover:-translate-x-1 group"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 ${contact.color} border-3 border-white flex items-center justify-center group-hover:rotate-12 transition-transform`}
                >
                  <span className="text-2xl">{contact.icon}</span>
                </div>

                <div className="flex-grow min-w-0">
                  <div className="font-comic text-sm uppercase text-gray-600">
                    {contact.platform}
                  </div>
                  <a
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={contact.copyText}
                    className="font-bold text-lg truncate block hover:underline"
                  >
                    {contact.label}
                  </a>
                </div>

                <button
                  className="font-comic text-xs bg-black text-white px-3 py-1 border-2 border-white hover:bg-comic-red transition-colors"
                  onClick={() => navigator.clipboard.writeText(contact.copyText)}
                >
                  COPY
                </button>
              </div>
            </div>
          ))}

          {/* Status */}
          <div className="mt-6 p-3 bg-gradient-to-r from-green-500 to-emerald-600 border-4 border-white">
            <div className="flex items-center justify-between">
              <span className="font-comic text-white text-lg">STATUS:</span>
              <span className="font-comic text-white text-xl animate-pulse">
                🟢 AVAILABLE FOR MISSIONS
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white border-4 border-black p-4 shadow-comic-sm">
          <h3 className="font-comic text-2xl uppercase mb-4 text-center text-comic-black">
            SEND MISSION BRIEF
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your hero name..."
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border-2 border-black p-2 font-comic"
              required
            />

            <input
              type="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border-2 border-black p-2 font-comic"
              required
            />

            <textarea
              placeholder="Describe your mission..."
              value={formData.mission}
              onChange={(e) => setFormData({ ...formData, mission: e.target.value })}
              className="w-full h-32 border-2 border-black p-2 font-comic"
              required
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-comic-red to-red-600 text-white font-comic text-xl py-3 border-4 border-black hover:scale-105 transition-all"
            >
              TRANSMIT MISSION BRIEF
            </button>
          </form>
        </div>
      </div>
    </ComicPanel>
  );
};

export default ContactPanel;
