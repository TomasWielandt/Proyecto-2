//Creación de la variable encuesta que contendrá un arreglo de preguntas y respuestas
const encuestas = [];

//Función que crea un objeto que contendrá una pregunta y dos opciones de respuesta
//y luego es insertada en la variable encuestas
let crearEncuesta = () => {
  let pregunta = prompt("Ingrese una pregunta: ");
  let opcion1 = prompt("Ingrese una opción de respuesta: ").toLocaleLowerCase();
  let opcion2 = prompt("Ingrese otra opción de respuesta: ").toLocaleLowerCase();
  
  let encuesta = {
    pregunta: pregunta,
    opcion1: opcion1,
    opcion2: opcion2
  }
  
  encuestas.push(encuesta);
   if (encuestas.length < 8){
    console.log(`Debe ingresar al menos 8 preguntas, a ingresado solo ${encuestas.length}`)
} else {
    console.log(`A ingresado ${encuestas.length} preguntas`)
};
  return encuesta;
} 

//Función que imprimprimirá las preguntas y que permitira elegir entre las 2 opciones
// let crearRespuesta = () => {

// }


