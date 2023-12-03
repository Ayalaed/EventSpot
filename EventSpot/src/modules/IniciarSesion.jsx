import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./IniciarSesion.css"; 

function IniciarSesion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        if (result.data.status === "success") {
          const { carnet } = result.data;
          const { nombreApellido } = result.data;
          const { email } = result.data;
          const { nacimiento } = result.data;
          const { pass } = result.data;
  
          localStorage.setItem("showHome", "true");
          localStorage.setItem("carnet", carnet);
          localStorage.setItem("user", nombreApellido);
          localStorage.setItem("email", email);
          localStorage.setItem("nacimiento", nacimiento);
          localStorage.setItem("pass", password);
          alert("Login Succussfully")
          window.location.href = "/"
        }else if(result.data == "The password is incorrect"){
          alert("The password is incorrect")
        }else if(result.data == "No record existed"){
          alert("No record existed")
        }
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
            <h1 className="text-4xl font-semibold pb-8 text-white">
              Bienvenido!
            </h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="text-xl text-textOrange">
                  Email
                </label>
                <br />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Ingresa tu email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 rounded-md bg-stroke"
                />
              </div>
              <div className="mt-6">
                <div className="flex flex-row items-end">
                  <label
                    htmlFor="password"
                    className="text-xl text-textOrange "
                  >
                    Contraseña
                  </label>
                  <span className="text-md ml-auto text-shadowBox hover:underline hover:cursor-pointer">
                    ¿Has olvidado tu contraseña?
                  </span>
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
              <div className="mt-8">
                <input
                  type="submit"
                  name="IniciarSesion"
                  id="IniciarSesion"
                  placeholder="Iniciar Sesion"
                  className="w-full p-2 rounded-md bg-shadowBox text-textOrange hover:cursor-pointer text-md"
                />
              </div>
            </form>
            <div className="text-md pt-10 w-full">
              <h1 className="text-center text-shadow text-md font-light">
                O inicia sesión con
              </h1>
            </div>
            <div className="mt-8 w-3/4 flex items-center justify-center border-shadowBox border rounded-md m-auto">
              <button className="flex items-center justify-center w-3/4 p-2 rounded-md bg-darkBlue-GB ">
                <img
                  src="./src/static/img/logo-google.svg"
                  alt=""
                  className=""
                />{" "}
                <span className="ml-2 text-textOrange text-xl">
                  Cuentas Google UCA
                </span>{" "}
              </button>
            </div>
            <div className="w-auto mb-0 pt-20">
              <h1 className="m-auto text-center text-shadow">
                ¿Todavía no tienes cuenta?{" "}
                <Link to="/registro">
                  <span className=" text-white hover:cursor-pointer hover:underline">
                    Crea una ahora
                  </span>
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default IniciarSesion;
