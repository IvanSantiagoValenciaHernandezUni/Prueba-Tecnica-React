import { useState } from "react";

function Objeto() {
  const usuario = {
    nombre: "Iván",
    edad: 19,
    correo: "ivanchoooo@gmail.com",
  };

  // Usamos un estado para guardar la información del usuario y mostrarla en pantalla
  const [datosUsuario, setDatosUsuario] = useState(null);

  const miobjeto = () => {
    // Actualizamos el estado para mostrar los datos del usuario en pantalla
    setDatosUsuario(
      <div>
        <h3>Nombre: {usuario.nombre}</h3>
        <h3>Edad: {usuario.edad}</h3>
        <h3>Correo: {usuario.correo}</h3>
      </div>
    );
  };

  return (
    <div>
      <button onClick={miobjeto}>Mostrar Datos</button>

      {datosUsuario}
    </div>
  );
}

export default Objeto;
