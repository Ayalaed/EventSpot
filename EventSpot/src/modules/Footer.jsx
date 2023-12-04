import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-darkBlue-BG text-white">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start py-8 px-4 lg:px-16">
        <div className="mb-6 lg:mb-0 flex justify-center lg:justify-start">
          <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-widest">
            EventSpot
          </h1>
        </div>
        <nav className="mb-6 lg:mb-0 lg:ml-16">
          <h1 className="text-textOrange text-xl mb-2 lg:hidden">Menu</h1>
          <ul className="lg:flex lg:space-x-6">
            <li><Link to="/" className="hover:underline">Inicio</Link></li>
            <li><Link to="/eventos" className="hover:underline">Eventos</Link></li>
            <li><Link to="/favoritos" className="hover:underline">Favoritos</Link></li>
            <li><Link to="/historial" className="hover:underline">Historial</Link></li>
            <li><Link to="/asistidos" className="hover:underline">Asistidos</Link></li>
          </ul>
        </nav>
        <div className="flex justify-center lg:justify-start mt-6 lg:mt-0">
          <a href="https://facebook.com" className="mx-2">
            <img
              src="/img/facebook.svg"
              alt="facebook"
              className="w-8 h-8 lg:w-12 lg:h-12 hover:scale-110 transition transform duration-300"
            />
          </a>
          <a href="https://twitter.com" className="mx-2">
            <img
              src="/img/twitter.svg"
              alt="twitter"
              className="w-8 h-8 lg:w-12 lg:h-12 hover:scale-110 transition transform duration-300"
            />
          </a>
          <a href="https://instagram.com" className="mx-2">
            <img
              src="/img/instagram.svg"
              alt="instagram"
              className="w-8 h-8 lg:w-12 lg:h-12 hover:scale-110 transition transform duration-300"
            />
          </a>
        </div>
      </div>
      <div className="text-center py-4">
        <p className="text-shadow text-xs lg:text-sm xl:text-base">
          Copyright © 2023. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
