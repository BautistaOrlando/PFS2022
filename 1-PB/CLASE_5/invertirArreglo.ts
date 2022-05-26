import * as rls from 'readline-sync'

// Decimos al usuario que indiqe el tamaño del Array /
let n = rls.questionInt("Ingrese el tamaño que desea que tenga el arreglo (numero entero positivo): ")

while (n<0) { // Obligamos al usuario a utilizar un valor entero positivo /
    n = rls.questionInt("Ingrese un numero valido: ");
}
let arreglo : number [] = new Array (n);
let arregloInvertido : number [] = new Array (n)

for (let i = 0; i < n; i++) { // Mediante este For pedimos al usuario que ingrese los elementos que compondran "arreglo /
    arreglo[i] = rls.questionFloat(`Ingrese un numero: `);  
    arregloInvertido[n-1-i]=arreglo[i] // A su vez, almacenamos de manera inversa cada elemento en "arregloInvertido" /
}
console.log(`Los elementos ingresados por el usuario son: ${arreglo}. Esta, de manera invertida, se lee tal que asi: ${arregloInvertido}`)
