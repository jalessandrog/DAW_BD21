console.log("Hola_mundo")
console.info("Estamos usando js en una pc")
let x=5;
console.log(x)


const file_system = require('fs');
file_system.writeFileSync("comida.txt", "Tacos de pepena!")


const arreglo = [3, 4, 2, 300, 2000, 1500, 200, 34, 12, 400, 100];

for(let item of arreglo){
    setTimeout( () => 
    { console.log(item);}, 
    item);
}


const http = require('http')
const server = http.createServer( (req, res) =>{
    console.log(req.url)
    res.setHeader('Content-Type','text/html');
    res.write("Hola mundo")
    res.end();
});

server.listen(3000);