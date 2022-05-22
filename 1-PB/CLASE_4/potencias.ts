import *as rls from 'readline-sync'
​
function potencias(base:number, exponente:number) : number {
  
    if (exponente > 0) {
        return base**exponente;
    }
        else if (exponente == 0) {
            return 1;
        }
            while (exponente < 0) { 
                exponente = rls.questionInt ("El numero ingresado es invalido, intentelo de nuevo: ");
                return base**exponente;
            }
    return potencias (base, exponente);
}
​
console.log("Este programa te devolvera la potencia de un numero, con determinado exponente (igual o mayor a 0), que usted ingrese.");
let base : number = rls.questionInt ("Ingrese el numero base: ");
let exponente : number = rls.questionInt ("Ingrese el exponente de la base: ");
let resultado = potencias (base, exponente);
console.log ("El resultado de esta potenciacion es:" ,resultado);