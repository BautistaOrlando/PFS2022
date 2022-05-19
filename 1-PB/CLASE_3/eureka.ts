import * as rls from "readline-sync" // Importamos los datos de entrada /

let clave : string;
let contador, intento : number;
contador = 0;
intento = 1;
console.log("Ingrese la clave, tiene TRES intentos.") // Se indica al usuario por consola la cantidad max. de intentos /

while (contador < 3){
    console.log("Intento numero: " +intento); // Esta salida muestra al usuario sus intentos y, el ciclo, indica que si la clave es correcta el progama se cerrara mientras que, si la clave es incorrecta volvera a solicitar una clave (2 veces mas) /
    let clave = rls.question("Ingrese la clave porfavor:");

    if (clave == "eureka") {

    break;
} 
        else (clave != "eureka"); {
            intento = intento + 1
            contador = contador + 1
        }
            if (contador == 3){
                console.log("No quedan intentos disponibles.");
            }
}
