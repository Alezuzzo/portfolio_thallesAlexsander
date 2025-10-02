import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import type { Project } from '../data/projects';
import TechTag from './TechTag';


interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="group relative bg-slate-800/50 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-cyan-500/10 border border-slate-700 hover:border-slate-600">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-lg"></div>
    <div className="relative">
      <img 
        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" 
        src={project.imageUrl} 
        alt={`Imagem do projeto ${project.title}`} 
        onError={(e) => { e.currentTarget.src = 'https://placehold.co/1280x720/0f172a/ffffff?text=Imagem+Indisponível'; }} 
      />
      <div className="p-6 bg-slate-900">
        <h3 className="text-2xl font-bold text-slate-100 mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4 text-sm leading-relaxed h-20 overflow-hidden">{project.description}</p>
        <div className="mb-4 flex flex-wrap">
          {project.tags.map(tag => <TechTag key={tag} tag={tag} />)}
        </div>
        <div className="flex justify-between items-center mt-6">
          <a 
            href={project.projectUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Ver Projeto
            <ArrowUpRight className="ml-1 h-5 w-5" />
          </a>
          {project.repoUrl && (
            <a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-white transition-colors" 
              aria-label="Repositório no GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
