// Importamos el readline-sync para usar sus datos de entrada /
import * as rls from 'readline-sync'

// Mediante un mensaje de consola se indica al usuario la funcion del programa y se le pide que ingrese los valores numericos /
console.log("Escriba tres valores numericos para determinar cual es el mayor");
let valor1 = rls.questionFloat("Ingrese el valor numero uno: ");
let valor2 = rls.questionFloat("Ingrese el valor numero dos: ");
let valor3 = rls.questionFloat("Ingrese el valor numero tres: ");
let mayorDeTres : number

// Aqui, mediante los operadodes condicionales if/else, se determina cual es el mayor de los 3 valores /
if (valor1 < valor3 && valor2 < valor3) {
    mayorDeTres = valor3
}
    else if (valor1 < valor2 && valor3 < valor2) {
        mayorDeTres=valor2
    }
        else {
            mayorDeTres=valor1
        }
              
// Por ultimo se informa al usuario el valor mayor mediante una salida de consola /
console.log("El mayor de los tres valores es el" ,mayorDeTres)