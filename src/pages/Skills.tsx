import React from 'react';
import { skillCategories } from '../data/skills';
import {
    FiCode,
    FiServer,
    FiTool,
    FiUsers,
    FiCpu,
    FiAward,
    FiCheck,
    FiZap
} from 'react-icons/fi';

export const Skills: React.FC = () => {
    // Config for specific category styling
    const categoryConfig: Record<string, { icon: React.ReactNode; accent: string }> = {
        'Frontend Development': { 
            icon: <FiCode className="w-6 h-6" />, 
            accent: "group-hover:text-cyan-300" 
        },
        'Backend Development': { 
            icon: <FiServer className="w-6 h-6" />, 
            accent: "group-hover:text-emerald-300" 
        },
        'Tools & Technologies': { 
            icon: <FiTool className="w-6 h-6" />, 
            accent: "group-hover:text-orange-300" 
        },
        'Soft Skills': { 
            icon: <FiUsers className="w-6 h-6" />, 
            accent: "group-hover:text-purple-300" 
        },
    };

    return (
        <section className="min-h-screen bg-[#050505] text-white selection:bg-white/20 selection:text-white font-sans overflow-x-hidden pt-24 pb-32">
            
            {/* --- Global Noise Texture --- */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[0]" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
                
                {/* --- Header Section --- */}
                <div className="mb-24 max-w-4xl">
                    <div className="flex items-center gap-2 text-zinc-500 mb-6">
                        <FiCpu className="w-5 h-5 animate-pulse" />
                        <span className="text-sm font-bold uppercase tracking-wider">Capabilities</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
                        Technical <br/> <span className="text-zinc-600">Proficiency.</span>
                    </h1>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                        A breakdown of my technical arsenal. I focus on modern, scalable stacks that prioritize developer experience and end-user performance.
                    </p>
                </div>

                {/* --- Main Skills Bento Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 mb-32">
                    {skillCategories.map((category, idx) => {
                        const config = categoryConfig[category.category] || { 
                            icon: <FiZap />, 
                            accent: "group-hover:text-white" 
                        };
                        
                        return (
                            <div
                                key={category.category}
                                className="group bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 md:p-10 hover:border-white/10 transition-colors duration-500"
                            >
                                {/* Card Header */}
                                <div className="flex items-start justify-between mb-10">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-zinc-400 ${config.accent} transition-colors duration-300`}>
                                            {config.icon}
                                        </div>
                                        <h2 className="text-2xl font-bold tracking-tight text-white">
                                            {category.category}
                                        </h2>
                                    </div>
                                    <span className="text-xs font-mono text-zinc-600 border border-zinc-800 px-2 py-1 rounded">
                                        0{idx + 1}
                                    </span>
                                </div>

                                {/* Skills List */}
                                <div className="space-y-6">
                                    {category.skills.map((skill) => (
                                        <div key={skill.name} className="relative">
                                            <div className="flex justify-between items-end mb-2">
                                                <span className="text-zinc-300 font-medium tracking-wide">
                                                    {skill.name}
                                                </span>
                                                <span className="text-xs font-mono text-zinc-500">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            
                                            {/* Minimalist Progress Bar */}
                                            <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-white rounded-full transition-all duration-1000 ease-out origin-left scale-x-0 group-hover:scale-x-100"
                                                    style={{ 
                                                        width: `${skill.level}%`,
                                                        transitionDelay: `${Math.random() * 200}ms`
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* --- Certifications Section --- */}
                <div className="border-t border-white/5 pt-24">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                            Credentials
                        </h2>
                        <div className="flex items-center gap-2 text-zinc-500 text-sm font-bold uppercase tracking-wider">
                            <FiCheck className="text-green-500" />
                            Verified Achievements
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Cert Card 1 */}
                        <div className="relative group bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 hover:bg-zinc-900/60 transition-all duration-300">
                            <div className="absolute top-8 right-8 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                                <FiAward className="w-8 h-8 text-zinc-500" />
                            </div>
                            <div className="mt-12">
                                <div className="text-xs font-mono text-zinc-500 mb-2">Issued 2023</div>
                                <h3 className="text-xl font-bold text-white mb-1">AWS Certified Developer</h3>
                                <p className="text-zinc-400 text-sm">Amazon Web Services</p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                                <span className="text-xs font-mono text-zinc-600">ID: AWS-832-1929</span>
                                <div className="w-2 h-2 rounded-full bg-orange-500/50" />
                            </div>
                        </div>

                        {/* Cert Card 2 */}
                        <div className="relative group bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 hover:bg-zinc-900/60 transition-all duration-300">
                            <div className="absolute top-8 right-8 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                                <FiAward className="w-8 h-8 text-zinc-500" />
                            </div>
                            <div className="mt-12">
                                <div className="text-xs font-mono text-zinc-500 mb-2">Issued 2022</div>
                                <h3 className="text-xl font-bold text-white mb-1">Meta React Professional</h3>
                                <p className="text-zinc-400 text-sm">Meta / Coursera</p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                                <span className="text-xs font-mono text-zinc-600">ID: MTA-552-1102</span>
                                <div className="w-2 h-2 rounded-full bg-cyan-500/50" />
                            </div>
                        </div>

                        {/* Cert Card 3 */}
                        <div className="relative group bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 hover:bg-zinc-900/60 transition-all duration-300">
                            <div className="absolute top-8 right-8 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                                <FiAward className="w-8 h-8 text-zinc-500" />
                            </div>
                            <div className="mt-12">
                                <div className="text-xs font-mono text-zinc-500 mb-2">Issued 2021</div>
                                <h3 className="text-xl font-bold text-white mb-1">Full Stack Nanodegree</h3>
                                <p className="text-zinc-400 text-sm">Udacity</p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                                <span className="text-xs font-mono text-zinc-600">ID: UD-992-2201</span>
                                <div className="w-2 h-2 rounded-full bg-purple-500/50" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};