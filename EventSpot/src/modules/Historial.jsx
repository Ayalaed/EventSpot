// Historial.jsx
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Historial() {
  const [historialEventos, setHistorialEventos] = useState([]);
  const [carreraSeleccionada, setCarreraSeleccionada] = useState("Carrera");

  useEffect(() => {
    // Obtener el historial de eventos desde localStorage
    const historialGuardado = JSON.parse(localStorage.getItem('historial')) || [];
    
    // Filtrar eventos por carrera si se ha seleccionado una carrera
    const eventosFiltrados = carreraSeleccionada === "Carrera"
      ? historialGuardado
      : historialGuardado.filter((evento) => evento.carrera === carreraSeleccionada);

    setHistorialEventos(eventosFiltrados);
  }, [carreraSeleccionada]);

  const headerData = {
    title: "Historial",
  };

  const handleCarreraChange = (e) => {
    setCarreraSeleccionada(e.target.value);
  };

  return (
    <div className="h-screen">
      <div>
        <Header title={headerData.title} />
      </div>
      <div className="w-full font-['Epilogue'] py-10">
        <form action="" method="" className="flex flex-row w-full px-6">
          {/* ... Otros campos del formulario */}
          <select
            name="Carrera"
            id=""
            className="mr-10 pl-4 bg-shadowBox w-1/5 py-2 rounded-md border border-b-darkBlue-BG"
            onChange={handleCarreraChange}
            value={carreraSeleccionada}
          >
            <option value="Carrera" selected>
              Carrera
            </option>
            <option value="Ing. Informatica">Ing. Informatica</option>
            <option value="Ing. Civil">Ing. Civil</option>
          </select>
          {/* ... Otros campos del formulario */}
        </form>
        {/* Mostrar eventos en el historial */}
        <div className="w-full grid grid-cols-3 gap-4 py-12">
          {historialEventos.map((evento) => (
            <div key={evento.id} className="w-full h-97 border border-shadow">
              <div className="w-full min-h-9/12 h-97 px-4 py-4">
                <div className="bg-[url('./src/static/img/bitmap.png')] h-[65%] rounded-t-md"></div>
                <div className="min-h-[35%] bg-shadowBox rounded-b-md flex w-full flex-col">
                  <div className="p-4 my-auto flex flex-col gap-2">
                    <h1 className="text-xl font-semibold text-darkBlue-BG overflow-auto max-h-16">
                      {evento.nombre}
                    </h1>
                    <h2 className="text-lg text-textOrange">{evento.fecha} | 2PM</h2>
                    <Link to="/ver-mas">
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
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Historial;
