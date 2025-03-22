import { useState } from "react";

function Numero() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState("");

  const verificarN = () => {
    if (numero >= 10) {
      alert("El número es mayor a 10");
      setResultado("Es mayor");
    } else {
      alert("El número es menor a 10");
      setResultado("Es menor");
    }
  };

  return (
    <div>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />
      <button onClick={verificarN}>Verificar Número</button>
      <div>{resultado}</div>
    </div>
  );
}

export default Numero;
