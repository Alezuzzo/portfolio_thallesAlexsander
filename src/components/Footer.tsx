import React from 'react';

const Footer: React.FC = () => (
  <footer id="contact" className="bg-slate-900 border-t border-slate-800">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
       <h2 className="text-3xl font-extrabold text-white">Vamos Conversar?</h2>
        <p className="mt-4 text-lg text-slate-400">
            Estou sempre aberto a novas oportunidades e colaborações.
        </p>
        <a 
          href="mailto:thallesander@hotmail.com" 
          className="mt-8 inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20"
        >
          Envie um E-mail
        </a>
       <p className="mt-16 text-center text-base text-slate-500">
        &copy; {new Date().getFullYear()} Thalles Alexsander. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
