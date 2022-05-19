import * as rls from 'readline-sync';

let llego : string;
console.log("Esperar colectivo");
llego = rls.question("Llego el colectivo? SI o NO:").toLowerCase()

while (llego == "no") {
    console.log("Esperar colectivo");
    llego = rls.question("Llego el colectivo? SI o NO:").toLowerCase()
}
console.log("Llego el colectivo!")