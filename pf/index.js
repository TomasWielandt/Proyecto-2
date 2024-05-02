//Creación de la variable encuesta que contendrá un arreglo de preguntas y respuestas
const encuestas = [];
const respuestas = [];

//Función que crea un objeto que contendrá una pregunta y dos opciones de respuesta
//y luego es insertada en la variable encuestas
let crearEncuesta = () => {
  let pregunta = prompt("Ingrese una pregunta: ");
  let opcion1 = prompt("Ingrese una opción de respuesta: ").toLowerCase();
  let opcion2 = prompt("Ingrese otra opción de respuesta: ").toLowerCase();
  
  let encuesta = {
    pregunta: pregunta,
    opcion1: opcion1,
    opcion2: opcion2
  };
  
  encuestas.push(encuesta);
   if (encuestas.length < 8){
    console.log(`Debe ingresar al menos 8 preguntas, a ingresado solo ${encuestas.length}`)
} else {
    console.log(`A ingresado ${encuestas.length} preguntas`)
};
  return encuesta;
}; 

//Función que imprimprimirá las preguntas y que permitira elegir entre las 2 opciones
let crearRespuesta = () => {
    if (encuestas.length >= 8){
        encuestas.forEach((encuesta, index) => {
            let opcion = prompt(`${index + 1}. ${encuesta.pregunta}: ${encuesta.opcion1} o ${encuesta.opcion2}`).toLowerCase(); 
            if (opcion === encuesta.opcion1){
                let respuesta = {
                    pregunta: encuesta.pregunta,
                    respuesta: encuesta.opcion1
                };
               respuestas.push(respuesta);
            } else if (opcion === encuesta.opcion2){
                let respuesta = {
                    pregunta: encuesta.pregunta,
                    respuesta: encuesta.opcion2
                };
               respuestas.push(respuesta);
            } else {alert("Respuesta no valida")}
            return opcion;
        })
    } else {console.log("Tiene que haber minimo 8 preguntas para responder la encuesta")}
};

function resultados() {
    respuestas.forEach((respuesta, index) => {
        alert(`Resultado de la encuesta:\n${index + 1}. ${respuesta.pregunta} - ${respuesta.respuesta}`);
    })
    
};


