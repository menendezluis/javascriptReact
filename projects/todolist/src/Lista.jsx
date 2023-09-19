import React from "react";

export default function Lista({ lista }) {
  return (
    <div>
      <ul>
        {lista.map((elemento, index) => {
          return <li key={index}>{elemento}</li>;
        })}
      </ul>
    </div>
  );
}
