// Importamos el readline-sync para usar sus datos de entrada /
import * as rls from 'readline-sync'

let numero = rls.questionFloat ("Ingrese un numero para determinar si este es par o impar: "); // Indicamos al usuario que ingrese un numero entero cualquiera /

//  Mediante estos operadores condicionales determinamos si el numero es par, impar o cero; y lo informamos al usuario por consola/
if (numero == 0) {
    console.log("El numero ingresado no es par ni impar, es cero (0)."); 
}
    else if (numero % 2 == 0 && numero != 0) { 
        console.log("El numero ingresado es par.");
    }
        else {
            console.log("el numero ingresado es impar.");
        }