/*console.log("hola mundo")
console.log(" saludar")
let contador  = 1

function printText() {
console.log("esperamos 5 segundos")
}

setTimeout(printText,"5000");

for(let x=0; x<=10; x++){
	console.log("el numero es: ", x)
}
console.log("adios")

*/

let edades = [18, 19, 20, 25, 22, 34, 27, 36, 39, 28, 40, 12, 40, 0, 4, 77];

function esNumeroPar(valor) {
  return valor % 2 === 0 ? true : false;
}

function esPar(valor) {
  if (valor % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log("25: ", esNumeroPar(25));
console.log("12: ", esNumeroPar(12));

console.log("esPar 25:", esPar(25));
console.log("esPar 12:", esPar(12));
//setInterval(displayHello, 1000);

let nuevoArreglo = edades.map(esNumeroPar);
console.log(edades);
//console.log(nuevoArreglo)

function nuestroMap(arreglo, callback) {
  let arregloRespuesta = [];
  for (let x = 0; x <= arreglo.length - 1; x++) {
    arregloRespuesta.push(callback(arreglo[x]));
  }
  return arregloRespuesta;
}

let esParLaEdad = nuestroMap(edades, esNumeroPar);
let nuevaEdad = nuestroMap(edades, (x) => x * 2);

console.log(nuevaEdad);

Array.prototype.miMap = function (callback) {
  let arregloRespuesta = [];
  for (let x = 0; x <= this.length; x++) {
    arregloRespuesta.push(callback(this[x]));
  }
  return arregloRespuesta;
};
let usandoMap = edades.map((x) => x * 2);

let usandoMiPrototype = edades.miMap((x) => x * 2);
console.log("usando map", usandoMiPrototype);
console.log("usando miprototype", usandoMiPrototype);
