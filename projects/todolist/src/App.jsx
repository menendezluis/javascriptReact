import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Lista from "./Lista";

const lista = [
  "Estudiar react",
  "Aprender de hooks",
  "Aprender backend",
  "Divertirse",
];
function App() {
  const [count, setCount] = useState(0);
  const [nuevoValor, modificarNuevoValor] = useState("");
  const [miLista, modificarMiLista] = useState(lista);

  const gestionarCambiosLista = () => {
    console.log("nuevo valor", nuevoValor);

    modificarMiLista([...miLista, nuevoValor]);
    modificarNuevoValor("");
    console.log("milista", miLista);
  };

  return (
    <>
      <input
        type="text"
        onChange={(evento) => modificarNuevoValor(evento.target.value)}
        value={nuevoValor}
      />
      <button onClick={() => gestionarCambiosLista()}>Agregar</button>
      <Lista lista={miLista} />
    </>
  );
}

export default App;
