import *as rls from 'readline-sync' // Importamos los datos de entrada /

let numero, cantDeNum, sumaDeNum, max,min, promedio : number;
max = 0;
min = 0;
cantDeNum = 0;
sumaDeNum = 0;
console.log("El siguiente programa lee numeros enteros hasta detectar un cero, en dicho momento pasa a determinar y mostrar el maximo, minimo y media de los numero ingresados."); // Explicamos de que va el programa /

// El ciclo pide numeros al usuario hasta que este ingresa un cero, y a partir de ahi indica por consola el maximo, minimo y el promedio de todos los numeros ingresados /
while (numero != 0){
    numero = rls.questionInt("Ingrese un numero:");
    cantDeNum= cantDeNum+1;
    sumaDeNum = sumaDeNum + numero;
        if (numero > max && numero != 0) {
            max = numero;
        }
            else if (numero < min && numero != 0){
                min = numero;
            }
promedio = sumaDeNum/cantDeNum;

        if (numero == 0) {
            console.log("Se ha detectado un cero. El numero maximo ingresado es" ,max+ ". Mientras que el minimo es",min+ ". Por otro lado el promedio es " +promedio); 
        }

}