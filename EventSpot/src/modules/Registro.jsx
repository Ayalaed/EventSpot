import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function IniciarSesion() {
  const [carnet, setCarnet] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const baseUrl=import.meta.env.VITE_API_URL;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${baseUrl}/register`, {
        carnet,
        nombreApellido: name,
        nacimiento: date,
        email,
        password,
      })
      .then((result) => {
        console.log(result.data);
        window.location.href = "/iniciar-sesion";
      });
  };

  return (
    <main className="w-full h-screen font-['Epilogue']">
      <div className="w-full h-full flex flex-row">
        <div className="w-full bg-[url('./src/static/img/bitmap.png')] bg-cover bg-no-repeat bg-center sm:hidden"></div>
        <div className="w-full sm:w-full md:w-2/3 bg-[url('./src/static/img/bitmap.png')] bg-cover bg-no-repeat bg-center hidden sm:block"></div>
        <div className="w-full sm:w-full md:w-1/3 bg-darkBlue-BG flex items-center justify-center">
          <div className="relative px-4 sm:px-8 lg:px-24 w-full max-w-md lg:max-w-xl">
            <h1 className="text-4xl font-semibold pb-4 sm:pb-8 text-white text-center">
              Registrate!
            </h1>
            <form onSubmit={handleSubmit} className="w-full">
              <div>
                <label htmlFor="carnet" className="text-xl text-textOrange">
                  Carnet:
                </label>
                <br />
                <input
                  type="text"
                  name="carnet"
                  id="carnet"
                  placeholder="Ingresa tu carnet"
                  onChange={(e) => setCarnet(e.target.value)}
                  className="w-full p-2 rounded-md bg-stroke text-white"
                />
              </div>
              <div className="mt-4">
                <div className="flex flex-row items-end">
                  <label
                    htmlFor="name"
                    className="text-xl text-textOrange "
                  >
                    Nombre y apellidos
                  </label>
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ingresa tu nombre y tus dos apellidos"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 rounded-md bg-stroke text-white"
                />
              </div>
              <div className="mt-4">
                <div className="flex flex-row items-end">
                  <label
                    htmlFor="date"
                    className="text-xl text-textOrange "
                  >
                    Fecha de nacimiento
                  </label>
                </div>
                <input
                  type="date"
                  name="date"
                  id="date"
                  placeholder="Ingresa tu fecha de nacimiento"
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-2 rounded-md bg-stroke text-white"
                />
              </div>
              <div className="mt-4">
                <div className="flex flex-row items-end">
                  <label
                    htmlFor="email"
                    className="text-xl text-textOrange "
                  >
                    Email
                  </label>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Ingresa tu email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 rounded-md bg-stroke text-white"
                />
              </div>
              <div className="mt-4">
                <div className="flex flex-row items-end">
                  <label
                    htmlFor="password"
                    className="text-xl text-textOrange "
                  >
                    Contraseña
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Ingresa tu contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 rounded-md bg-stroke text-white"
                />
              </div>
              <div className="mt-4">
                <input
                  type="submit"
                  name="IniciarSesion"
                  id="IniciarSesion"
                  value="Iniciar Sesión"
                  className="w-full p-2 rounded-md bg-shadowBox text-textOrange hover:cursor-pointer text-md"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default IniciarSesion;
