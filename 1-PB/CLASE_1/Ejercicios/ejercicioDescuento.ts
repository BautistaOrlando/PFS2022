// Primero importamos los datos de entrada que deseamos que el programa utilice /
import * as rls from 'readline-sync';

// Estos son, los precios del producto y el descuento que se aplica /
let precioProducto : number = 450.50;
let descuentoDelProducto : number = 10;

// Esta constante actua a modo de dar con el valor descontado /
const cien = 100;

// Este calculo (en base a una variable) resueleve el ejercicio y luego es lanzado por consola el total a pagar con el descuento aplicado/
let valorFinal = (precioProducto) - (precioProducto*descuentoDelProducto / cien);
console.log ("El monto a pagar es de..." ,valorFinal);
