let numeros = [23,4,6,7,99,12,19,8,43,21,65];

let suma = 0;

for (let index = 0; index < numeros.length; index++) {
    const num = parseInt(numeros[index]);
    suma += num;
    
}
console.log(`La suma de ${numeros} es: ${suma}`);

