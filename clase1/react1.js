import "./styles.css";
import { useState } from "react";

export default function App() {
  //un espacio para almacenar una variable
  //una funcion, para gestionar esa misma variable
  const comision = 0.2;

  const [mostrarTexto, setMostrarTexto] = useState("hola mundo");
  const [active, setActive] = useState(false);
  const [posicion, setPosicion] = useState(1);
  //console.log("hola aqui estamos dentro de la funcion");
  let unaVariable = "hola mundo";
  let listaDeNombres = ["Pedro", "juan", "maria"];

  const cambiarElValor = () => {
    /* unaVariable = "adios";*/
    setMostrarTexto("Valor cambiado");
    setActive(!active);
    setPosicion(posicion + 1 > listaDeNombres.length - 1 ? 0 : posicion + 1);
  };

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Hello CodeSandbox</h1>
      <h2 style={{ color: active ? "blue" : "red" }}>{mostrarTexto}</h2>
      <h2>Vamos a hacer algo aca! Nombre {listaDeNombres[posicion]}</h2>
      <button onClick={() => cambiarElValor()}>Cambiar valor </button>
    </div>
  );
}

//npx create-react-app
