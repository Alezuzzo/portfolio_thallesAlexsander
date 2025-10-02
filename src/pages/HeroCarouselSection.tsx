import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { userProjects } from "../data/projects";

const HeroCarouselSection: React.FC = () => {
  const doubledProjects = [
    ...userProjects,
    ...userProjects,
    ...userProjects,
  ];

  const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <title>WhatsApp icon</title>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.488 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);


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

      <div className="absolute inset-0 flex flex-col">
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
            <a href="https://wa.me/5535991871679" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <WhatsappIcon className="h-7 w-7 text-slate-400 transition-transform hover:scale-110 hover:text-green-500" />
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
