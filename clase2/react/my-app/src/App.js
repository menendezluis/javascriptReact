import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [saludoPersonalizado, setSaludoPersonalizado] = useState(
    "No hay texto de alerta"
  );
  function handleSaludo(dato) {
    dato.preventDefault();
    setSaludoPersonalizado(dato.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hola mundo desde react </h1>
        <Button textoBoton="Saludar" textoAlerta="Hola,que tal?" />
        <Button textoBoton="adios" textoAlerta="Hasta pronto" />

        <Button textoBoton="Buen dia" textoAlerta="Tenga buen dia" />
        <Button textoBoton="otra accion" textoAlerta="Esta  es otra accion" />
        <input
          type="text"
          placeholder="Saludo personalizado"
          onChange={(e) => handleSaludo(e)}
        ></input>
        <Button
          textoBoton="Saludo personalizado"
          textoAlert={saludoPersonalizado}
        />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
