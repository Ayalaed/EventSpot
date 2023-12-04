import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

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
      <div className="w-full py-10 flex flex-col md:flex-row bg-darkBlue-BG">
        <div className="w-full md:w-1/3 mb-6 md:mb-0 md:flex md:flex-col md:items-center">
          <div className="flex items-center justify-center w-64 h-64 rounded-[50%] overflow-hidden border-2 border-white mx-auto">
            <img
              src="./src/static/img/bitmap.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col my-6 items-center">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Daniel Hernandez"
              className="mt-4 w-full md:w-52 border border-shadowBox rounded-md px-2 py-1 bg-darkBlue-BG text-sm"
            />
            <input
              type="text"
              name="carrera"
              id="carrera"
              placeholder="Ing. Informatica"
              className="mt-4 w-full md:w-52 border border-shadowBox rounded-md px-2 py-1 bg-darkBlue-BG text-sm"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <form action="" className="flex flex-col w-full m-auto">
            <div className="flex flex-col w-full m-auto">
              <label
                htmlFor="carnet"
                className="text-lg md:text-xl font-[500] text-white py-2 pl-2"
              >
                Numero de carnet:
              </label>
              <input
                type="text"
                name="carnet"
                id="carnet"
                placeholder="00015322"
                className="border border-shadowBox rounded-md px-2 py-1 bg-darkBlue-BG text-sm"
              />
            </div>

            <div className="flex flex-col w-full m-auto mt-4">
              <label
                htmlFor="nombre"
                className="text-lg md:text-xl font-[500] text-white py-2 pl-2"
              >
                Nombres y Apellidos:
              </label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Jonathan Daniel"
                className="border border-shadowBox rounded-md px-2 py-1 bg-darkBlue-BG text-sm"
              />
            </div>
            <div className="flex flex-col w-full m-auto mt-4">
              <label
                htmlFor="fecha"
                className="text-lg md:text-xl font-[500] text-white py-2 pl-2"
              >
                Fecha de nacimiento:
              </label>
              <input
                type="date"
                name="fecha"
                id="fecha"
                placeholder="11/09/2002"
                className="border border-shadowBox rounded-md px-2 py-1 bg-darkBlue-BG text-sm"
              />
            </div>
            <div className="flex flex-col w-full m-auto mt-4">
              <label
                htmlFor="email"
                className="text-lg md:text-xl font-[500] text-white py-2 pl-2"
              >
                Correo electrónico:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="00015322@uca.edu.sv"
                className="border border-shadowBox rounded-md px-2 py-1 bg-darkBlue-BG text-sm"
              />
            </div>
            <div className="flex flex-col w-full m-auto mt-4">
              <label
                htmlFor="pass"
                className="text-lg md:text-xl font-[500] text-white py-2 pl-2"
              >
                Contraseña:
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="pass"
                  id="pass"
                  placeholder="*********"
                  className="border border-shadowBox rounded-md px-2 py-1 bg-darkBlue-BG w-full text-sm"
                />
                <p
                  className="absolute top-2 right-2 cursor-pointer text-white my-auto h-full"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full m-auto mt-4">
              <label
                htmlFor="desc"
                className="text-lg md:text-xl font-[500] text-white py-2 pl-2"
              >
                Descripción:
              </label>
              <textarea
                name="desc"
                cols="40"
                rows="5"
                placeholder="Cuerpo de la descripción"
                className="border border-shadowBox rounded-md px-2 py-1 bg-darkBlue-BG text-sm"
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
