import React from 'react';
import logo from '../../../assets/logo/logo_Nosso_Contar_wide_branco.png';
import ear from '../../../assets/icons/ear.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="w-full bg-(--pink-light) flex flex-col md:flex-row md:justify-between justify-center items-center py-2 md:py-4 text-white text-m layout-padding gap-4 md:gap-10">
      <a
        href="https://github.com/laiscoutinho/nosso-contar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logo} alt="Logo Nosso Contar" className="w-auto max-w-40 md:max-w-60 select-none" />
      </a>
      <span className="w-full md:w-auto text-center md:text-right inline-flex items-center justify-center md:justify-end gap-2 select-none">
        Copyright © {currentYear} Nosso Contar | Desenvolvido com carinho.
        <img src={ear} className="h-4 w-4 md:h-5 md:w-5 select-none" alt="Orelha" />
      </span>
    </footer>
  );
}
