import { useState } from "react";

function Lista() {
  const [mostrarLista, setMostrarLista] = useState(false); // Estado para controlar si se muestra la lista
  const notas = ["miguel", "daniel", "santiago", "paula", "Iván"]; // Lista de nombres

  // Función que cambia el estado a true para mostrar la lista
  const mostrar = () => {
    setMostrarLista(true);
  };

  return (
    <div>
      <button onClick={mostrar}>Mostrar Lista</button>
      {mostrarLista && (
        <div>
          <h3>Lista de Nombres:</h3>
          <ul>
            {notas.map((nota, index) => (
              <li key={index}>{nota}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Lista;
