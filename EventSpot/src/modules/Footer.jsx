import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-darkBlue-BG text-white">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start py-8 px-4 lg:px-16">
        <div className="mb-6 lg:mb-0 flex justify-center lg:justify-start">
          <h1 className="text-xl font-bold tracking-widest">
            EventSpot
          </h1>
        </div>
        <nav className="mb-6 lg:mb-0">
          <h1 className="text-textOrange text-xl mb-2">Menu</h1>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Inicio</Link></li>
            <li><Link to="/eventos" className="hover:underline">Eventos</Link></li>
            <li><Link to="/favoritos" className="hover:underline">Favoritos</Link></li>
            <li><Link to="/historial" className="hover:underline">Historial</Link></li>
            <li><Link to="/asistidos" className="hover:underline">Asistidos</Link></li>
          </ul>
        </nav>
        <div className="flex justify-center lg:justify-start">
          <a href="https://facebook.com" className="mx-2">
            <img
              src="./src/static/img/facebook.svg"
              alt="facebook"
              className="w-12 h-12 hover:scale-110 transition transform duration-300"
            />
          </a>
          <a href="https://twitter.com" className="mx-2">
            <img
              src="./src/static/img/twitter.svg"
              alt="twitter"
              className="w-12 h-12 hover:scale-110 transition transform duration-300"
            />
          </a>
          <a href="https://instagram.com" className="mx-2">
            <img
              src="./src/static/img/instagram.svg"
              alt="instagram"
              className="w-12 h-12 hover:scale-110 transition transform duration-300"
            />
          </a>
        </div>
      </div>
      <div className="text-center py-4">
        <p className="text-shadow">
          Copyright © 2023. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;