import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <header className="bg-slate-900/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-white">
              Thalles Alexsander
            </a>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center space-x-8">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="font-medium text-slate-300 hover:text-cyan-400 transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:bg-slate-800 focus:outline-none"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 border-t border-slate-800 pb-4">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {navLinks.map(link => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
                >
                  {link.label}
                </a>
              ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
