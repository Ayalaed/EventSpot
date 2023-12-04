import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CalificacionEstrellas from "./CalificacionEstrellas";
import axios from "axios";

function VerMas() {
  const { id } = useParams();
  const [eventofinalizado, setEventofinalizado] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [evento, setEvento] = useState([]);
  const handleClick = () => {
    setIsExpanded((prevValue) => !prevValue);
  };
  const headerData = {
    title: "",
  };
  useEffect(() => {
    // Realizar la solicitud al servidor Express para obtener el evento específico por ID
    axios
      .get(`http://localhost:3001/eventos/${id}`)
      .then((response) => {
        setEvento(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener el evento:", error);
      });
  }, [id]);

  function imprimirParrafos(texto) {
    // Dividir el texto en párrafos utilizando el punto y aparte como delimitador
    var parrafos = texto.split("\n");

    // Filtrar párrafos vacíos y mapear a elementos <p>
    return parrafos
      .filter((parrafo) => parrafo.trim() !== "")
      .map((parrafo, index) => (
        <p key={index} className="text-xl text-justify font-[400]">
          {parrafo.trim()}
        </p>
      ));
  }

  return (
    <div className="h-screen font-['Epilogue']">
      <div>
        <Header title={headerData.title} />
      </div>
      <div className="w-4/5 m-auto flex flex-col py-10">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl text-center font-[900] text-darkBlue-BG">
            {evento.nombre || "Nombre del Evento"}
          </h1>
          {imprimirParrafos(evento.descripcion || "Descripción del evento")}
          <div className="flex flex-col gap-4">
            <div className="flex flex-row">
              <h1 className="w-full text-xl font-[600] m-auto">
                Fecha del evento:{" "}
                <span className="font-[400] text-textOrange">
                  {evento?.fecha || "Fecha no disponible"} |{" "}
                  {evento.hora || "Hora no disponible"}
                </span>
              </h1>
              <h1 className="w-full text-xl text-center font-[600] m-auto">
                Calificación disponible al finalizar el evento
              </h1>
            </div>
            <div className="flex flex-row">
              <h1 className="w-full text-xl font-[600] m-auto">
                Cupos disponibles:{" "}
                <span className="font-[400] text-textOrange">
                  {evento.cupos || "Cupos no disponibles"}
                </span>
              </h1>
              <h1 className="w-full text-center m-auto">
                <CalificacionEstrellas eventofinalizado={false} />
              </h1>
            </div>
            <div className="flex flex-row w-4/5 gap-4 pt-4">
              <div className="m-auto uppercase rounded-md w-full bg-green-700 hover:rounded-md">
                <p className="text-sm tracking-widest text-center text-white px-4 py-3 hover:cursor-pointer hover:rounded-md hover:text-darkBlue-BG hover:bg-green-700 font-[400] hover:font-[400]">
                  INSCRIBIRSE
                </p>
              </div>
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden bg-darkBlue-BG"
                onClick={handleClick}
              >
                <ion-icon
                  name={isExpanded ? "bookmark" : "bookmark-outline"}
                  class="text-textOrange text-2xl"
                ></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default VerMas;
