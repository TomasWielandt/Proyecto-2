//Creación de la variable encuestas que contendrá un arreglo de preguntas y opciones de respuestas
const encuestas = [];

//Creación de variable respuestasd que contendrá un arreglo de preguntas y respuestas seleccionadas
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
  
//Método push para ingresar los resultados a la variable encuestas
  encuestas.push(encuesta);

//Condición if que muestra mensajes con los numeros de preguntas ingresadas
   if (encuestas.length < 8){
    console.log(`Debe ingresar al menos 8 preguntas, a ingresado solo ${encuestas.length}`)
} else {
    console.log(`A ingresado ${encuestas.length} preguntas`)
};
  return encuesta;
}; 

//Función que imprimprimirá las preguntas y que permitira elegir entre las 2 opciones
let crearRespuesta = () => {

//Condición if que perimite hacer la pregunta y elegir la respuesta siempre y cuando hayan
//por lo menos 8 preguntas
    if (encuestas.length >= 8){
        encuestas.forEach((encuesta, index) => {
            let opcion;

//Bucle do while que sirve para repetir la pregunta si es que el usuario ingresa una 
//respuesta no válida
            do{
                opcion = prompt(`${index + 1}. ${encuesta.pregunta}: ${encuesta.opcion1} o ${encuesta.opcion2}`).toLowerCase(); 
                if (opcion === encuesta.opcion1){
                let respuesta = {
                    pregunta: encuesta.pregunta,
                    respuesta: encuesta.opcion1
                };

//Método push para ingresar los resultados a la variable respuestas
               respuestas.push(respuesta);
                } else if (opcion === encuesta.opcion2){
                let respuesta = {
                    pregunta: encuesta.pregunta,
                    respuesta: encuesta.opcion2
                };

//Método push para ingresar los resultados a la variable respuestas                
               respuestas.push(respuesta);
                } else {alert("Respuesta no válida")}
            } while (opcion !== encuesta.opcion1 && opcion !== encuesta.opcion2);
                return opcion;
        });
    } else {console.log("Tiene que haber minimo 8 preguntas para responder la encuesta")}
};

//Función para imprimir los resultados 
function resultados() {
    let resultadosString = "Resultado de la encuesta:\n";
    respuestas.forEach((respuesta, index) => {
        resultadosString += `${index + 1}. ${respuesta.pregunta} - ${respuesta.respuesta}\n`;
    });
    alert(resultadosString);
};


