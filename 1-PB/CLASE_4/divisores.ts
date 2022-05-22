import *as rls from 'readline-sync'
​
function esDivisor(numero: number, divisor: number) : boolean {
        if (numero % divisor == 0) {
            return true;
        }
            else {
                return false;
            }
}
​
function cantidadDeDivisores (numero : number) {
    contador = 0;
    for (divisor = 0; divisor <= numero; divisor++)
        if (esDivisor (numero, divisor)){
            contador ++;
        }
    return contador;
}
​
let contador, divisor : number;
let numero = rls.questionInt ("Ingrese un numero para saber sus divisores (cant.): ");
console.log (cantidadDeDivisores(numero));