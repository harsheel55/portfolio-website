import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiArrowRight, 
  FiArrowUpRight, 
  FiGithub, 
  FiTwitter, 
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiCommand
} from 'react-icons/fi';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import { 
  SiDotnet, 
  SiNodedotjs, 
  SiPython,
  SiMongodb, 
  SiMysql, 
  SiJavascript, 
  SiExpress
} from 'react-icons/si';

import { projects } from '../data/projects';

// --- CSS for the Marquee Animation (Injecting into component for portability) ---
const marqueeStyle = {
  animation: 'marquee 25s linear infinite',
};

const keyframes = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20 selection:text-white font-sans overflow-x-hidden">
      <style>{keyframes}</style>

      {/* --- Global Grain/Noise Texture --- */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[0]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-12 pb-24">
        
        {/* =========================================
            HERO SECTION
        ========================================= */}
        <header className="flex flex-col items-center justify-center text-center py-24 lg:py-32 space-y-8 relative">
          
          {/* Spotlight Effect */}
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

          {/* Status Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-all hover:bg-white/10 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-zinc-300">Open to work</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 animate-fade-in-up delay-100">
            Design.<br/>Develop.<br/>Deploy.
          </h1>

          <p className="max-w-xl text-lg md:text-xl text-zinc-400 leading-relaxed animate-fade-in-up delay-200">
            I'm <span className="text-white font-semibold">Harsheel Kasodariya</span>. Full Stack Developer specializing in ASP.NET Core, Node.js, and scalable backend solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up delay-300">
            <Link to="/projects" className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300">
              View Projects
              <FiArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="mailto:harsheelkasodariya2005@gmail.com" className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-full font-bold text-lg hover:bg-zinc-800 transition-colors">
              Contact Me
            </a>
          </div>
        </header>

        {/* =========================================
            INFINITE MARQUEE (STACK)
        ========================================= */}
        <div className="w-full max-w-5xl mx-auto mb-32 overflow-hidden border-y border-white/5 py-8 relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
          
          <div className="flex whitespace-nowrap w-max" style={marqueeStyle}>
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 mx-8 items-center text-zinc-500">
                <SiDotnet size={32} /> <span className="text-xl font-bold tracking-tighter">ASP.NET CORE</span>
                <SiNodedotjs size={32} /> <span className="text-xl font-bold tracking-tighter">NODE.JS</span>
                <SiPython size={32} /> <span className="text-xl font-bold tracking-tighter">PYTHON</span>
                <SiMysql size={32} /> <span className="text-xl font-bold tracking-tighter">SQL SERVER</span>
                <SiMongodb size={32} /> <span className="text-xl font-bold tracking-tighter">MONGODB</span>
                <SiJavascript size={32} /> <span className="text-xl font-bold tracking-tighter">JAVASCRIPT</span>
                <SiExpress size={32} /> <span className="text-xl font-bold tracking-tighter">EXPRESS.JS</span>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================
            THE BENTO GRID (ABOUT)
        ========================================= */}
        <section className="max-w-6xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto gap-4">
            
            {/* 1. Large Bio Card */}
            <div className="col-span-1 md:col-span-2 row-span-2 bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between group hover:border-white/10 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <FiCommand className="text-2xl" />
                </div>
                <h3 className="text-3xl font-medium tracking-tight mb-4 text-white">
                  Full Stack Developer & Backend Specialist.
                </h3>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  B.Tech IT student at CHARUSAT with hands-on experience in ASP.NET Core, Node.js, and REST API development. Passionate about building scalable backend systems and solving complex problems through code.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/about" className="text-white font-medium border-b border-white/30 hover:border-white pb-0.5 transition-all">More about me</Link>
              </div>
            </div>

            {/* 2. Map Card */}
            <div className="col-span-1 row-span-1 bg-zinc-900/40 border border-white/5 rounded-[2rem] p-6 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity grayscale group-hover:grayscale-0 duration-500 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=San+Francisco&zoom=13&size=400x400&style=feature:all|element:all|saturation:-100|lightness:-70&sensor=false')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
              <div className="relative h-full flex flex-col justify-end z-10">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Location</span>
                </div>
                <p className="text-xl font-bold flex items-center gap-2">
                  <FiMapPin /> Gujarat, India
                </p>
              </div>
            </div>

            {/* 3. Socials Grid */}
            <div className="col-span-1 row-span-1 bg-zinc-900/40 border border-white/5 rounded-[2rem] p-6 flex flex-col justify-center gap-3">
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Connect</p>
              <div className="grid grid-cols-2 gap-3">
                <a href="https://github.com/harsheel55" className="flex items-center justify-center h-12 bg-white/5 hover:bg-white hover:text-black rounded-xl transition-all duration-300">
                  <FiGithub size={20} />
                </a>
                <a href="#" className="flex items-center justify-center h-12 bg-white/5 hover:bg-[#1DA1F2] hover:text-white rounded-xl transition-all duration-300">
                  <FiTwitter size={20} />
                </a>
                <a href="https://www.linkedin.com/in/harsheel-kasodariya-22a31b253/" className="flex items-center justify-center h-12 bg-white/5 hover:bg-[#0077b5] hover:text-white rounded-xl transition-all duration-300">
                  <FiLinkedin size={20} />
                </a>
                <a href="mailto:harsheelkasodariya2005@gmail.com" className="flex items-center justify-center h-12 bg-white/5 hover:bg-green-500 hover:text-white rounded-xl transition-all duration-300">
                  <FiMail size={20} />
                </a>
              </div>
            </div>

            {/* 4. Tech Stack Mini */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 flex items-center justify-between group hover:border-white/10 transition-colors">
               <div>
                  <h4 className="text-2xl font-bold mb-1">My Toolkit</h4>
                  <p className="text-zinc-500">The daily drivers.</p>
               </div>
               <div className="flex gap-4 text-zinc-400">
                  <SiDotnet size={28} className="group-hover:text-[#512BD4] transition-colors" />
                  <SiNodedotjs size={28} className="group-hover:text-[#339933] transition-colors" />
                  <SiPython size={28} className="group-hover:text-[#3776AB] transition-colors" />
                  <SiMysql size={28} className="group-hover:text-[#4479A1] transition-colors" />
               </div>
            </div>

          </div>
        </section>

        {/* =========================================
            SELECTED WORKS - STACKING CARD EFFECT
        ========================================= */}
        <section className="max-w-6xl mx-auto mb-32">
          <div className="flex items-end justify-between mb-12 px-2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Selected Works</h2>
            <Link to="/projects" className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              See Archive <FiArrowUpRight />
            </Link>
          </div>

          <ScrollStack 
            useWindowScroll={true}
            itemDistance={600}
            stackOffset={40}
            scaleStep={0.05}
          >
            {projects.slice(0, 3).map((project) => (
              <ScrollStackItem key={project.id} itemClassName="bg-transparent">
                <div className="group cursor-pointer bg-zinc-900/40 rounded-[2rem] overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-zinc-900 overflow-hidden">
                    <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                       <a 
                         href={project.githubUrl} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="px-4 py-2 bg-white text-black rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                       >
                         View on GitHub
                       </a>
                    </div>
                  </div>

                  {/* Text Info */}
                  <div className="p-8 flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-zinc-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-zinc-500 max-w-lg">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {project.technologies.slice(0, 3).map(tag => (
                        <span key={tag} className="px-3 py-1 border border-white/10 rounded-full text-xs text-zinc-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>

          <div className="mt-12 text-center md:hidden">
             <Link to="/projects" className="inline-block border-b border-white text-white pb-1">View All Projects</Link>
          </div>
        </section>

        {/* =========================================
            MINIMAL CTA
        ========================================= */}
        <section className="py-32 text-center max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            Let's build the <br/> <span className="text-zinc-500">next big thing.</span>
          </h2>
          <Link to="/contact">
            <button className="px-10 py-5 bg-white text-black rounded-full text-xl font-bold hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
              Start a Project
            </button>
          </Link>
        </section>

      </div>
    </div>
  );
};