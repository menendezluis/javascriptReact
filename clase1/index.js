/*console.log("hola pedro")

let saludo ="Hola "
let nombre ="Pedro "


let mutable = 0 //number
const nomutables = "Hola mundo" //. string

mutable=56 //string

//console.log(mutable, nomutables)
//console.log("el tipo nomutable es: ",typeof nomutables)
//console.log("el tipo mutable es: ",typeof mutable )

function saludar(){
//action void
//console.log(saludo," ", "Pedro")
console.log(saludo+nombre)
console.log(saludo.concat(nombre))

}
function sumar(a,b){
	return a+b
}
  
function aritmetica(a,b,operator){
	if(operator=="sumar")
	return a+b
  else
  return a-b
}

let valor =27//27 type
 console.log(sumar(5,3))
 console.log(sumar(1000,-500))
 console.log(aritmetica(15,25,"otro"))
*/
let numerica = 1235;
let texto = "esto es un texto";
let boolean = true; //false
let valornull = null;
let nodefinidas = undefined;

function aritmetica(a, b, operator) {
  if (operator == "sumar") return a + b;
  else return a - b;
}

let miResultadoUno = aritmetica(11, 11, "sumar");
/*
if(miResultadoUno>40){
	console.log("su resultado excede lo esperado")
}
else if(miResultadoUno>30){
	console.log("haz estado muy cerca")
}
else {
	console.log("Suma insuficiente")
}
*/

/*miResultadoUno>40  
? console.log("TERNARIO: su resultado excede lo esperado")
: 	console.log("Suma insuficiente")
*/

let conjuntoDeDatos = []; //typeof array
let nombresDePersonas = ["pedro", "juan", "carlos", "luis"]; //typeof array
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//indice
console.log(nombresDePersonas);
//control = control +1
/*for(let control=0;control<=nombresDePersonas.length-1; control++){
	console.log(nombresDePersonas[control])
}*/
let control = 0;
do {
  console.log(nombresDePersonas[control]);
  control++;
} while (control <= nombresDePersonas.length - 1);
let newArray = numeros.map((dato) => dato % 2 == 0); //recorre el arreglo, y devuelve un arreglo
console.log(newArray);
numeros.forEach((dato) =>
  console.log(dato + " es multiplo de 2:", dato % 2 == 0 ? "si" : "no")
);

let variable = 0;
let persona = {
  nombre: "Luis",
  edad: 33,
  nacionalidad: "Guatemala",
  status: true,
  idiomas: [
    {
      idioma: "Espanol",
      nivel: "Nativo",
    },
    {
      idioma: "Ingles",
      nivel: "Avanzado",
    },
    {
      idioma: "Catalan",
      nivel: "Principiante",
    },
  ],
};
console.log(persona.nombre);
persona.idiomas.forEach((idioma) => console.log(idioma));
let resultLanguage = persona.idiomas.findIndex(
  (idioma) => idioma.idioma === "Frances"
); //-1

console.log(resultLanguage === -1 ? "no existe" : "si existe");
