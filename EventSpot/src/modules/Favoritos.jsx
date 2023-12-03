// Favoritos.jsx
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    // Cargar la lista de favoritos desde localStorage al montar el componente
    const storedFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    setFavoritos(storedFavoritos);
  }, []);

  const handleEliminarFavorito = (id) => {
    // Eliminar el evento de favoritos por su ID
    const nuevosFavoritos = favoritos.filter((evento) => evento.id !== id);
    setFavoritos(nuevosFavoritos);
    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
  };

  return (
    <div className="h-screen font-['Epilogue']">
      <div>
        <Header title="Favoritos" />
      </div>
      <div className="w-4/5 m-auto flex flex-col py-10">
        {favoritos.length === 0 ? (
          <p className="text-center text-xl">No tienes eventos en favoritos.</p>
        ) : (
          <div>
            <h1 className="text-4xl text-center font-[900] text-darkBlue-BG mb-8">
              Tus Eventos Favoritos
            </h1>
            {favoritos.map((evento) => (
              <div key={evento.id} className="border-b border-gray-300 mb-6 pb-6">
                <h2 className="text-2xl font-[600] mb-4">{evento.nombre}</h2>
                <p className="text-lg mb-4">
                  <strong>Fecha:</strong> {evento.fecha} | {evento.hora}
                </p>
                <button
                  className="text-sm tracking-widest text-center text-white bg-red-500 rounded-md px-4 py-2 hover:bg-red-600"
                  onClick={() => handleEliminarFavorito(evento.id)}
                >
                  Eliminar de Favoritos
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Favoritos;
