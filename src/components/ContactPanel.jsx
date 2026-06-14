import React, { useState } from 'react';
import { Mail, Globe, Send, CheckCircle2 } from 'lucide-react';
import ComicPanel from './ComicPanel';

const GithubIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const ContactPanel = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mission: '',
    urgency: 'normal'
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const contacts = [
    {
      platform: "EMAIL",
      label: "Signal me via email",
      url: "mailto:aykaimran28@gmail.com",
      copyText: "aykaimran28@gmail.com",
      icon: Mail,
      color: "bg-red-500"
    },
    {
      platform: "GITHUB",
      label: "Peek into my code lair",
      url: "https://github.com/aykaimran",
      copyText: "https://github.com/aykaimran",
      icon: GithubIcon,
      color: "bg-gray-800"
    },
    {
      platform: "LINKEDIN",
      label: "Professional hero profile",
      url: "https://linkedin.com/in/ayka-imran",
      copyText: "https://linkedin.com/in/ayka-imran",
      icon: LinkedinIcon,
      color: "bg-blue-700"
    },
    {
      platform: "PORTFOLIO",
      label: "Visit my hero portfolio",
      url: "https://aykaimran.github.io/portfolio/",
      copyText: "https://aykaimran.github.io/portfolio/",
      icon: Globe,
      color: "bg-purple-500"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Create FormData object from the form data
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.mission);
    formDataToSend.append('_subject', `New Mission Brief from ${formData.name}`);
    formDataToSend.append('_replyto', formData.email);

    try {
      // Using FormSubmit.co - works with static sites on GitHub Pages
      await fetch('https://formsubmit.co/ajax/aykaimran28@gmail.com', {
        method: 'POST',
        body: formDataToSend,
      });

      setSubmitted(true);
      // Reset form
      setFormData({ name: '', email: '', mission: '', urgency: 'normal' });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      alert("TRANSMISSION FAILED! Please try again or contact me directly via email.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
                  <contact.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
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
              <span className="font-comic text-white text-xl flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-200 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                <span>AVAILABLE FOR MISSIONS</span>
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
              name="name"
              placeholder="Your hero name..."
              value={formData.name}
              onChange={handleChange}
              className="w-full border-2 border-black p-2 font-comic"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 border-black p-2 font-comic"
              required
            />

            <textarea
              name="mission"
              placeholder="Describe your mission..."
              value={formData.mission}
              onChange={handleChange}
              className="w-full h-32 border-2 border-black p-2 font-comic"
              required
            />

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-gradient-to-r from-comic-red to-red-600 text-white font-comic text-xl py-3 border-4 border-black transition-all flex items-center justify-center gap-2 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
              }`}
            >
              <Send className="w-5 h-5" strokeWidth={2.5} />
              <span>{isLoading ? 'TRANSMITTING...' : 'TRANSMIT MISSION BRIEF'}</span>
            </button>

            {submitted && (
              <div className="mt-4 p-3 bg-green-100 border-4 border-green-500 text-center font-comic flex flex-col items-center justify-center gap-1.5">
                <div className="flex items-center gap-1.5 text-green-700">
                  <CheckCircle2 className="w-5 h-5" strokeWidth={2.5} />
                  <span className="font-bold">MISSION BRIEF RECEIVED!</span>
                </div>
                <span className="block text-sm text-green-600">
                  I'll contact you soon, hero!
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </ComicPanel>
  );
};

export default ContactPanel;