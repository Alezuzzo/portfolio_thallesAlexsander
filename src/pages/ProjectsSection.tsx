import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { userProjects } from '../data/projects';

const ProjectsSection: React.FC = () => (
  <section id="projects" className="py-20 sm:py-24 bg-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400 sm:text-5xl">Detalhes dos Projetos</h2>
        <p className="mt-4 text-lg text-slate-400">
          Aqui estão mais informações sobre cada projeto.
        </p>
      </div>
      <div className="mt-20 grid gap-12 md:grid-cols-1 lg:grid-cols-2">
        {userProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
