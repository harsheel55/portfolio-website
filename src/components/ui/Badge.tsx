import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'primary',
    className = ''
}) => {
    const variants = {
        primary: 'bg-primary-500/20 text-primary-300 border-primary-500/30',
        secondary: 'bg-accent-500/20 text-accent-300 border-accent-500/30',
        success: 'bg-green-500/20 text-green-300 border-green-500/30',
        warning: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
        info: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    };

    return (
        <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${variants[variant]} ${className}`}
        >
            {children}
        </span>
    );
};
