import React, { useState } from 'react';
import { 
    FiClock, 
    FiCalendar, 
    FiSearch, 
    FiArrowUpRight, 
    FiHash, 
    FiEdit3,
    FiFilter
} from 'react-icons/fi';
import { blogPosts } from '../data/blog';

export const Blog: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))];

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

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
                        <div className="flex items-center gap-2 text-zinc-500 mb-4">
                            <FiEdit3 className="w-5 h-5" />
                            <span className="text-sm font-bold uppercase tracking-wider">The Journal</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
                            Thoughts & <br/> <span className="text-zinc-600">Insights.</span>
                        </h1>
                    </div>
                    
                    <p className="max-w-md text-zinc-400 text-lg leading-relaxed mb-2">
                        Writing about software architecture, frontend performance, and the lessons learned along the way.
                    </p>
                </div>

                {/* --- Controls Bar (Sticky) --- */}
                <div className="sticky top-6 z-30 mb-16">
                    <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl">
                        
                        {/* Categories */}
                        <div className="flex overflow-x-auto hide-scrollbar gap-1 w-full md:w-auto pb-2 md:pb-0">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`
                                        whitespace-nowrap px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 capitalize
                                        ${selectedCategory === category
                                            ? 'bg-white text-black shadow-lg'
                                            : 'text-zinc-500 hover:text-white hover:bg-white/5'
                                        }
                                    `}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Search Input */}
                        <div className="relative w-full md:w-64">
                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-black/20 border border-white/5 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/20 transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* --- Blog Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, idx) => (
                        <article
                            key={post.id}
                            className="group flex flex-col h-full bg-zinc-900/40 border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5"
                        >
                            {/* Image Wrapper */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                                
                                {/* Floating Badge */}
                                <div className="absolute top-6 left-6">
                                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-black bg-white/90 backdrop-blur-md rounded-lg shadow-lg">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow p-8">
                                {/* Meta */}
                                <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 mb-6 uppercase tracking-wider border-b border-white/5 pb-4">
                                    <div className="flex items-center gap-2">
                                        <FiCalendar />
                                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</span>
                                    </div>
                                    <div className="w-px h-3 bg-zinc-800" />
                                    <div className="flex items-center gap-2">
                                        <FiClock />
                                        <span>{post.readTime} min</span>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-zinc-300 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                
                                <p className="text-zinc-400 text-sm leading-relaxed mb-8 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                    <div className="flex gap-2">
                                        {post.tags.slice(0, 2).map((tag) => (
                                            <span key={tag} className="text-xs font-medium text-zinc-600 flex items-center gap-1">
                                                <FiHash className="text-zinc-700" /> {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                                        <FiArrowUpRight className="text-lg" />
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* --- Empty State --- */}
                {filteredPosts.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-32 text-center border border-dashed border-zinc-800 rounded-[3rem] bg-zinc-900/20">
                        <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-6 border border-zinc-800">
                            <FiFilter className="w-8 h-8 text-zinc-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
                        <p className="text-zinc-500 mb-8 max-w-sm">
                            We couldn't find any posts matching "<span className="text-white">{searchTerm}</span>".
                        </p>
                        <button
                            onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
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