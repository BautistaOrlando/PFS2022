import*as rls from 'readline-sync'// Importamos los datos de entrada /

// Pedimos al usuario q ingrese el numero del cual desea saber los productos y hasta numero desea multiplicarlo (simpre y cuando la variable multiplicado = 1) /
let tablaDelNumero = rls.questionFloat("Ingrese un numero para ver sus productos: ");
let hastaQNumMultiplico = rls.questionFloat("Ingrese el numero hasta el cual desea ver estos productos: ");
let multiplicador : number;
multiplicador = 1;

for (multiplicador; multiplicador <= hastaQNumMultiplico; multiplicador++) { // Con este ciclo mostramos al usuario cada multiplicacion y su respectivo resultado /
    console.log(tablaDelNumero, "*" ,multiplicador, "=",tablaDelNumero*multiplicador);
}

