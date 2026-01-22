import type { SkillCategory } from '../types/index';

export const skillCategories: SkillCategory[] = [
    {
        category: 'Programming Languages',
        skills: [
            { name: 'C', level: 85 },
            { name: 'C++', level: 85 },
            { name: 'Python', level: 80 },
            { name: 'JavaScript', level: 85 },
            { name: 'SQL', level: 90 },
        ],
    },
    {
        category: 'Backend & APIs',
        skills: [
            { name: 'ASP.NET Core', level: 90 },
            { name: 'Entity Framework', level: 85 },
            { name: 'REST APIs', level: 90 },
            { name: 'Node.js', level: 80 },
            { name: 'Express.js', level: 80 },
        ],
    },
    {
        category: 'Frontend & Databases',
        skills: [
            { name: 'Razor Pages', level: 85 },
            { name: 'HTML/CSS', level: 85 },
            { name: 'SQL Server', level: 90 },
            { name: 'MongoDB', level: 75 },
            { name: 'MySQL', level: 80 },
        ],
    },
    {
        category: 'Problem Solving & Achievements',
        skills: [
            { name: 'Data Structures', level: 85 },
            { name: 'Algorithms', level: 85 },
            { name: 'LeetCode (120+ Problems)', level: 90 },
            { name: 'CodeChef (50+ Problems)', level: 80 },
            { name: 'Competitive Programming', level: 80 },
        ],
    },
];
