import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Asistidos() {
  const [eventosAsistidos, setEventosAsistidos] = useState([]);

  useEffect(() => {
    // Obtener la lista de eventos favoritos desde localStorage
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // Filtrar eventos distintos para evitar repeticiones
    const eventosDistintos = favoritos.filter((evento, index, self) =>
      index === self.findIndex((e) => e.id === evento.id)
    );

    setEventosAsistidos(eventosDistintos);
  }, []);

  return (
    <div className="h-screen">
      <div>
        <Header title="Eventos Asistidos" />
      </div>
      <div className="w-full font-['Epilogue'] py-10">
        {/* Mostrar eventos asistidos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {eventosAsistidos.map((evento) => (
            <div key={evento.id} className="w-full h-97 border border-shadow">
              <div className="w-full min-h-9/12 h-97 px-4 py-4">
                <div className="bg-[url('./src/static/img/bitmap.png')] h-[65%] rounded-t-md"></div>
                <div className="min-h-[35%] bg-shadowBox rounded-b-md flex w-full flex-col">
                  <div className="p-4 my-auto flex flex-col gap-2">
                    <h1 className="text-xl font-semibold text-darkBlue-BG overflow-auto max-h-16">
                      {evento.nombre}
                    </h1>
                    <h2 className="text-lg text-textOrange">{evento.fecha} | 2PM</h2>
                    {/* Sin enlace "Ver más" */}
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

export default Asistidos;
