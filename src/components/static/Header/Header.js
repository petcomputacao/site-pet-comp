import './Header.css';
import React, { useState } from 'react';


function Header() {
  const [setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className='navbar-container'>
      <div className='image-navbar-container'>
        <div className='image-navbar'>
          <img
            src={process.env.PUBLIC_URL + "/images/logos/logo-pet-branco.png"}
            alt="Logo PET Navbar"
            className="logoPET-image-navbar"
          />
        </div>
      </div>

      <div className='buttons-navbar-container'>
        <div className='buttons-navbar'>
          <ul className="navbar-list">
            <li className="navbar-item">
              <button className="navbar-link" onClick={() => scrollToSection('PaginaInicial')}>
                Página Inicial
              </button>
            </li>
            <li className="navbar-item">
              <button className="navbar-link" onClick={() => scrollToSection('Sobre')}>
                Sobre
              </button>
            </li>
            <li className="navbar-item">
              <button className="navbar-link" onClick={() => scrollToSection('Projetos')}>
                Projetos
              </button>
            </li>
            <li className="navbar-item">
              <button className="navbar-link" onClick={() => scrollToSection('Membros')}>
                Membros
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className='redeSocial-navbar-container'>
        <div className='redeSocial-navbar'>
          <Instagram url="https://www.instagram.com/petcomputacaoufcg/" showText={false} />
        </div>
      </div>
    </div>
  );
}

const Instagram = ({ url = "https://www.instagram.com/petcomputacaoufcg/", showText = true }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="social-link">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="social-icon"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
      {showText && "Instagram"}
    </a>
  );
};

export default Header;