import *as rls from 'readline-sync'

let n = rls.questionInt("Ingrese el tamaño que desea que tenga el arreglo (numero entero positivo): ")

while (n<0) { // Obligamos al usuario a utilizar un valor entero positivo /
    n = rls.questionInt("Ingrese un numero valido: ");
}

let positivos : number = 0;
let negativos : number = 0; 
let ceros : number = 0;
let num : number [] = new Array (n)

for (let i = 0; i < n; i++) { // Con este For ingresamos los elementos del arreglo /
    num[i] = rls.questionFloat(`Ingrese el elemento que se ubicara en la posicion ${i+1}: `)

// Con las condicionales IF/ELSE vamos indicando uno por uno si el valor introducido anteriormente es positivo, negativo o nulo (0) /
if (num [i] > 0) {
        positivos++  
    }
        else if (num [i] < 0) {
            negativos++
        }
            else {
                ceros++
            }
}

console.log(`Se ingreso un total de ${n} elementos. De estos ${positivos} son positivos, ${negativos} son negativos y ${ceros} son ceros.`)
