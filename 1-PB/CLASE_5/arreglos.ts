import *as rls from 'readline-sync'

let num : number [] = new Array (6);
num [0] = 20;
num [1] = 14;
num [2] = 8;
num [3] = 0;
num [4] = 5;
num [5] = 19;
num [6] = 24;

let indice: number = rls.questionInt("Ingrese el numero que desea saber: ");

// let nroDeNum = indice -1 || indice = indice - 1 || indice -- / CON LO DE ABAJO NOS SALTEAMOS ESTA LINEA

console.log("El numero almacenado al que se refiere es: " +num[indice - 1])