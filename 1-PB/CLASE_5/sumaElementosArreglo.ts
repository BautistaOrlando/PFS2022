import *as rls from 'readline-sync'

// Explicamos de que va el programa /
console.log("Este programa mostrara la suma de todos los valores que compongan el arreglo. El mismo tendra tamaño y elementos asignados por el usuario.")
let n = rls.questionInt("Ingrese el tamaño que desea que tenga el arreglo (numero entero positivo): ")

while (n<0) { // Obligamos al usuario a utilizar un valor entero positivo /
    n = rls.questionInt("Ingrese un numero valido: ");
}
let sumaElementos: number = 0;
let num : number [] = new Array (n);
for (let i = 0; i < n; i++) {
    num[i] = rls.questionFloat(`Ingrese el elemento que se ubicara en la posicion ${i+1}: `);
    sumaElementos= sumaElementos + num[i];
}
console.log(`La suma de todos los elementos da un total de: ${sumaElementos}`); // Mostramos por consola la suma de todos los elementos /