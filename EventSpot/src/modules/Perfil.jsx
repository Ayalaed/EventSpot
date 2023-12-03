import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Perfil() {
  const headerData = {
    title: "Perfil",
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="h-screen w-full">
      <div className="border-b border-white">
        <Header title={headerData.title} />
      </div>
      <div className="w-full py-10 flex flex-row bg-darkBlue-BG">
        <div className="w-1/3 flex flex-col">
          <div class="flex items-center justify-center w-64 h-64 rounded-[50%] overflow-hidden border-2 border-white mx-auto ">
            <img
              src="./src/static/img/bitmap.png"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col my-6">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Daniel Hernandez"
              className="mt-4 mx-10 border border-shadowBox rounded-md px-2 py-1 bg-darkBlue-BG   "
            />
            <input
              type="text"
              name="carrera"
              id="carrera"
              placeholder="Ing. Informatica"
              className="mt-4 mx-10 border border-shadowBox rounded-md px-2 py-1 bg-darkBlue-BG"
            />
          </div>
        </div>
        <div className="w-full">
          <form action="">
            <div className="flex flex-col w-4/5 m-auto">
              <label
                htmlFor="carnet"
                className="text-xl font-[500] text-white py-2"
              >
                Numero de carnet:
              </label>
              <input
                type="text"
                name="carnet"
                id="carnet"
                placeholder={localStorage.getItem('carnet')}
                className="border border-shadowBox rounded-md px-2 py-1 bg-darkBlue-BG"
              />
            </div>
            <div className="flex flex-col w-4/5 m-auto">
              <label
                htmlFor="nombre"
                className="text-xl font-[500] text-white py-2"
              >
                Nombres y Apellidos:
              </label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder={localStorage.getItem('user')}
                className="border border-shadowBox rounded-md px-2 py-1 bg-darkBlue-BG"
              />
            </div>
            <div className="flex flex-col w-4/5 m-auto">
              <label
                htmlFor="fecha"
                className="text-xl font-[500] text-white py-2"
              >
                Fecha de nacimiento:
              </label>
              <input
                type="text"
                name="fecha"
                id="fecha"
                placeholder={localStorage.getItem('nacimiento')}
                className="border border-shadowBox rounded-md px-2 py-1 bg-darkBlue-BG"
              />
            </div>
            <div className="flex flex-col w-4/5 m-auto">
              <label
                htmlFor="email"
                className="text-xl font-[500] text-white py-2"
              >
                Correo electrónico:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder={localStorage.getItem('email')}
                className="border border-shadowBox rounded-md px-2 py-1 bg-darkBlue-BG"
              />
            </div>
            <div className="flex flex-col w-4/5 m-auto">
              <label
                htmlFor="pass"
                className="text-xl font-[500] text-white py-2"
              >
                Contraseña:
              </label>
              <div className="relative">
                <input
                  type={!showPassword ? "text" : "password"}
                  name="pass"
                  id="pass"
                  placeholder={localStorage.getItem('pass')}
                  className="border border-shadowBox rounded-md px-2 py-1 bg-darkBlue-BG w-full"
                />
                <p
                  className="absolute top-2 right-2 cursor-pointer text-white my-auto h-full"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </p>
              </div>
            </div>
            <div className="flex flex-col w-4/5 m-auto">
              <label
                htmlFor="desc"
                className="text-xl font-[500] text-white py-2"
              >
                Descripción:
              </label>
              <textarea
                name="desc"
                cols="40"
                rows="5"
                placeholder="Cuerpo de la descripción"
                className="border border-shadowBox rounded-md px-2 py-1 bg-darkBlue-BG"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
      <div className="border-t border-white">
        <Footer />
      </div>
    </div>
  );
}

export default Perfil;
