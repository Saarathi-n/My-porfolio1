
import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

const projectsData: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site built with Next.js, TypeScript, and Stripe for payments. Includes product search, filtering, and a complete checkout flow.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    tags: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'AI Chat Application',
    description: 'A real-time chat application powered by Gemini API. Users can have interactive conversations with an AI assistant, showcasing streaming responses.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    tags: ['React', 'Gemini API', 'Node.js', 'WebSocket'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An analytics dashboard for visualizing complex datasets using Recharts and D3.js. Features interactive charts and customizable reports.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    tags: ['React', 'D3.js', 'Recharts', 'Data Viz'],
    liveUrl: '#',
    repoUrl: '#',
  },
   {
    title: 'Project Management Tool',
    description: 'A Kanban-style project management app with drag-and-drop functionality, user authentication, and real-time collaboration features.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    tags: ['React', 'Firebase', 'Context API', 'UI/UX'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
