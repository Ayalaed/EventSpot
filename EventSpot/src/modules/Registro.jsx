import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function IniciarSesion() {
  const [carnet, setCarnet] = useState("");
  const [nombreApellido, setNombreApellido] = useState("");
  const [nacimiento, setNacimiento] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", {
        carnet,
        nombreApellido,
        nacimiento,
        email,
        password,
      })
      .then((result) => {
        console.log(result.data); // Asegúrate de que esto imprima el contenido recibido desde el servidor
        window.location.href = "/iniciar-sesion";
      });
  };

  return (
    <main className="w-full h-screen font-['Epilogue']">
      <div className="w-full h-full flex flex-row">
        <div className="w-full bg-[url('./src/static/img/bitmap.png')] bg-cover bg-no-repeat bg-center"></div>
        <div className="w-10/12 bg-darkBlue-BG">
          <div id="logo" className="w-full flex flex-row-reverse">
            <Link to="/">
              <img
                src="./src/static/img/logo-definitivo-2.png"
                alt=""
                className="w-36 right-0 "
              />
            </Link>
          </div>
          <div className="relative px-24">
            <h1 className="text-4xl font-semibold pb-4 text-white">
              Regístrate!
            </h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="text-xl text-textOrange">
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
                    htmlFor="password"
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
                  onChange={(e) => setNombreApellido(e.target.value)}
                  className="w-full p-2 rounded-md bg-stroke text-white"
                />
              </div>
              <div className="mt-4">
                <div className="flex flex-row items-end">
                  <label
                    htmlFor="password"
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
                  onChange={(e) => setNacimiento(e.target.value)}
                  className="w-full p-2 rounded-md bg-stroke text-white"
                />
              </div>
              <div className="mt-4">
                <div className="flex flex-row items-end">
                  <label
                    htmlFor="password"
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
                  placeholder="Iniciar Sesión"
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
