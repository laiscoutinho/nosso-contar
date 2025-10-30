import React, { useState } from "react";
import logo from '../../../assets/logo/logo_Nosso_Contar_wide.png';
import NavMenuHeader from './components/NavMenu';

export default function Header({ routes }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <header className="relative top-0 left-0 h-25 bg-(--white-soft) text-pink-strong z-50 px-10 flex items-center justify-between layout-margin">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo Nosso contar" className="w-auto max-w-40 md:max-w-60" />
      </div>

      {/* BOTÃO HAMBURGUER MOBILE */}
      <div className="lg:hidden cursor-pointer z-[60]" onClick={toggleMenu}>
        <svg viewBox="0 0 60 40" className="w-8 h-8">
          <g stroke="var(--pink-strong)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path
              d="M10,10 L50,10"
              className={`transition-all duration-300 origin-center ${menuVisible ? 'translate-y-[5px] rotate-45' : ''}`}
            />
            <path
              d="M10,20 L50,20"
              className={`transition-all duration-300 ${menuVisible ? 'opacity-0' : 'opacity-100'}`}
            />
            <path
              d="M10,30 L50,30"
              className={`transition-all duration-300 origin-center ${menuVisible ? '-translate-y-[10px] -rotate-45' : ''}`}
            />
          </g>
        </svg>
      </div>

        {/* MENU DESKTOP */}
        <nav className="hidden lg:flex lg:flex-row lg:items-center lg:gap-6">
            <NavMenuHeader routes={routes} isHovered={true} />
        </nav>

        {/* MENU MOBILE */}
        {menuVisible && (
            <nav className="flex flex-col gap-4 bg-(--white-soft) absolute top-25 right-0 px-6 py-6 w-64 z-40 shadow-lg rounded-bl-xl lg:hidden">
            <NavMenuHeader routes={routes} isHovered={true} isMobile={true} />
            </nav>
        )}
    </header>
  );
}
