const fs = require('fs')

const usuarios = [
    {email: "a01701434@itesm.mx", contrasenia: "hola"}
];


const reqHandler = (req, res) => {
    console.log(req.url);

    if(req.url === "/") {
        // Pagina inicio HTML con bulma
        fs.readFile('./index.html', function(err, data){
            if (err) throw err;
            res.setHeader('Content-Type','html');
            res.write(data);
            res.end();
        })
    } else if (req.url === "/Lab07") {
        fs.readFile('../Lab07/index.html', function(err, data){
            if (err) throw err;
            res.setHeader('Content-Type','html');
            res.write(data);
            res.end();
        })
    } else if (req.url === "/Form" && req.method === "GET") {
        // Form
        fs.readFile('./forms.html', function(err, data){
            if (err) throw err;
            res.setHeader('Content-Type','html');
            res.write(data);
            res.end();
        })

    } else if (req.url === "/Form" && req.method === "POST") {
        //Recibir datos del cliente
        const datos = [];

        //Recibir datos del cliente
        req.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        //Procesar los datos del cliente
        return req.on('end', () => {
            
            const datos_completos = Buffer.concat(datos).toString();
            const email = datos_completos.split('=')[1].split('&')[0];
            const contrasenia = datos_completos.split('=')[2].split('&')[0];

            fs.writeFileSync("archivo_texto.txt", "Usuario ingresado: \nCorreo electronico: " +email+ "\nContraseña: "+contrasenia);

            //Redireccionar hacia /menu
            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
        });

    } else if (req.url === "") {
       
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.write('<head><meta charset="UTF-8"></head>');
        res.write('<h1>Esta página no existe...</h1>');
        res.end();
    }
}

module.exports = reqHandler;
