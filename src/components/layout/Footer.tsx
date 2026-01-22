import React from "react";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowUp,
  FiHeart,
} from "react-icons/fi";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, url: "https://github.com/harsheel55", label: "GitHub" },
    { icon: FiLinkedin, url: "https://www.linkedin.com/in/harsheel-kasodariya-22a31b253/", label: "LinkedIn" },
    { icon: FiTwitter, url: "https://twitter.com/", label: "Twitter" },
    { icon: FiMail, url: "mailto:harsheelkasodariya2005@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-24 w-full bg-zinc-950 text-zinc-300 overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-50" />

      {/* Background Ambience (Glows) */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="font-bold text-white text-lg relative z-10">H</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Harsheel
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-6">
              Full Stack Developer specializing in ASP.NET Core, Node.js, and REST APIs. 
              B.Tech IT student at CHARUSAT passionate about building scalable backend solutions.
            </p>
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-green-400">Open to work</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">
              Navigation
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-indigo-500 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">
              Connect
            </h3>
            <div className="grid grid-cols-4 gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group relative flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                  >
                    <Icon size={18} className="relative z-10 transition-transform group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
            
            {/* Simple Contact Text */}
            <div className="mt-6">
              <p className="text-xs text-zinc-500">
                Have a project in mind? <br />
                <a href="mailto:hello@example.com" className="text-zinc-300 hover:text-indigo-400 underline decoration-zinc-700 hover:decoration-indigo-400 underline-offset-4 transition-all">
                  Let's talk about it.
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-xs text-center md:text-left">
            © {currentYear} Your Name. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-xs text-zinc-500">
              Made with <FiHeart className="text-red-500/80 fill-red-500/20" size={12} /> and React
            </span>
            
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="Back to top"
            >
              <FiArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};