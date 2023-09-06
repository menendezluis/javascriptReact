import React, { useState } from "react";

export default function Button(props) {
  let { textoBoton, textoAlerta, saludoPersonalizado } = props;
  const [clicked, setClicked] = React.useState(false);
  const [newValue, setNewValue] = React.useState(saludoPersonalizado);
  console.log("props", props);

  // textoAlerta = textoAlerta || "No hay texto de alerta";

  function generarAlerta(texto) {
    setClicked(true);
    alert(texto);
  }
  return (
    <button
      onClick={() => generarAlerta(textoAlerta || saludoPersonalizado)}
      disabled={clicked}
    >
      {textoBoton}
    </button>
  );
}
