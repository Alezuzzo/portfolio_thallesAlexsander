import React from 'react';
import { Award, Briefcase, User } from 'lucide-react';

const AboutMeSection: React.FC = () => {

  return (
    <section id="sobre" className="py-24 bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-cyan-400">
          Sobre Mim
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Coluna da Imagem */}
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl animate-pulse"></div>
              <img
                src={"/src/assets/perfil.jpg"}
                alt="Foto de Thalles Alexsander"
                className="relative w-full h-full object-cover rounded-full border-4 border-slate-700 shadow-2xl"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-lg leading-relaxed mb-6">
              Olá! Sou Thalles Alexsander, um desenvolvedor front-end apaixonado por criar interfaces de usuário intuitivas, performáticas e visualmente agradáveis. Com experiência em React, TypeScript e ecossistemas modernos de JavaScript, além de diversas outras tecnologias. Meu objetivo é transformar ideias complexas em experiências digitais simples e memoráveis.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Estou sempre em busca de novos desafios e oportunidades para aprender e crescer como profissional.
            </p>
            <div className="flex flex-wrap gap-6">
              
              <div className="flex items-center space-x-3 text-cyan-400">
                <Briefcase className="h-6 w-6" />
                <span className="font-semibold text-slate-200">Disponível para Trabalho</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;

