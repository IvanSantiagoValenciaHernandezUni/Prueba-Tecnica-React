import { useState } from "react";

function Color() {
  function cambiarcolor() {
    document.body.classList.toggle("rojo"); //Agregar o quitar el color de fondo
  }

  return <button onClick={cambiarcolor}>Cambiar Color de Fondo</button>;
}

export default Color;
