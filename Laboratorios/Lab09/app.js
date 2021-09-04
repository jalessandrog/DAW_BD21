
const arr=[];
let size = Math.floor(Math.random() * (10)) + 1;
for(let i=0; i<size; i++){
     arr[i] = Math.floor(Math.random() * (100)) + 1;
}

console.log("\nArreglo generado de manera aleatoria ["+arr+"] \n")
//Una función que reciba un arreglo de números y devuelva su promedio.
function promedio_arreglo(arreglo){
    let promedio = 0;
    let suma = 0;
    arreglo.forEach (function(numero){
        suma += numero;
    });
    promedio = suma/size;
    return promedio;
}
console.log("Promedio de los valores almacenados en un arreglo\n", promedio_arreglo(arr))


// Una función que reciba un string y escriba el string en un archivo de texto. 
function escribiendoTexto(texto){
    const file_system = require('fs');
    file_system.writeFileSync("archivo_texto.txt", texto)    
    return "\nArchivo de texto creado y con texto escrito";
}
console.log(escribiendoTexto("Hola, Mundo. Quiero jugar videojuegos"))


// Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución en js que se ejecute sobre node.
function contarImparesHasta(numero){
    let aux=0;
    for(let i = 0; i<=numero; i++){
        if(i % 2 != 0)  aux++;
    }
    return aux;
}
console.log("\nSuma total de los números impares hasta el número establecido\n", contarImparesHasta(60))


function multiplicarEntreSi(arreglo){
    let totalProducto=1;
    arreglo.forEach(function(numero){
        totalProducto *= numero;
    });
    return totalProducto;
}
console.log("\nMultiplicación entre si de los valores almacenados en un arreglo \n",multiplicarEntreSi(arr))


//Crea una pequeña aplicación web que al enviar una petición al servidor, devuelva una de las páginas que creaste anteriormente en tus laboratorios.
const fs = require('fs')
const http = require('http')
const PORT = 3000;

fs.readFile('../Lab06/index.html', function(err, data){
    if (err) throw err;
    const server = http.createServer( (req, res) =>{
        console.log(require.url)
        res.setHeader('Content-Type','html');
        res.write(data);
        res.end();
    })
    server.listen(PORT);
})
