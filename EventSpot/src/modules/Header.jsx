import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  const { title } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-darkBlue-BG w-full">
      {/* Navbar for desktop and larger screens */}
      <div className="hidden sm:flex w-full h-96 flex-col">
        <div className="border-b border-shadow w-full flex flex-row justify-between items-center p-4">
          <Link to="/">
            <img
              src="/img/logo-definitivo-2.png"
              alt="Logo"
              className="w-30 h-auto"
            />
          </Link>
          <div className="flex flex-row items-center">
            <nav className="flex flex-row space-x-4">
              <Link to="/" className="text-white px-4 py-2 hover:underline">Inicio</Link>
              <Link to="/eventos" className="text-white px-4 py-2 hover:underline">Eventos</Link>
              <Link to="/favoritos" className="text-white px-4 py-2 hover:underline">Favoritos</Link>
              <Link to="/historial" className="text-white px-4 py-2 hover:underline">Historial</Link>
              <Link to="/asistidos" className="text-white px-4 py-2 hover:underline">Asistidos</Link>
            </nav>
            <div className="flex flex-col text-white ml-6">
              <span className="font-semibold">Daniel Hernandez</span>
              <span>00015322</span>
            </div>
            <Link to="/perfil" className="flex items-center justify-center ml-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                <img
                  src="/img/bitmap.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex-grow flex items-center justify-center">
          <h1 className="text-7xl font-bold text-white uppercase">{title}</h1>
        </div>
      </div>

      {/* Navbar for mobile screens */}
      <div className="sm:hidden w-full h-auto bg-darkBlue-BG flex flex-col">
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/">
            <img
              src="/img/logo-definitivo-2.png"
              alt="Logo"
              className="w-20 h-auto"
            />
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            {/* Here should be your hamburger icon */}
          </button>
        </div>
        <div className={`px-2 pt-2 pb-3 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="block px-3 py-2 text-white hover:underline">Inicio</Link>
          <Link to="/eventos" className="block px-3 py-2 text-white hover:underline">Eventos</Link>
          <Link to="/favoritos" className="block px-3 py-2 text-white hover:underline">Favoritos</Link>
          <Link to="/historial" className="block px-3 py-2 text-white hover:underline">Historial</Link>
          <Link to="/asistidos" className="block px-3 py-2 text-white hover:underline">Asistidos</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
