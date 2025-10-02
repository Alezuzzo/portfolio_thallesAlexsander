import React, { useState } from 'react';
// 1. Corrigido: Importando 'workExperiences' do novo arquivo 'experience.ts'
import { workExperiences } from '../data/experience'; 
import { CheckCircle } from 'lucide-react';

const WorkExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  // 2. Corrigido: Usando a variável 'workExperiences'
  const activeExperience = workExperiences[activeTab];

  return (
    <section id="experiencia" className="py-24 bg-slate-800/50 text-slate-300">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-cyan-400">
          Experiência Profissional
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 min-h-[400px]">
          {/* Abas na Esquerda */}
          <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible border-b-2 md:border-b-0 md:border-l-2 border-slate-700">
            {/* 3. Corrigido: Mapeando sobre 'workExperiences' */}
            {workExperiences.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(index)}
                className={`text-left text-nowrap py-3 px-4 w-full font-semibold transition-colors duration-300 hover:bg-slate-700/50 hover:text-cyan-300 ${
                  activeTab === index
                    ? 'bg-slate-700/50 text-cyan-400 border-b-2 md:border-b-0 md:border-l-2 border-cyan-400'
                    : 'text-slate-400'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Conteúdo na Direita (já estava correto para exibir a experiência) */}
          <div key={activeTab} className="flex-1 animate-fade-in">
            <h3 className="text-2xl font-bold text-slate-100 mb-1">
              {activeExperience.role}
            </h3>
            <p className="font-semibold text-cyan-400 mb-4">
              {activeExperience.period}
            </p>
            
            <ul className="space-y-4">
              {activeExperience.description.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 mt-1 text-cyan-500 flex-shrink-0" />
                  <span className="text-lg leading-relaxed text-slate-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default WorkExperienceSection;
