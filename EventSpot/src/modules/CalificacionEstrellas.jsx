import React, { useState } from "react";

const CalificacionEstrellas = ({ eventofinalizado }) => {
  const [calificacion, setCalificacion] = useState(0);
  const [clicsRealizados, setClicsRealizados] = useState(0);

  const manejarClicEstrella = (indice) => {
    // Verificar si el evento ha finalizado antes de permitir calificaciones
    if (!eventofinalizado) {
      alert("No se pueden realizar más calificaciones hasta que el evento finalice.");
      return;
    }

    // Verificar si se han realizado menos de 2 clics antes de permitir calificaciones
    if (clicsRealizados < 2) {
      setCalificacion((prevCalificacion) =>
        prevCalificacion === indice ? 0 : indice
      );
      setClicsRealizados((prevClics) => prevClics + 1);
    }
  };

  return (
    <div style={{ fontSize: "24px" }}>
      {[1, 2, 3, 4, 5].map((indice) => (
        <span
          key={indice}
          role="button"
          onClick={() => manejarClicEstrella(indice)}
          style={{
            cursor: eventofinalizado ? "pointer" : "not-allowed",
            color: indice <= calificacion ? "gold" : "gray",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default CalificacionEstrellas;
