import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
    return (
        <div
            className={`glass rounded-xl p-6 ${hover ? 'glass-hover transform hover:scale-105 hover:shadow-2xl' : ''
                } ${className}`}
        >
            {children}
        </div>
    );
};
