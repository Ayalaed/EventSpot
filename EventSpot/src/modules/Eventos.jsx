import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

function Eventos() {
  const headerData = {
    title: "Eventos",
  };

  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    // Realizar la solicitud al servidor Express para obtener eventos
    axios.get("http://localhost:3001/eventos")
      .then((response) => {
        setEventos(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener eventos:", error);
      });
  }, []);

  const renderEventos = () => {
    return eventos.map((evento) => (
      <div key={evento._id} className="w-full h-97 border border-shadow">
        <div className="w-full min-h-9/12 h-97 px-4 py-4">
          <div className="bg-[url('./src/static/img/bitmap.png')] h-[65%] rounded-t-md"></div>
          <div className="min-h-[35%] bg-shadowBox rounded-b-md flex w-full flex-col">
            <div className="p-4 my-auto flex flex-col gap-2">
              <h1 className="text-xl font-semibold text-darkBlue-BG overflow-auto max-h-16">
                {evento.nombre}
              </h1>
              <h2 className="text-lg text-textOrange">{evento.fecha} | {evento.hora}</h2>
              <Link to={`/ver-mas/${evento._id}`}>
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

  return (
    <div className="h-screen">
      <div>
        <Header title={headerData.title} />
      </div>
      <div className="w-full font-['Epilogue'] py-10">
        <form action="" method="" className="flex flex-row w-full px-6">
          <input
            type="text"
            name="NombreEvento"
            id=""
            value="Nombre del evento"
            className="mr-10 pl-4 bg-shadowBox w-1/3 py-2 rounded-md border border-b-darkBlue-BG"
          />
          <select
            name="Carrera"
            id=""
            className="mr-10 pl-4 bg-shadowBox w-1/5 py-2 rounded-md border border-b-darkBlue-BG"
          >
            <option value="Carrera" selected>
              Carrera
            </option>
            <option value="Ing. Informatica">Ing. Informatica</option>
            <option value="Ing. Civil">Ing. Civil</option>
          </select>
          <input
            type="submit"
            name="buscar"
            value="Buscar"
            className="bg-darkBlue-BG px-10 py-2 rounded-md text-white"
          />
        </form>
        {/* Primera fila */}
        <div className="w-full grid grid-cols-3 py-12">{renderEventos()}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Eventos;