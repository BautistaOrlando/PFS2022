import * as rls from 'readline-sync'

let suma, contador, promedio, nota : number;
suma = 0;
contador = 1;

while (contador <= 10) {
    nota = rls.questionFloat("Ingrese una nota: ");
    suma = suma + nota;
    contador = contador+1;
}
promedio = suma/10
console.log("El promedio de las notas es:" ,promedio)