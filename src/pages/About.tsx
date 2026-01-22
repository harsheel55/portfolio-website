import React from 'react';
import { 
    FiDownload, 
    FiBriefcase, 
    FiAward, 
    FiUser, 
    FiMapPin, 
    FiCoffee, 
    FiSmile, 
    FiActivity 
} from 'react-icons/fi';

export const About: React.FC = () => {
    // --- Data ---
    const experiences = [
        {
            title: 'Node.js Developer Intern',
            company: 'Celebal Technologies Pvt. Ltd., Jaipur',
            period: 'May 2025 - Jun 2025',
            description: 'Engineered and integrated 8+ RESTful APIs using Node.js and Express.js for scalable backend services. Optimized API performance, achieving a 30–40% reduction in response time after React frontend integration.',
        },
        {
            title: 'Android Developer Intern',
            company: 'Belymon Infotech, Surat',
            period: 'May 2024 - Jul 2024',
            description: 'Developed a Flutter-based weather application delivering real-time forecasts for 10+ cities via REST APIs. Improved data reliability and user experience by eliminating manual refresh mechanisms.',
        },
    ];

    const education = [
        {
            degree: 'B.Tech in Information Technology',
            institution: 'Charotar University of Science and Technology (CHARUSAT)',
            period: 'Oct 2022 - Jun 2026',
            description: 'CGPA: 8.50/10. Specializing in Software Development, Data Structures, and Algorithms.'
        },
        {
            degree: 'Higher Secondary School (Science)',
            institution: 'Matrubhumi Vidhiyabhavan, Surat',
            period: 'Jun 2021 - Mar 2022',
            description: 'Scored 77.54% in Science stream.'
        },
    ];

    const stats = [
        { label: 'LeetCode', value: '120+' },
        { label: 'Projects', value: '5+' },
        { label: 'Internships', value: '2' },
        { label: 'CGPA', value: '8.5' }
    ];

    return (
        <section className="min-h-screen bg-[#050505] text-white selection:bg-white/20 selection:text-white font-sans overflow-x-hidden pt-24 pb-32">
            
            {/* --- Global Noise Texture --- */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[0]" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
                
                {/* --- Header / Hero Section --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-24">
                    <div>
                        <div className="flex items-center gap-2 text-zinc-500 mb-6">
                            <FiUser className="w-5 h-5" />
                            <span className="text-sm font-bold uppercase tracking-wider">The Person</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
                            More than <br/> <span className="text-zinc-600">just code.</span>
                        </h1>
                        <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-8">
                            I'm a B.Tech IT student at CHARUSAT, passionate about backend development and problem-solving. 
                            With hands-on experience in ASP.NET Core, Node.js, and REST APIs, I love building 
                            scalable solutions that make a real impact.
                        </p>
                        
                        <a 
                            href="https://drive.google.com/file/d/1C9wJpsZisTFCT4-TeRySH_4j8tC64BGv/view?usp=drive_link" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-zinc-200 transition-colors"
                        >
                            <FiDownload /> Download Resume
                        </a>
                    </div>

                    {/* Profile Image Bento Card */}
                    <div className="relative h-[400px] lg:h-[500px] w-full bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-white/10 rounded-[2rem] overflow-hidden group">
                        <img
                            src="/profile.png"
                            alt="Harsheel Kasodariya"
                            className="absolute inset-0 w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        
                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                                    <FiMapPin className="text-white" size={14} />
                                    <span className="text-sm font-bold uppercase tracking-wider text-white">Gujarat, India</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-md border border-green-500/30 rounded-full">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-sm font-bold text-green-400">Available</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Stats Strip --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 text-center hover:bg-zinc-900/60 transition-colors">
                            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* --- Main Content Grid --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Col: Experience Timeline */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* Experience Section */}
                        <div className="bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 md:p-12">
                            <div className="flex items-center gap-3 mb-12">
                                <div className="p-3 bg-white/5 rounded-full">
                                    <FiBriefcase className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold tracking-tight">Professional Journey</h2>
                            </div>

                            <div className="space-y-12">
                                {experiences.map((exp, idx) => (
                                    <div key={idx} className="relative pl-8 md:pl-12 border-l border-white/10 last:border-0 pb-12 last:pb-0">
                                        {/* Timeline Dot */}
                                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-950 border border-white" />
                                        
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                            <span className="text-xs font-mono text-zinc-500 border border-white/10 px-2 py-1 rounded mt-2 sm:mt-0 w-fit">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <p className="text-zinc-400 font-medium mb-4">{exp.company}</p>
                                        <p className="text-zinc-400 leading-relaxed text-sm">
                                            {exp.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education Section */}
                        <div className="bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 md:p-12">
                             <div className="flex items-center gap-3 mb-12">
                                <div className="p-3 bg-white/5 rounded-full">
                                    <FiAward className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold tracking-tight">Education</h2>
                            </div>
                            
                            <div className="space-y-12">
                                {education.map((edu, idx) => (
                                    <div key={idx} className="relative pl-8 md:pl-12 border-l border-white/10 last:border-0">
                                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-950 border border-white" />
                                        
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                            <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                                            <span className="text-xs font-mono text-zinc-500 border border-white/10 px-2 py-1 rounded mt-2 sm:mt-0 w-fit">
                                                {edu.period}
                                            </span>
                                        </div>
                                        <p className="text-zinc-400 font-medium mb-2">{edu.institution}</p>
                                        <p className="text-zinc-400 text-sm leading-relaxed">
                                            {edu.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Col: Personal / Soft Skills */}
                    <div className="space-y-8">
                        
                        {/* Philosophy Card */}
                        <div className="bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 h-full">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white">
                                <FiActivity size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">My Philosophy</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                I believe in writing clean, efficient code that scales. Focus on building robust backend systems 
                                with proper architecture. Performance optimization and problem-solving are at the core of everything I build.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['Backend Development', 'REST APIs', 'Problem Solving', 'Clean Code'].map(tag => (
                                    <span key={tag} className="text-xs font-bold uppercase tracking-wider text-zinc-500 border border-white/5 px-2 py-1 rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Interests Card */}
                        <div className="bg-white text-black rounded-[2rem] p-8">
                            <div className="flex items-center gap-2 mb-6">
                                <FiSmile className="w-5 h-5" />
                                <h3 className="text-xl font-bold tracking-tight">Offline Life</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center justify-between border-b border-black/10 pb-2">
                                    <span className="font-medium">� Competitive Programming</span>
                                    <span className="text-xs font-bold uppercase opacity-50">Passion</span>
                                </li>
                                <li className="flex items-center justify-between border-b border-black/10 pb-2">
                                    <span className="font-medium">🧠 Problem Solving</span>
                                    <span className="text-xs font-bold uppercase opacity-50">LeetCode</span>
                                </li>
                                <li className="flex items-center justify-between border-b border-black/10 pb-2">
                                    <span className="font-medium">🚀 Building APIs</span>
                                    <span className="text-xs font-bold uppercase opacity-50">Backend</span>
                                </li>
                                <li className="flex items-center justify-between border-b border-black/10 pb-2">
                                    <span className="font-medium">📚 Learning New Tech</span>
                                    <span className="text-xs font-bold uppercase opacity-50">Growth</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};