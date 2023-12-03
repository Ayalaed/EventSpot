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
  const [inscrito, setInscrito] = useState(false);
  const [cuposDisponibles, setCuposDisponibles] = useState(30);
  const [fechaEvento, setFechaEvento] = useState("28/09/2023");

  const handleClick = () => {
    setIsExpanded((prevValue) => !prevValue);
  };

  const handleInscripcion = () => {
    if (inscrito) {
      setCuposDisponibles((prevCupos) => prevCupos + 1);
      setInscrito(false);
    } else {
      if (cuposDisponibles > 0) {
        setCuposDisponibles((prevCupos) => prevCupos - 1);
        setInscrito(true);

        const historial = JSON.parse(localStorage.getItem('historial')) || [];
        const eventoActual = {
          id: Date.now(),
          nombre: evento.nombre,
          fecha: evento.fecha,
        };
        historial.push(eventoActual);
        localStorage.setItem('historial', JSON.stringify(historial));
      } else {
        alert('No hay cupos disponibles');
      }
    }
  };

  const handleAgregarFavorito = () => {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const eventoActual = {
      id: Date.now(),
      nombre: evento.nombre,
      fecha: evento.fecha,
      hora: evento.hora,
    };

    const eventoExistente = favoritos.find((e) => e.id === eventoActual.id);

    if (!eventoExistente) {
      favoritos.push(eventoActual);
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
      alert('Evento agregado a favoritos');
    } else {
      alert('El evento ya está en favoritos');
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:3001/eventos/${id}`)
      .then((response) => {
        setEvento(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener el evento:", error);
      });
  }, [id]);

  function imprimirParrafos(texto) {
    var parrafos = texto.split("\n");
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
        <Header title="" />
      </div>
      <div className="w-4/5 m-auto flex flex-col py-10">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl text-center font-[900] text-darkBlue-BG">
            {evento.nombre || "Nombre del Evento"}
          </h1>
          {imprimirParrafos(evento.descripcion || "Descripción del evento")}
          <div className="flex flex-col gap-4">
            <div className="flex flex-row">
              <h1 className="w-full text-xl font-[600] m-auto ">
                Fecha del evento:{" "}
                <span className="font-[400] text-textOrange">
                  {evento?.fecha || "Fecha no disponible"} | {evento.hora || "Hora no disponible"}
                </span>
              </h1>
              <h1 className="w-full text-xl text-center font-[600] m-auto">
                Calificación disponible al finalizar el evento
              </h1>
            </div>
            <div className="flex flex-row">
              <h1 className="w-full text-xl font-[600] m-auto">
                Cupos disponibles:{" "}
                <span className="font-[400] text-textOrange">{cuposDisponibles}</span>
              </h1>
              <h1 className="w-full text-center m-auto">
                <CalificacionEstrellas eventofinalizado={eventofinalizado} />
              </h1>
            </div>
            <div className="flex flex-row w-1/4 gap-4 pt-4">
              <div className="m-auto mr-0 uppercase rounded-md w-4/5 bg-green-700 hover:rounded-md">
                <p
                  className={`text-sm tracking-widest text-center text-white px-4 py-3 font-[400] ${
                    inscrito ? 'bg-red-500' : 'hover:bg-green-700 hover:cursor-pointer'
                  }`}
                  onClick={handleInscripcion}
                >
                  {inscrito ? 'DESINSCRIBIRSE' : 'INSCRIBIRSE'}
                </p>
              </div>
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden bg-darkBlue-BG"
                onClick={handleAgregarFavorito}
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
