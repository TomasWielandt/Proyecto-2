// Clase Encuesta que contendrá 2 variables para guardar los resultados
// y 3 funciones para crear una encuesta, las respuestas y mostrar los resultados
class Encuesta {
    constructor() {
//Creación de la variable encuestas que contendrá un arreglo de preguntas y opciones de respuestas
        this.encuestas = [];
//Creación de variable respuestasd que contendrá un arreglo de preguntas y respuestas seleccionadas
        this.respuestas = [];
    }
//Función que crea un objeto que contendrá una pregunta y dos opciones de respuesta
//y luego es insertada en la variable encuestas
    crearEncuesta() {
        let pregunta = prompt("Ingrese una pregunta: ");
        let opcion1 = prompt("Ingrese una opción de respuesta: ").toLowerCase();
        let opcion2 = prompt("Ingrese otra opción de respuesta: ").toLowerCase();
        let encuesta = {
            pregunta: pregunta,
            opcion1: opcion1,
            opcion2: opcion2
          };
//Método push para ingresar los resultados a la variable encuestas
        this.encuestas.push(encuesta);
//Condición if que muestra mensajes con los numeros de preguntas ingresadas
        if (this.encuestas.length < 8) {
            console.log(`Debe ingresar al menos 8 preguntas, solo ha ingresado ${this.encuestas.length}`);
        } else {
            console.log(`Ha ingresado ${this.encuestas.length} preguntas`);
        }
    };
//Función que imprimprimirá las preguntas y que permitira elegir entre las 2 opciones
    crearRespuesta() {
//Condición if que permite hacer la pregunta y elegir la respuesta siempre y cuando hayan
//por lo menos 8 preguntas
        if (this.encuestas.length >= 8) {
            this.encuestas.forEach((encuesta, index) => {
                let opcion;
//Bucle do while que sirve para repetir la pregunta si es que el usuario ingresa una 
//respuesta no válida
                do {
                    opcion = prompt(`${index + 1}. ${encuesta.pregunta}: ${encuesta.opcion1} o ${encuesta.opcion2}`).toLowerCase();
                    if (opcion === encuesta.opcion1 || opcion === encuesta.opcion2) {
                        let respuesta = {
                            pregunta: encuesta.pregunta,
                            respuesta: opcion
                        };
//Método push para ingresar los resultados a la variable respuestas
                        this.respuestas.push(respuesta);
                    } else {
                        alert("Respuesta no válida");
                    }
                } while (opcion !== encuesta.opcion1 && opcion !== encuesta.opcion2);
            });
        } else {
            console.log("Tiene que haber mínimo 8 preguntas para responder la encuesta");
        }
    };
//Función para imprimir los resultados
    mostrarResultados() {
        let resultadosString = "Resultado de la encuesta:\n";
        this.respuestas.forEach((respuesta, index) => {
            resultadosString += `${index + 1}. ${respuesta.pregunta} - ${respuesta.respuesta}\n`;
        });
        alert(resultadosString);
    };
}