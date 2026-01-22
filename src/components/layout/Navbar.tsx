import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiGithub, FiTwitter, FiArrowRight } from 'react-icons/fi';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// --- 1. Custom List Item Component ---
const ListItem = React.forwardRef<
    React.ElementRef<typeof Link>,
    React.ComponentPropsWithoutRef<typeof Link> & { title: string; icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-800/50 hover:text-white focus:bg-zinc-800/50 focus:text-white",
                        className
                    )}
                    {...props}
                >
                    <div className="flex items-center gap-2 text-sm font-medium leading-none text-zinc-100">
                        {icon && <span className="text-zinc-400">{icon}</span>}
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-zinc-500 mt-2">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [isOpen]);

    return (
        <>
            <nav 
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                    scrolled 
                        ? "bg-[#050505]/80 backdrop-blur-xl border-white/5 py-4" 
                        : "bg-transparent border-transparent py-6"
                )}
            >
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        
                        {/* --- Logo --- */}
                        <Link to="/" className="flex items-center gap-2 group z-50 relative">
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black font-bold text-lg group-hover:scale-110 transition-transform">
                                H
                            </div>
                            <span className="font-bold text-white tracking-tight hidden sm:block">
                                Harsheel
                            </span>
                        </Link>

                        {/* --- Desktop Navigation --- */}
                        <div className="hidden md:flex items-center">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    
                                    <NavigationMenuItem>
                                        <Link to="/">
                                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5 focus:bg-white/5 data-[active]:text-white")}>
                                                Home
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>

                                    {/* Projects Dropdown */}
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="bg-transparent text-zinc-400 hover:text-white hover:bg-white/5 focus:bg-white/5 data-[state=open]:bg-white/5 data-[state=open]:text-white">
                                            Projects
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-[#0A0A0A] border border-white/10 rounded-xl">
                                                <li className="row-span-3">
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 p-6 no-underline outline-none focus:shadow-md border border-white/5 group"
                                                            to="/projects"
                                                        >
                                                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition-colors">
                                                                <FiArrowRight />
                                                            </div>
                                                            <div className="mb-2 text-lg font-medium text-white">
                                                                Selected Works
                                                            </div>
                                                            <p className="text-sm leading-tight text-zinc-400">
                                                                Explore case studies, experiments, and production apps.
                                                            </p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                                <ListItem to="/projects" title="Web Applications">
                                                    Scalable SaaS and dashboards.
                                                </ListItem>
                                                <ListItem to="/projects" title="Marketing Sites">
                                                    High-performance landing pages.
                                                </ListItem>
                                                <ListItem to="/projects" title="Experiments">
                                                    Creative coding and prototypes.
                                                </ListItem>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    {/* About Dropdown */}
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="bg-transparent text-zinc-400 hover:text-white hover:bg-white/5 focus:bg-white/5 data-[state=open]:bg-white/5 data-[state=open]:text-white">
                                            Info
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-[#0A0A0A] border border-white/10 rounded-xl">
                                                <ListItem title="About" to="/about">
                                                    My background and approach.
                                                </ListItem>
                                                <ListItem title="Skills" to="/skills">
                                                    Technical stack & tools.
                                                </ListItem>
                                                <ListItem title="Blog" to="/blog">
                                                    Thoughts on engineering.
                                                </ListItem>
                                                <ListItem title="Contact" to="/contact">
                                                    Let's work together.
                                                </ListItem>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>

                        {/* --- CTA & Mobile Toggle --- */}
                        <div className="flex items-center gap-4">
                            <Link 
                                to="/contact" 
                                className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-zinc-200 transition-colors"
                            >
                                Let's Talk
                            </Link>

                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden p-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors z-50 relative"
                            >
                                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* --- Mobile Menu Overlay --- */}
            <div 
                className={cn(
                    "fixed inset-0 z-40 bg-[#050505] flex flex-col justify-center px-6 transition-all duration-500 ease-in-out md:hidden",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none delay-200"
                )}
            >
                {/* Background Noise for Mobile */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                     style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
                </div>

                <div className="space-y-6 relative z-10">
                    {[
                        { label: "Home", path: "/" },
                        { label: "Projects", path: "/projects" },
                        { label: "About", path: "/about" },
                        { label: "Skills", path: "/skills" },
                        { label: "Blog", path: "/blog" },
                        { label: "Contact", path: "/contact" },
                    ].map((item, idx) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                "block text-5xl font-bold tracking-tighter transition-all duration-300 transform",
                                isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                                location.pathname === item.path ? "text-white" : "text-zinc-600 hover:text-zinc-300"
                            )}
                            style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="absolute bottom-10 left-6 right-6 flex justify-between items-center pt-8 border-t border-white/10">
                    <div className="flex gap-4">
                        <a href="#" className="text-zinc-500 hover:text-white"><FiGithub size={24} /></a>
                        <a href="#" className="text-zinc-500 hover:text-white"><FiTwitter size={24} /></a>
                    </div>
                    <span className="text-zinc-600 text-sm">© 2024</span>
                </div>
            </div>
        </>
    );
};