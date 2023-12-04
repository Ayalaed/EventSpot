import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function ConInicio() {
  const eventos = [
    "Conferencia de Innovación Tecnológica",
    "Taller de Marketing Digital",
    "Competencia de Programación",
  ];
  const fecha = ["023-03-15", "2023-04-10", "2023-05-20"];
  const hora = ["14:00", "10:30", "16:00"];
  const id = [
    "656ab2bdbe5a625ad47aedf6",
    "656ab2bdbe5a625ad47aedf7",
    "656ab2bdbe5a625ad47aedf8",
  ];

  const renderBoxes = () => {
    return eventos.map((evento, i) => (
      <div key={i} className="w-full h-97 border border-shadow mb-8">
        <div className="w-full min-h-9/12 h-97 px-4 py-4">
          <div className="bg-[url('/img/bitmap.png')] h-[65%] rounded-t-md"></div>
          <div className="min-h-[35%] bg-shadowBox rounded-b-md flex w-full flex-col">
            <div className="p-4 my-auto flex flex-col gap-2">
              <h1 className="text-xl font-semibold text-darkBlue-BG overflow-auto max-h-16">
                {evento}
              </h1>
              <h2 className="text-lg text-textOrange">
                {fecha[i]} | {hora[i]}
              </h2>
              <Link to={`/ver-mas/${id[i]}`}>
                <input
                  type="submit"
                  value="Ver más"
                  className="hover:cursor-pointer bg-darkBlue-BG py-2 px-4 text-white text-md rounded-md hover:text-textOrange font-[400] w-1/4"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  function EventComponent({ eventNumber }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
      setIsExpanded((prevValue) => !prevValue);
    };

    return (
      <div className="flex flex-col border p-4 bg-white rounded-md mb-8">
        <div className="flex flex-row gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden bg-textOrange">
            <img
              src="/img/combined-shape-8.svg"
              alt=""
              className="w-1/2 h-1/2 object-cover"
            />
          </div>
          <div className="my-auto">
            <h1>Evento {eventNumber}</h1>
          </div>
        </div>
        <div className="flex flex-col py-4">
          <p>Competencia de Programación</p>
          <ul className="px-2 pt-3 pb-1">
            <li>* Demuestra tus habilidades en una competencia de programación intensa.</li>
            <li>* 2023-05-20 | 16:00</li>
          </ul>
        </div>
        <div className="flex flex-row gap-4">
          <div
            className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden bg-darkBlue-BG"
            onClick={handleClick}
          >
            <ion-icon
              name={isExpanded ? "bookmark" : "bookmark-outline"}
              class="text-textOrange text-2xl"
            ></ion-icon>
          </div>
          <div className="my-auto">
            <Link to="/ver-mas/656ab2bdbe5a625ad47aedf8">
              <h1 className="text-textOrange hover:underline">Ver más</h1>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const renderEvents = () => {
    return Array.from({ length: 2 }, (_, i) => (
      <EventComponent key={i} eventNumber={i + 1} />
    ));
  };

  return (
    <div className="w-full h-screen font-['Epilogue']">
      <div className="w-full h-100 bg-[url('/img/background.jpeg')]">
        <div className="border-b border-shadow w-11/12 m-auto flex flex-row">
          <Link to="/">
            <img
              src="/img/logo-definitivo-2.png"
              alt=""
              className="w-30 hover:cursor-pointer"
            />
          </Link>
          <div className="m-auto mr-0 uppercase rounded-md flex flex-row">
            <Link to="/" className="m-auto">
              <p className="m-auto text-sm text-black px-8 py-3 hover:cursor-pointer hover:underline">
                Inicio
              </p>
            </Link>
            <Link to="/eventos" className="m-auto">
              <p className="m-auto text-sm text-black px-10 py-3 hover:cursor-pointer hover:underline">
                Eventos
              </p>
            </Link>
            <Link to="/favoritos" className="m-auto">
              <p className="m-auto text-sm text-black px-10 py-3 hover:cursor-pointer hover:underline">
                Favoritos
              </p>
            </Link>
            <Link to="/historial" className="m-auto">
              <p className="m-auto text-sm text-black px-10 py-3 hover:cursor-pointer hover:underline">
                Historial
              </p>
            </Link>
            <Link to="/asistidos" className="m-auto">
              <p className="text-sm text-black px-10 py-3 hover:cursor-pointer hover:underline">
                Asistidos
              </p>
            </Link>
            <p
              className="text-sm text-black px-10 py-3 hover:cursor-pointer hover:underline m-auto"
              onClick={() => {
                localStorage.setItem("showHome", "false");
                window.location.href = "/";
              }}
            >
              Cerrar Sesión
            </p>
            <div className="flex flex-row">
              <div className="flex flex-col mx-6 text-center">
                <p className="font-semibold text-black">
                  {localStorage.getItem("user")}
                </p>
                <p className="text-black">{localStorage.getItem("carnet")}</p>
              </div>
              <Link to="/perfil">
                <div class="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src="/img/bitmap.png"
                    alt=""
                    class="w-full h-full object-cover"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-10 px-6">
        <div className="w-full flex align-center justify-center">
          <div className="flex flex-col gap-10 px-16 align-center justify-center">
            <h3 className="text-md text-textOrange text-center uppercase">
              Eventos recomendados
            </h3>
            <h1 className="text-4xl text-center font-[900] text-darkBlue-BG">
              EVENTOS RELACIONADOS A TU CARRERA
            </h1>
            <div className="flex flex-row mx-28">{renderEvents()}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-10 bg-darkBlue-BG">
        <div className="flex flex-col px-16 align-center justify-center py-6 w-4/5 m-auto">
          <h3 className="text-md text-textOrange text-left uppercase py-2">
            Nuestro eventos
          </h3>
          <div className="flex flex-row">
            <div className="w-full">
              <h1 className="text-4xl text-left font-[900] text-white py-4 uppercase">
                Proximos eventos
              </h1>
            </div>
            <div className="w-1/5 m-auto">
              <Link to="/eventos">
                <div className="m-auto mr-0 uppercase border-2 border-shadowBox rounded-md ">
                  <p className="text-sm text-center text-white px-4 py-3 hover:cursor-pointer hover:text-darkBlue-BG hover:bg-white font-semibold">
                    ver todo
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row">{renderBoxes()}</div>
      </div>
      <div className="pt-10 flex flex-col">
        <div className="flex flex-col gap-10 w-4/5 m-auto px-16">
          <h1 className="uppercase text-4xl text-center font-[900] text-darkBlue-BG">
            Fórmate, diviértete y crece profesionalmente con nosotros
          </h1>
          <p className="text-xl text-justify font-[400]">
            Con EventSpot puedes personalizar a tu manera los eventos que sean
            de tu interés, elegir la categoría de los eventos que sean más de tu
            relevancia, o que sean de tu carrera. Tambien puedes personalizar tu
            perfil a tu manera, guardar tus eventos importantes e incluso
            interactuar con el evento al dar una reseña a través de buhitos.
          </p>
        </div>
        <div className="flex flex-row pt-10">
          <div className="bg-[url('/img/bitmap-2.png')] h-96 w-full bg-cover"></div>
          <div className="bg-[url('/img/bitmap-3.png')] h-96 w-full bg-cover"></div>
          <div className="bg-[url('/img/bitmap-4.png')] h-96 w-full bg-cover"></div>
          <div className="bg-[url('/img/bitmap-5.png')] h-96 w-full bg-cover"></div>
          <div className="bg-[url('/img/bitmap-6.png')] h-96 w-full bg-cover"></div>
          <div className="bg-[url('/img/bitmap-2.png')] h-96 w-full bg-cover"></div>
        </div>
      </div>
      <div className="flex flex-row py-24 bg-darkBlue-BG mb-[1px]">
        <div className="w-full ">
          <div className="flex flex-col bg-white rounded-md w-2/3 m-auto">
            <div className="mx-10 mt-8">
              <h1 className="uppercase text-black font-[600]">Contactanos</h1>
            </div>
            <form
              className="flex flex-col pb-6"
              onSubmit={() => {
                const asunto = document.getElementById("asunto");
                const mensaje = document.getElementById("mensaje");
                const email = document.getElementById("email");
                if (
                  asunto != null ||
                  (asunto != "" && email != null) ||
                  (email != "" && mensaje != null) ||
                  mensaje != ""
                ) {
                } else {
                  alert(
                    "Un asesor se pondra en contacto contigo, gracias por preferirnos"
                  );
                }
              }}
            >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="my-4 mx-10 border border-shadowBox rounded-sm px-2 py-1"
                required
              />
              <input
                type="text"
                name="asunto"
                id="asunto"
                placeholder="Asunto"
                className="my-4 mx-10 border border-shadowBox rounded-sm px-2 py-1"
                required
              />
              <textarea
                name="mensaje"
                cols="40"
                rows="5"
                placeholder="Mensaje"
                id="mensaje"
                className="my-4 mx-10 border border-shadowBox rounded-sm px-2 py-1"
                required
              ></textarea>
              <div className="flex flex-row-reverse">
                <input
                  type="submit"
                  value="Enviar"
                  className="hover:cursor-pointer bg-textOrange py-2 px-4 mx-10 text-white text-md rounded-md hover:text-darkBlue-BG font-[500] w-1/4"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="pr-10 flex flex-col w-2/3 m-auto">
          <div className="w-4/5 flex gap-4 flex-col">
            <h3 className="text-md text-textOrange text-left uppercase py-2">
              CONTACTO
            </h3>
            <h1 className="uppercase text-4xl text-left font-[900] text-white">
              CONTACTANOS
            </h1>
            <p className="text-lg text-justify font-[400] text-shadow">
              para mas información o alguna duda puedes consultar:
            </p>
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex flex-row gap-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden bg-textOrange">
                  <img
                    src="/img/shape-2.svg"
                    alt=""
                    className="w-1/2 h-1/2 object-cover"
                  />
                </div>
                <h1 className="my-auto font-[400] text-lg text-shadow">
                  Blvr. Los Proceres, San Salvador, El Salvador
                </h1>
              </div>
              <div className="flex flex-row gap-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden bg-textOrange">
                  <img
                    src="/img/path.svg"
                    alt=""
                    className="w-1/2 h-1/2 object-cover"
                  />
                </div>
                <h1 className="my-auto font-[400] text-lg text-shadow">
                  +503 (234) 567-89-00
                </h1>
              </div>
              <div className="flex flex-row gap-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden bg-textOrange">
                  <img
                    src="/img/shape.svg"
                    alt=""
                    className="w-1/2 h-1/2 object-cover"
                  />
                </div>
                <h1 className="my-auto font-[400] text-lg text-shadow">
                  info@eventspot.com
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ConInicio;
