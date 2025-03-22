import React, { useState } from "react";

function Texto() {
  const [texto, setTexto] = useState({
    //Textos iniciales.
    uno: "La Selección Colombia clasificará al mundial.",
    dos: "Barcelona va a ganar la Champions League.",
    tres: "El Jefe Mestro lucha contra El Covenant.",
  });
  const textos = () => {
    //Despues de dar click al boton se modifica a estos textos.
    setTexto({
      uno: "Hola, estos",
      dos: "textos se ",
      tres: "modificaron.",
    });
  };

  return (
    <div>
      <h2>{texto.uno}</h2>
      <h2>{texto.dos}</h2>
      <h2>{texto.tres}</h2>
      <button onClick={textos}>Actualizar Textos</button>
    </div>
  );
}

export default Texto;
