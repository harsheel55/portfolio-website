import React, { useState, useEffect } from 'react';
import { 
    FiMail, 
    FiMapPin, 
    FiGithub, 
    FiLinkedin, 
    FiTwitter, 
    FiArrowRight,
    FiCheck,
    FiCopy,
    FiClock
} from 'react-icons/fi';
import { validateContactForm, type ValidationErrors } from '../utils/validation';

export const Contact: React.FC = () => {
    // --- State Management ---
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState<ValidationErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [copied, setCopied] = useState(false);
    const [time, setTime] = useState(new Date());

    // --- Effects ---
    // Update local time every minute
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    // --- Handlers ---
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof ValidationErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validateContactForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } catch (error) {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const copyEmail = () => {
        navigator.clipboard.writeText("harsheelkasodariya2005@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="min-h-screen bg-[#050505] text-white selection:bg-white/20 selection:text-white font-sans overflow-x-hidden pt-20 pb-24">
            
            {/* --- Global Noise Texture --- */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[0]" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
                
                {/* Header */}
                <div className="mb-16 md:mb-24">
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6">
                        Let's work <br/> <span className="text-zinc-500">together.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    
                    {/* --- LEFT COL: The Form (2/3 width) --- */}
                    <div className="lg:col-span-2 bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                        
                        {/* Success State Overlay */}
                        {submitStatus === 'success' && (
                            <div className="absolute inset-0 z-20 bg-[#050505]/90 backdrop-blur-sm flex flex-col items-center justify-center animate-fade-in">
                                <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-4">
                                    <FiCheck size={32} />
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight">Message Received</h3>
                                <p className="text-zinc-400 mt-2">I'll get back to you within 24 hours.</p>
                                <button 
                                    onClick={() => setSubmitStatus('idle')}
                                    className="mt-8 px-6 py-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition-colors"
                                >
                                    Send another
                                </button>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Jane Doe"
                                        className={`w-full bg-zinc-900/50 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-4 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-zinc-700`}
                                    />
                                    {errors.name && <p className="text-xs text-red-500 ml-1">{errors.name}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="jane@example.com"
                                        className={`w-full bg-zinc-900/50 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-4 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-zinc-700`}
                                    />
                                    {errors.email && <p className="text-xs text-red-500 ml-1">{errors.email}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Project Inquiry"
                                    className={`w-full bg-zinc-900/50 border ${errors.subject ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-4 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-zinc-700`}
                                />
                                {errors.subject && <p className="text-xs text-red-500 ml-1">{errors.subject}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    placeholder="Tell me about your goals..."
                                    className={`w-full bg-zinc-900/50 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-4 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-zinc-700 resize-none`}
                                />
                                {errors.message && <p className="text-xs text-red-500 ml-1">{errors.message}</p>}
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group w-full md:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* --- RIGHT COL: Info Stack (1/3 width) --- */}
                    <div className="space-y-4">
                        
                        {/* 1. Email Card */}
                        <div className="bg-zinc-900/40 border border-white/5 rounded-[2rem] p-6 md:p-8 flex flex-col justify-between hover:border-white/10 transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-5 text-white">
                                <FiMail size={20} />
                            </div>
                            <div>
                                <p className="text-zinc-500 text-sm mb-2">Drop me a line</p>
                                <div className="flex items-center gap-3">
                                    <a href="mailto:harsheelkasodariya2005@gmail.com" className="text-base md:text-lg font-bold hover:text-zinc-300 transition-colors break-all">
                                        harsheelkasodariya2005@gmail.com
                                    </a>
                                    <button 
                                        onClick={copyEmail}
                                        className="p-2 hover:bg-white/10 rounded-full transition-colors text-zinc-400 hover:text-white flex-shrink-0"
                                        title="Copy Email"
                                    >
                                        {copied ? <FiCheck className="text-green-500" /> : <FiCopy />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* 2. Location & Time Card */}
                        <div className="bg-zinc-900/40 border border-white/5 rounded-[2rem] p-6 md:p-8 hover:border-white/10 transition-colors">
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white">
                                    <FiMapPin size={20} />
                                </div>
                                <div className="px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    Open to work
                                </div>
                            </div>
                            <div>
                                <p className="text-zinc-500 text-sm mb-1">Based in</p>
                                <h3 className="text-xl md:text-2xl font-bold mb-4">Gujarat, India</h3>
                                
                                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-zinc-400 text-sm">
                                    <FiClock />
                                    <span>Local time: {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' })}</span>
                                </div>
                            </div>
                        </div>

                        {/* 3. Socials Card */}
                        <div className="bg-zinc-900/40 border border-white/5 rounded-[2rem] p-6 md:p-8 hover:border-white/10 transition-colors">
                            <p className="text-zinc-500 text-sm mb-5 font-bold uppercase tracking-wider">Connect with me</p>
                            <div className="flex gap-4">
                                {[
                                    { icon: FiGithub, url: 'https://github.com/harsheel55', color: 'hover:bg-white hover:text-black' },
                                    { icon: FiLinkedin, url: 'https://www.linkedin.com/in/harsheel-kasodariya-22a31b253/', color: 'hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]' },
                                    { icon: FiMail, url: 'mailto:harsheelkasodariya2005@gmail.com', color: 'hover:bg-green-500 hover:text-white hover:border-green-500' }
                                ].map((social, i) => (
                                    <a 
                                        key={i} 
                                        href={social.url}
                                        target={social.url.startsWith('http') ? '_blank' : undefined}
                                        rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className={`w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 ${social.color}`}
                                    >
                                        <social.icon size={22} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* 4. Phone Card */}
                        <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 rounded-[2rem] p-6 md:p-8">
                            <p className="text-zinc-400 text-sm mb-2">Call me</p>
                            <a href="tel:+919904348650" className="text-xl font-bold hover:text-zinc-300 transition-colors">
                                +91 9904348650
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};