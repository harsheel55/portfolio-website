import type { Project } from '../types/index';

export const projects: Project[] = [
    {
        id: 1,
        title: 'Employee Management System REST API',
        description: 'Architected 12+ REST API endpoints enabling full CRUD operations for 1,000+ employee records. Implemented server-side pagination and filtering, reducing database query load by 45%.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
        technologies: ['ASP.NET Core', 'Entity Framework', 'SQL Server', 'REST APIs'],
        category: 'backend',
        githubUrl: 'https://github.com/harsheel55/EMS-backend-REST-API',
    },
    {
        id: 2,
        title: 'MediCare: Healthcare Management System',
        description: 'Built a full-stack healthcare management system with secure role-based authentication. Reduced invalid form submissions by 60% through robust validation and MVC architecture.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
        technologies: ['ASP.NET Core', 'Razor Pages', 'SQL Server', 'MVC'],
        category: 'fullstack',
        githubUrl: 'https://github.com/harsheel55/MediCare_Full_Stack_MVC_Project',
    },
    {
        id: 3,
        title: 'SmartRoute Optimizer',
        description: 'Designed an AI-powered delivery route optimization system handling 20–50 locations per execution. Minimized total travel distance by 25–35% using constraint-based optimization algorithms. Visualized optimized routes using Folium.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        technologies: ['Python', 'AI/ML', 'Optimization', 'Folium', 'REST APIs'],
        category: 'fullstack',
        liveUrl: 'https://routeoptima.onrender.com/login',
        githubUrl: 'https://github.com/Kirtan-lokadiya/RouteOptima',
    },
    {
        id: 4,
        title: 'Weather Application',
        description: 'Developed a Flutter-based weather application delivering real-time forecasts for 10+ cities via REST APIs. Improved data reliability and user experience by eliminating manual refresh mechanisms.',
        image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
        technologies: ['Flutter', 'Dart', 'REST APIs', 'Mobile Development'],
        category: 'mobile',
        githubUrl: 'https://github.com/harsheel55',
    },
];
