export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    category: 'web' | 'mobile' | 'backend' | 'fullstack';
    liveUrl?: string;
    githubUrl?: string;
}

export interface Skill {
    name: string;
    level: number; // 0-100
    icon?: string;
}

export interface SkillCategory {
    category: string;
    skills: Skill[];
}

export interface Experience {
    id: number;
    title: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
}

export interface Education {
    id: number;
    degree: string;
    institution: string;
    period: string;
    description?: string;
}

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    category: string;
    tags: string[];
    date: string;
    readTime: number; // in minutes
}

export interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}
