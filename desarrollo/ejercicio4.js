let numero1 = parseInt(prompt("Ingrese Numero 1"));
let numero2 = parseInt(prompt("Ingrese Numero 2")) ;
let numero3 = parseInt(prompt("Ingrese Numero 3")) ;


function numeroMayor(numero1, numero2, numero3){
    let mayor = 0;
    mayor = numero1;
    if(mayor <= numero2){
        mayor = numero2;
    } 
        if(mayor<= numero3){
            mayor = numero3;
        }
    
    return mayor;
    
}

let numMayor = numeroMayor(numero1, numero2, numero3)
console.log(`el numero mayor de ${numero1}, ${numero2}, ${numero3} es ${numMayor}`)
