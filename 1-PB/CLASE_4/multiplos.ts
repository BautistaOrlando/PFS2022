import *as rls from 'readline-sync'

// Este metodo calcula, a traves del residuo, (si es "0") si un numero es multiplo de otro /
function esMultiplo (numero1: number, numero2: number) : boolean {
    if (numero1 % numero2 == 0) {
        return true;
    }
        else {
            return false;
        }
}

console.log ("Este programa nos permite saber si un numero es multiplo de otro."); //Como dice la consola, el programa nos premite averiguar si un numero es multiplo de otro, en este caso si un numero es multiplo del primer valor ingresado / 
let numero2 = rls.questionInt ("Ingrese un numero: ");
let numero1 = rls.questionInt ("Ingrese el numero que desea averiguar si es, o no, multiplo del anterior: ");
console.log (esMultiplo(numero1, numero2));