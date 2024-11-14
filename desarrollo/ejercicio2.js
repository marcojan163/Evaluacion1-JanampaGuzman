let nota = parseInt(prompt("ingrese nota"));
console.log(typeof(nota))
if (nota >20 || nota < 0 ) {
    console.log("No es una nota valida")
} else {
    if(nota>10){
        console.log(`Tu nota es ${nota} Aprobaste`);
    } else {
        console.log(`Tu nota es ${nota} Jalaste`);
    }
}
