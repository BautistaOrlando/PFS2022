import * as rls from 'readline-sync'

let num : number [] = new Array (5);
for (let i=0; i < num.length; i++){
    num[i] = rls.questionInt("Ingrese un numero que desee almacenar en la posicion: ")
}

for (let i=0; i < num.length; i++) {
    console.log (`En la posicion ${i+1} se encuentra el valor: ${num[i]}`)
}