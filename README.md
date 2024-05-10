![](https://github.com/UDDBootcamp/7M_FULLSTACK_M2_PROY/blob/master/images/banner.png)

# PROYECTO 2: Sistema de Votación en JavaScript

## Planteamiento
Desarrollar un programa en JavaScript que permita a los usuarios crear encuestas, votar y ver los resultados aplicando comandos en terminal. Este programa se podrá ejecutar en el navegador, para visualizarse a través de la consola, enlazado a un archivo HTML. 

## Requisitos
El programa debe cumplir con los siguientes requisitos:
- Permitir a los usuarios crear encuestas con opciones de respuesta. Deben haber al menos 8 preguntas.
- Permitir a los usuarios votar en las encuestas.
- Mostrar los resultados de las encuestas en tiempo real.
- Almacenar los datos de las encuestas y los votos en una variable.
- Implementar la solución utilizando programación orientada a objetos (POO) o programación funcional (PF).
- Subir la solución a un repositorio de GitHub.

## Tecnologías usadas
- JavaScript
- HTML

## Solución explicada paso a paso (PF)
1. Primero se crea un array vacio llamado **encuestas** que almacenará las preguntas y las opciones de respuestas ingresadas por el usuario. A continuación se creará otro array llamado **respuestas** que almacenará nuevamente las preguntas con las respuestas seleccionadas por el usuario.
```
const encuestas = [];
const respuestas = [];
```
2. La función **crearEncuesta** permite crear un objeto llamado *encuesta*, en el cual se podrá ingresar una pregunta con 2 opciones de respuestas y utilizando un método *push()* se guardará en el array *encuestas*. Luego, si se han ingresado menos de 8 preguntas, utilizando un condicional *if* se imprime un mensaje indicando que se deben ingresar al menos 8 preguntas y que ha ingresado solo cierto número de preguntas, o en caso contrario, un *else* que indica el total de preguntas ingresadas hasta el momento.
```
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
```
3. La función **crearRespuesta** imprimirá, a través de un mensaje guardado en la variable *opcion*, las preguntas una por una mostrando las 2 opciones de respuestas donde el usuario podrá elegir una de ellas. Estas se guardarán en un objeto *respuesta* que a su ves, utilizando el método *push()*, se guardarán en el array *respuestas*. Utilizando un condicional *if*, si el número de preguntas es mayor o igual a 8, se imprimen las preguntas con la opción de responder, en caso contrario si hay menos de 8 preguntas, se imprimirá un mensaje diciendo que deben haber por lo menos 8 preguntas. 
A traves de un bucle *do while*  y un condicional *if else*, si el usuario introduce una respuesta distinta a las 2 posibles opciones, se imprime un mensaje indicando que la respuesta no es válida y vuelve a hacer la misma pregunta hasta que el usuario ingrese una respuesta válida. Si se elige la opción 1 o la opción 2 como respuesta, entonces podrá continuar con la siguiente pregunta.
```
let crearRespuesta = () => {

    if (encuestas.length >= 8){
        encuestas.forEach((encuesta, index) => {
            let opcion;
            do{
                opcion = prompt(`${index + 1}. ${encuesta.pregunta}: ${encuesta.opcion1} o ${encuesta.opcion2}`).toLowerCase(); 
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
			   
                } else {alert("Respuesta no válida")}
				
            } while (opcion !== encuesta.opcion1 && opcion !== encuesta.opcion2);
                return opcion;
        });
		
    } else {console.log("Tiene que haber minimo 8 preguntas para responder la encuesta")}
};
```
4. La función **resultados** permite imprimir, a traves de una variable *resultadosString*, todas las preguntas y las respuestas elegidas por el usuario.
```
function resultados() {
    let resultadosString = "Resultado de la encuesta:\n";
    respuestas.forEach((respuesta, index) => {
        resultadosString += `${index + 1}. ${respuesta.pregunta} - ${respuesta.respuesta}\n`;
    });
    alert(resultadosString);
};
```
## Implementación
Se ejecuta el archivo index.html en el navegador y se abre la opción Inspeccionar. Luego se va a la pestaña Console donde se podra ejecutar el programa de la siguiente manera:
- crearEncuesta(): para ingresar las preguntas (se ingresan una por una), y las opciones de respuestas.
- crearRespuesta(): para leer las preguntas y opciones e ingresar una respuesta.
- resultados(): para ver todas las preguntas con sus respuestas.

## Solución explicada paso a paso (POO)
1. Se crea una clase llamada **Encuesta** con un constructor vacio el cual contendra los arreglos *this.encuestas* para guardar las preguntas y opciones de respuestas, y *this.respuestas* para guardar las preguntas con la respuesta elegida. Además contendrá las funciones *crearEncuesta* para crear las preguntas y opciones, *crearRespuesta* para guardar las preguntas y las respuestas elegidas, y *mostrarResultados* para ver todas las preguntas con sus respuestas.
```
class Encuesta {
    constructor() {
        this.encuestas = [];
        this.respuestas = [];
    }
```
2. La función **crearEncuesta** permite crear un objeto llamado *encuesta*, en el cual se podrá ingresar una pregunta con 2 opciones de respuestas y utilizando un método *push()* se guardará en el array *encuestas*. Luego, si se han ingresado menos de 8 preguntas, utilizando un condicional *if* se imprime un mensaje indicando que se deben ingresar al menos 8 preguntas y que ha ingresado solo cierto número de preguntas, o en caso contrario, un *else* que indica el total de preguntas ingresadas hasta el momento.
```
crearEncuesta() {
        let pregunta = prompt("Ingrese una pregunta: ");
        let opcion1 = prompt("Ingrese una opción de respuesta: ").toLowerCase();
        let opcion2 = prompt("Ingrese otra opción de respuesta: ").toLowerCase();
        let encuesta = {
            pregunta: pregunta,
            opcion1: opcion1,
            opcion2: opcion2
          };

        this.encuestas.push(encuesta);

        if (this.encuestas.length < 8) {
            console.log(`Debe ingresar al menos 8 preguntas, solo ha ingresado ${this.encuestas.length}`);
        } else {
            console.log(`Ha ingresado ${this.encuestas.length} preguntas`);
        }
    };
```
3. La función **crearRespuesta** imprimirá, a través de un mensaje guardado en la variable *opcion*, las preguntas una por una mostrando las 2 opciones de respuestas donde el usuario podrá elegir una de ellas. Estas se guardarán en un objeto *respuesta* que a su ves, utilizando el método *push()*, se guardarán en el array *respuestas*. Utilizando un condicional *if*, si el número de preguntas es mayor o igual a 8, se imprimen las preguntas con la opción de responder, en caso contrario si hay menos de 8 preguntas, se imprimirá un mensaje diciendo que deben haber por lo menos 8 preguntas. 
A traves de un bucle *do while*  y un condicional *if else*, si el usuario introduce una respuesta distinta a las 2 posibles opciones, se imprime un mensaje indicando que la respuesta no es válida y vuelve a hacer la misma pregunta hasta que el usuario ingrese una respuesta válida. Si se elige la opción 1 o la opción 2 como respuesta, entonces podrá continuar con la siguiente pregunta.
```
crearRespuesta() {

        if (this.encuestas.length >= 8) {
            this.encuestas.forEach((encuesta, index) => {
                let opcion;

                do {
                    opcion = prompt(`${index + 1}. ${encuesta.pregunta}: ${encuesta.opcion1} o ${encuesta.opcion2}`).toLowerCase();
                    if (opcion === encuesta.opcion1 || opcion === encuesta.opcion2) {
                        let respuesta = {
                            pregunta: encuesta.pregunta,
                            respuesta: opcion
                        };

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
```
4. La función **mostrarResultados** permite imprimir, a traves de una variable *resultadosString*, todas las preguntas y las respuestas elegidas por el usuario.
```
mostrarResultados() {
        let resultadosString = "Resultado de la encuesta:\n";
        this.respuestas.forEach((respuesta, index) => {
            resultadosString += `${index + 1}. ${respuesta.pregunta} - ${respuesta.respuesta}\n`;
        });
        alert(resultadosString);
    };
}
```
## Implementación
Se ejecuta el archivo index.html en el navegador y se abre la opción Inspeccionar. Luego se va a la pestaña Console donde se podra ejecutar el programa de la siguiente manera:
- const encuesta1 = new Encuesta(): se crea una variable (por ejemplo encuesta1) que contendrá una nueva clase Encuesta.
- encuesta1.crearEncuesta(): para ingresar las preguntas (se ingresan una por una), y las opciones de respuestas.
- encuesta1.crearRespuesta(): para leer las preguntas y opciones e ingresar una respuesta.
- encuesta1.mostrarResultados(): para ver todas las preguntas con sus respuestas.

### Contacto
Tomás Wielandt
twielandt16@gmail.com