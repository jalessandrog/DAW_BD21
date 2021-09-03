// Escribe, prueba y ejecuta con node, scripts de js para los siguientes ejercicios y problemas. 
// Muestra los resultados en consola:


//Una función que reciba un arreglo de números y devuelva su promedio.

let size = Math.floor(Math.random() * (10)) + 1;
const arr=[];
for(let i=0; i<size; i++){
    arr[i] = Math.floor(Math.random() * (100)) + 1;
}

let suma = 0;
arr.forEach (function(numero){
    suma += numero;
});
let promedio = suma/size;

console.log(size)
console.log(arr)
console.log(suma)
console.log(promedio)


// Una función que reciba un string y escriba el string en un archivo de texto. 
const file_system = require('fs');
file_system.writeFileSync("archivo_texto.txt", "Hola, este es un string en un archivo de texto")

// Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución en js que se ejecute sobre node.
