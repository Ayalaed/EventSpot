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
        <form action="" method="" className="flex flex-row flex-wrap w-full px-6">
          {/* ... Otros campos del formulario */}
          <select
            name="Carrera"
            id=""
            className="mb-4 md:mb-0 md:mr-4 pl-4 bg-shadowBox w-full md:w-1/5 py-2 rounded-md border border-b-darkBlue-BG"
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
          <input
            type="submit"
            name="buscar"
            value="Buscar"
            className="bg-darkBlue-BG px-8 py-2 rounded-md text-white w-full md:w-auto"
          />
        </form>
        {/* Mostrar eventos en el historial */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
          {historialEventos.map((evento) => (
            <div key={evento.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="h-full border border-shadow">
                <div
                  className="min-h-[200px] bg-cover bg-center"
                  style={{ backgroundImage: `url('/img/bitmap.png')` }}
                ></div>
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
                        className="hover:cursor-pointer bg-darkBlue-BG py-2 px-4 text-white text-md rounded-md hover:text-textOrange font-[400] w-full"
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
