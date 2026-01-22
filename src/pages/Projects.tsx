import React, { useState } from 'react';
import { 
    FiGithub, 
    FiArrowUpRight, 
    FiFilter, 
    FiLayers 
} from 'react-icons/fi';
import { projects } from '../data/projects'; // Standard import

export const Projects: React.FC = () => {
    const [filter, setFilter] = useState<string>('all');

    const categories = ['all', 'web', 'mobile', 'backend', 'fullstack'];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section className="min-h-screen bg-[#050505] text-white selection:bg-white/20 selection:text-white font-sans overflow-x-hidden pt-24 pb-32">
            
            {/* --- Global Noise Texture --- */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[0]" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
                
                {/* --- Header Section --- */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div>
                        <div className="flex items-center gap-2 text-zinc-500 mb-4 animate-fade-in">
                            <FiLayers className="w-5 h-5" />
                            <span className="text-sm font-bold uppercase tracking-wider">The Archives</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] animate-fade-in-up">
                            Selected <br/> <span className="text-zinc-600">Works.</span>
                        </h1>
                    </div>
                    
                    <p className="max-w-md text-zinc-400 text-lg leading-relaxed animate-fade-in-up delay-100">
                        A curation of digital products, prototypes, and experiments focused on interaction and performance.
                    </p>
                </div>

                {/* --- Filter Dock --- */}
                <div className="sticky top-6 z-30 mb-16 animate-fade-in delay-200">
                    <div className="inline-flex flex-wrap items-center gap-2 p-2 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`
                                    px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 capitalize
                                    ${filter === category
                                        ? 'bg-white text-black shadow-lg scale-105'
                                        : 'text-zinc-500 hover:text-white hover:bg-white/5'
                                    }
                                `}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- Projects Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {filteredProjects.map((project, idx) => (
                        <div
                            key={project.id}
                            className="group relative flex flex-col h-full animate-fade-in-up"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            {/* Card Container */}
                            <div className="relative bg-zinc-900/40 border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5">
                                
                                {/* Image Area */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <div className="absolute inset-0 bg-zinc-900/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
                                    />
                                    
                                    {/* Overlay Actions */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20 backdrop-blur-[2px]">
                                        {project.liveUrl && (
                                            <a 
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer" 
                                                className="px-6 py-3 bg-white text-black rounded-full font-bold text-sm flex items-center gap-2 hover:scale-110 transition-transform"
                                            >
                                                Visit Site <FiArrowUpRight />
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a 
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 bg-black/50 border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all"
                                            >
                                                <FiGithub size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-3xl font-bold tracking-tight text-white mb-2 group-hover:text-zinc-200">
                                                {project.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.technologies.slice(0, 3).map(tech => (
                                                    <span key={tech} className="text-xs font-medium text-zinc-500 border border-zinc-800 px-2 py-1 rounded-md uppercase tracking-wider">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-zinc-400 leading-relaxed text-sm max-w-lg">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Empty State --- */}
                {filteredProjects.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-32 text-center border border-dashed border-zinc-800 rounded-[3rem] bg-zinc-900/20">
                        <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-6 border border-zinc-800">
                            <FiFilter className="w-8 h-8 text-zinc-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Nothing found here</h3>
                        <p className="text-zinc-500 mb-8 max-w-sm">
                            There are no projects in the <span className="text-white">"{filter}"</span> category yet.
                        </p>
                        <button
                            onClick={() => setFilter('all')}
                            className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};