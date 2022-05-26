import *as rls from 'readline-sync'

// Establecemos los tres Arrays con dimesiones de 6 /
let vector1 : number[] = new Array (6);
let vector2 : number[] = new Array (6);
let sumaVectores : number [] = new Array (6)

for (let i = 0; i < 6; i++) { // Indicamos al usuario que ingrese valores para cada posicion de los vectores uno y dos /
    vector1[i] = rls.questionFloat(`Ingrese el valor del vector uno que ira en la posicion ${i+1}: `);
    vector2[i] = rls.questionFloat(`Ingrese el valor del vector dos que ira en la posicion ${i+1}: `);
    sumaVectores [i] = vector1[i] + vector2[i] // Sumamos los valores de los 2 vectores por posicion /
}
console.log(`El total de la suma de los dos elementos, en sus respectivas posiciones, almacena en el nuevo vector los siguientes valores: ${sumaVectores}`)