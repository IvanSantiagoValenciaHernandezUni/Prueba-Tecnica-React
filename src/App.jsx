import { useState } from "react";
import "./App.css";
import Color from "./Color";
import Texto from "./Texto";
import Numero from "./Numero";
import Objeto from "./Objeto";
import Lista from "./Lista";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Prueba Tecnica</h1>
      <p>a)</p>
      <Color />
      <p>b)</p>
      <Texto />
      <p>c)</p>
      <Numero />
      <p>d)</p>
      <Objeto />
      <p>e)</p>
      <Lista />
    </div>
  );
}

export default App;
