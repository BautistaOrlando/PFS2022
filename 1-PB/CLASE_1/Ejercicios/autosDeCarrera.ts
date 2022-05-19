// Primero importamos los datos de entrada que deseamos que el programa utilice /
import * as rls from 'readline-sync';

// Aqui se solicita al piloto ingresar sus tiempos /
let vuelta_1 = rls.questionFloat("Ingrese el tiempo que duro la vuelta numero 1 (segundos)");
let vuelta_2 = rls.questionFloat("Ingrese el tiempo que duro la vuelta numero 2 (segundos)");
let vuelta_3 = rls.questionFloat("Ingrese el tiempo que duro la vuelta numero 3 (segundos)");
let vuelta_4 = rls.questionFloat("Ingrese el tiempo que duro la vuelta numero 4 (segundos)");

// Este ejercicio permite resolver cuanto tiempo estuvo dando vueltas y cuanto tarda en promedio en dar una de estas /
let tiempoTotal = (vuelta_1 + vuelta_2 +vuelta_3 + vuelta_4);
let tiempoPromedio = ((vuelta_1 + vuelta_2 +vuelta_3 + vuelta_4)/4);

// Por ultimo se indica por consola los resultados del calculo anterior para que el piloto conozca sus tiempos /
console.log("El tiempo total que se tardo en dar cuatro vueltas es de" ,tiempoTotal, ", mientras que el tiempo promedio fue de" ,tiempoPromedio);