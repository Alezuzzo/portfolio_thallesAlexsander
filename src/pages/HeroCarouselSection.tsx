import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { userProjects } from "../data/projects";

const HeroCarouselSection: React.FC = () => {
  // Duplicamos os projetos para criar um efeito de loop infinito e contínuo.
  const doubledProjects = [
    ...userProjects,
    ...userProjects,
    ...userProjects,
  ];

  // SVG para o ícone do Spotify
  const SpotifyIcon = () => (
    <svg
      role="img"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="h-8 w-8"
    >
      <title>Spotify</title>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.225 17.54c-.2.24-.54.3-.84.12-2.43-1.5-5.52-1.8-9.15-.99-.36.09-.66-.15-.75-.51-.09-.36.15-.66.51-.75 3.96-.9 7.35-.57 10.02 1.14.3.18.36.54.12.84zm1.14-2.67c-.24.3-.66.42-.96.18-2.73-1.68-6.9-2.16-10.44-1.17-.42.12-.9-.12-.99-.54-.12-.42.12-.9.54-.99 4.14-1.2 8.76-.69 11.76 1.2.36.24.42.72.18.96zm.12-2.82c-3.24-1.92-8.52-2.04-12.21-1.11-.48.12-.96-.24-1.08-.72s.24-.96.72-1.08c4.2-.99 9.96-.84 13.56 1.32.42.24.54.84.24 1.26-.27.42-.84.54-1.2.24z" />
    </svg>
  );

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-900">
      {/* Adicionamos o CSS para as animações diretamente aqui para simplicidade */}
      <style>
        {`
                    @keyframes scroll-left {
                        from { transform: translateX(0%); }
                        to { transform: translateX(-33.333%); }
                    }
                    @keyframes scroll-right {
                        from { transform: translateX(-33.333%); }
                        to { transform: translateX(0%); }
                    }
                    .animate-scroll-left {
                        animation: scroll-left 80s linear infinite;
                    }
                    .animate-scroll-right {
                        animation: scroll-right 80s linear infinite;
                    }
                `}
      </style>

      {/* Container para os carrosséis */}
      <div className="absolute inset-0 flex flex-col">
        {/* Carrossel 1 (Superior, rola para a esquerda) */}
        <div className="flex-1 flex items-center overflow-hidden">
          <div className="w-max flex flex-nowrap animate-scroll-left">
            {doubledProjects.map((project, index) => (
              <a
                href={project.projectUrl}
                key={`top-${project.id}-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-64 md:w-96 mx-4 transition-transform duration-300 hover:scale-105 hover:z-10 opacity-70 hover:opacity-100"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-auto rounded-xl shadow-2xl shadow-black/30"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Carrossel 2 (Inferior, rola para a direita) */}
        <div className="flex-1 flex items-center overflow-hidden">
          <div className="w-max flex flex-nowrap animate-scroll-right">
            {doubledProjects.map((project, index) => (
              <a
                href={project.projectUrl}
                key={`bottom-${project.id}-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-64 md:w-96 mx-4 transition-transform duration-300 hover:scale-105 hover:z-10 opacity-70 hover:opacity-100"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-auto rounded-xl shadow-2xl shadow-black/30"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Camada de sobreposição com texto e links */}
      <div className="absolute inset-0 flex justify-center items-center bg-slate-900/60 backdrop-blur-[2px]">
        <div className="relative z-10 text-center p-8 max-w-4xl">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300 sm:text-6xl md:text-7xl">
            Thalles Alexsander Desenvolvedor Frontend
          </h1>
          <p className="mt-6 mx-auto text-lg text-slate-300">
            C'est la vie 🍂
          </p>
          <div className="mt-10 flex justify-center items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/thalles-alexsander-faria-muzzo-76baa41a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="https://github.com/Alezuzzo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="mailto:thallesander@hotmail.com"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-8 w-8" />
            </a>
            <a
              href="https://open.spotify.com/playlist/6kN8L7q0FHCTme8k4u7jO9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-500 transition-colors"
              aria-label="Spotify Playlist"
            >
              <SpotifyIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarouselSection;
