import* as rls from "readline-sync";
​
let cantidadDeDados : number;
cantidadDeDados = 0;

while (cantidadDeDados == 0 || cantidadDeDados < 0) {
    cantidadDeDados = rls.questionInt("Ingrese la cantidad de dados: ");

    if (cantidadDeDados > 0){
        let probabilidad = ((1/6)**cantidadDeDados);
        console.log("Las probabilidades de sacar en todos los dados el numero seis (6) tirando" ,cantidadDeDados, "de estos es del" , probabilidad+ "%.");​
        }
            else (cantidadDeDados == 0 || cantidadDeDados < 0); {
            console.log("El numero ingresado no es valido")
            }
} 