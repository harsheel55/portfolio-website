import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FiCode, FiCpu, FiGlobe, FiZap } from 'react-icons/fi';

export const ThreeDHero: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    // Mouse position
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation for tilt
    const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 100, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const startX = e.clientX - rect.left;
        const startY = e.clientY - rect.top;

        // Calculate rotation (max 10 degrees for subtlety)
        const rotateX = ((startY - height / 2) / height) * -10;
        const rotateY = ((startX - width / 2) / width) * 10;

        x.set(rotateY);
        y.set(rotateX);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Parallax transforms for inner elements
    const translateZ_Base = 0;
    const translateZ_Layer1 = 40;
    const translateZ_Layer2 = 80;
    const translateZ_Layer3 = 120;

    return (
        <div
            className="perspective-1000 w-full h-[600px] flex items-center justify-center relative cursor-default"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={ref}
            style={{ perspective: '1200px' }}
        >
            {/* Soft Ambient Glows behind the object */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen"></div>

            <motion.div
                className="relative w-[340px] sm:w-[500px] h-[350px] sm:h-[400px]"
                style={{
                    rotateX: mouseY,
                    rotateY: mouseX,
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* --- Main Glass Slab (Abstract/Product Base) --- */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl overflow-hidden"
                    style={{ translateZ: translateZ_Base }}
                >
                    {/* Glossy Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-50"></div>

                    {/* Grid Lines for "Tech" feel */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

                    {/* Inner UI Composition */}
                    <div className="p-8 h-full flex flex-col relative z-10">
                        {/* Header Mockup */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400/80 shadow-glow-red"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400/80 shadow-glow-yellow"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400/80 shadow-glow-green"></div>
                            </div>
                            <div className="h-2 w-20 bg-white/10 rounded-full"></div>
                        </div>

                        {/* Central Visual */}
                        <div className="flex-1 flex items-center justify-center relative">
                            <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center relative">
                                <div className="absolute inset-0 border border-white/20 rounded-full animate-[spin_8s_linear_infinite]"></div>
                                <div className="absolute inset-4 border border-indigo-400/30 rounded-full animate-[spin_12s_linear_infinite_reverse]"></div>
                                <FiGlobe className="text-white/80 w-12 h-12" />
                            </div>

                            {/* Connecting Lines */}
                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                            <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                        </div>

                        {/* Footer Stats */}
                        <div className="grid grid-cols-3 gap-4 mt-auto">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-2/3 animate-pulse"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* --- Floating Elements (Layered Depth) --- */}

                {/* Top Right: Abstract Cube/Card */}
                <motion.div
                    className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-indigo-600/90 to-blue-600/90 rounded-2xl border border-white/20 shadow-xl flex items-center justify-center backdrop-blur-md"
                    style={{ translateZ: translateZ_Layer2 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <FiZap className="text-white w-10 h-10" />
                </motion.div>

                {/* Bottom Left: Code Snippet */}
                <motion.div
                    className="absolute -left-12 -bottom-4 w-48 bg-[#0F172A]/90 p-4 rounded-xl border border-white/10 shadow-2xl backdrop-blur-md"
                    style={{ translateZ: translateZ_Layer3 }}
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    <div className="flex items-center gap-2 mb-2">
                        <FiCode className="text-emerald-400 w-4 h-4" />
                        <span className="text-[10px] text-gray-400 font-mono">deploy.sh</span>
                    </div>
                    <div className="space-y-1.5 opacity-70">
                        <div className="h-1.5 w-full bg-emerald-500/50 rounded-full"></div>
                        <div className="h-1.5 w-2/3 bg-blue-500/50 rounded-full"></div>
                    </div>
                </motion.div>

                {/* Floating Orb (Abstract) */}
                <motion.div
                    className="absolute -right-4 bottom-12 w-16 h-16 rounded-full bg-gradient-to-r from-pink-500/80 to-rose-500/80 blur-md opacity-80"
                    style={{ translateZ: translateZ_Layer1 }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Chip/Processor Element */}
                <motion.div
                    className="absolute left-8 -top-6 bg-[#1e293b]/90 p-2 rounded-lg border border-indigo-500/30 hover:border-indigo-500/80 transition-colors"
                    style={{ translateZ: translateZ_Layer1 }}
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                    <FiCpu className="text-indigo-400 w-6 h-6" />
                </motion.div>

            </motion.div>
        </div>
    );
};
