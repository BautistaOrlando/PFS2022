import * as rls from 'readline-sync';

let precioDelProducto = rls.questionFloat("Ingrese el valor total de su producto:" )
let cantidadDelProducto = rls.questionFloat("Ingrese la cantidad de productos:" )
let resultado : number
if (precioDelProducto*cantidadDelProducto > 1000) {
    resultado = precioDelProducto*cantidadDelProducto * 0.9
    console.log("El monto a pagar es de:" ,resultado+"$. Obtuviste un descuento del 10 porciento por gastar mas de 1000 pesos ($) en tu compra.")
} else {
    (resultado = precioDelProducto*cantidadDelProducto)
    console.log("El monto a pagar es de:" ,resultado+"$")
}
