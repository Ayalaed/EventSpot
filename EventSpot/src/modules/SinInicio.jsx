import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function SinInicio() {
  return (
    <div className="w-full h-screen font-['Epilogue']">
      <div className="w-full h-100 bg-cover bg-[url('static/img/background.jpeg')]">
        <div className="border-b border-shadow w-11/12 m-auto flex flex-row justify-between items-center">
          <Link to="/">
            <img
              src="static/img/logo-definitivo-2.png"
              alt=""
              className="w-30 hover:cursor-pointer"
            />
          </Link>
          <Link to="/iniciar-sesion">
            <div className="m-auto uppercase border-2 border-shadowBox rounded-md">
              <p className="text-sm text-white px-4 py-3 hover:cursor-pointer hover:text-darkBlue-BG hover:bg-white font-semibold">
                Iniciar Sesión
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row w-full py-10 px-6">
          <div className="w-full md:w-1/2 flex align-center justify-center mb-6 md:mb-0">
            <img src="static/img/bgbit.png" alt="bitmap.png" className="max-w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 flex align-center justify-center">
            <div className="flex flex-col gap-10 px-6 md:px-16 text-center">
              <h1 className="text-4xl md:text-5xl font-[900] text-darkBlue-BG">
                ¡ÚNETE A NUESTRA COMUNIDAD!
              </h1>
              <p className="text-xl md:text-justify font-[400]">
                EventSpot, tu página de confianza que administra tus eventos; te
                invita a que seas parte de esta maravillosa plataforma que
                facilitará tu organización de los eventos realizados en la
                Universidad José Simeón Cañas.
              </p>
              <input
                type="submit"
                value="INICIAR SESION"
                className="w-full md:w-4/12 py-3 hover:ease-in-out hover:duration-500 rounded-md shadow-xl shadow-gray-400 font-bold hover:bg-shadowBox text-darkBlue-BG"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full py-10 px-6">
          <div className="w-full md:w-1/2 flex align-center justify-center">
            <div className="flex flex-col gap-10 px-6 md:px-16 text-center">
              <h3 className="text-md text-textOrange">
                ACERCA DE NOSOTROS
              </h3>
              <h1 className="text-4xl md:text-5xl font-[900] text-darkBlue-BG">
                CONOCE ACERCA DE NUESTRO PROYECTO
              </h1>
              <p className="text-xl md:text-justify font-[400]">
                EventSpot: plataforma exclusiva de la Universidad
                Centroamericana José Simeón Cañas para la gestión eficiente de
                eventos. Diseñada para todos los estudiantes, garantiza la mejor
                experiencia y organización en la realización de sus eventos
                seleccionados.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex align-center justify-center mb-6 md:mb-0">
            <img src="static/img/bgbit.png" alt="bitmap.png" className="max-w-full h-auto" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full py-10 px-6">
          <div className="w-full md:w-1/2 flex align-center justify-center">
            <div className="flex flex-col gap-10 px-6 md:px-16 text-center">
              <h3 className="text-md text-textOrange">EVENTOS</h3>
              <h1 className="text-4xl md:text-5xl font-[900] text-darkBlue-BG">
                ¡CONOCE LOS PRÓXIMOS EVENTOS!
              </h1>
              <p className="text-xl md:text-justify font-[400]">
                Cada semana, la universidad organiza eventos que pueden resultar
                de interés o contribuir a las horas sociales de los estudiantes.
                ¡Aprovecha estas oportunidades semanales para participar y
                hacer una diferencia!
              </p>
              <h5 className="text-textOrange hover:underline hover:cursor-pointer">
                Ver más
              </h5>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex align-center justify-center">
            <div className="flex flex-col m-auto">
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <h1 className="text-8xl text-darkBlue-BG font-black">1</h1>
                </div>
                <div className="m-auto w-full px-2">
                  <div className="text-darkBlue-BG font-bold text-2xl">
                    PRIMER EVENTO
                  </div>
                  <div className="text-textOrange text-xl">
                    28/09/2023 | 2PM
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <h1 className="text-8xl text-darkBlue-BG font-black">2</h1>
                </div>
                <div className="m-auto w-full px-2">
                  <div className="text-darkBlue-BG font-bold text-2xl">
                    SEGUNDO EVENTO
                  </div>
                  <div className="text-textOrange text-xl">
                    28/09/2023 | 2PM
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <h1 className="text-8xl text-darkBlue-BG font-black">3</h1>
                </div>
                <div className="m-auto w-full px-2">
                  <div className="text-darkBlue-BG font-bold text-2xl">
                    TERCER EVENTO
                  </div>
                  <div className="text-textOrange text-xl">
                    28/09/2023 | 2PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-96 bg-darkBlue-BG flex flex-col">
        <div className="h-full flex flex-row w-11/12 border-b border-shadow m-auto">
          <div className="flex w-2/12">
            <h1 className="w-full text-center text-white my-14 text-xl font-bold tracking-widest ">
              EventSpot
            </h1>
          </div>
          <div className="flex w-3/5 flex-col my-14">
            <h1 className="text-textOrange text-xl">Menu</h1>
            <ol className="text-shadowBox text-md">
              <li className="hover:underline w-1/6">Inicio</li>
              <li className="hover:underline w-1/6">Eventos</li>
              <li className="hover:underline w-1/6">Favoritos</li>
              <li className="hover:underline w-1/6">Historial</li>
              <li className="hover:underline w-1/6">Asistidos</li>
            </ol>
          </div>
          <div className="flex flex-row mx-auto">
            <div className="w-12 h-12 my-14 mx-2 bg-textOrange rounded-[50%]">
              <div className="w-full h-full flex">
                <img
                  src="./src/static/img/facebook.svg"
                  alt="facebook"
                  className="m-auto hover:scale-150 ease-in duration-300"
                />
              </div>
            </div>
            <div className="w-12 h-12 my-14 mx-2 bg-textOrange rounded-[50%]">
              <div className="w-full h-full flex">
                <img
                  src="static/img/twitter.svg"
                  alt="twitter"
                  className="m-auto hover:scale-150 ease-in duration-300"
                />
              </div>
            </div>
            <div className="w-12 h-12 my-14 mx-2 bg-textOrange rounded-[50%]">
              <div className="w-full h-full flex">
                <img
                  src="static/img/instagram.svg"
                  alt="instagram"
                  className="m-auto hover:scale-150 ease-in duration-300"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-1/3 w-11/12 m-auto flex">
          <h1 className="m-auto flex text-shadow text-center">
            Copyright © 2023. All Rights Reserved.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SinInicio;
