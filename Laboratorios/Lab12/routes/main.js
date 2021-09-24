const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');


router.get('/', (req, res) => {
    res.sendFile(path.resolve('views/index.html'))
})

router.get('/storyTime', (req, res) => {
    res.sendFile(path.resolve('views/Historia.html'))
})

router.post('/storyTime', (req, res) => {
    // Recibir datos del usuario
    const datos = [];
    req.on('data', (dato) =>{
        console.log(dato);
        datos.push(dato);
    });
    console.log(datos);

    // Procesar datos del usuario
    return req.on('end', () =>{
        const datos_completos = Buffer.concat(datos).toString();
        
        console.log("Datos"+datos);
        console.log("datos completos"+datos_completos);
        const Fecha = datos_completos.split('=')[1].split('&')[0];
        const TipoMascota = datos_completos.split('=')[2].split('&')[0];
        const Nombre = datos_completos.split('=')[3].replace('+',' ').split('&')[0];
        const Edad = datos_completos.split('=')[4].split('&')[0];
        const Sexo = datos_completos.split('=')[5].split('&')[0];
        const Story = datos_completos.split('=')[6].replace(/[+]/g," ").replace(/%2C/g,",").replace(/[.]/g,".\n");
        console.log(Fecha)
        console.log(TipoMascota)
        console.log(Nombre)
        console.log(Edad)
        console.log(Story)

        let storyTime = "Tipo de Mascota: " + TipoMascota +"\nFecha de Suceso: " +  Fecha + "\nNombre: "+ Nombre + "\nEdad: "+Edad+ "\nSexo: "+Sexo+"\nHistoria:\n"+Story+"\n";
        fs.writeFileSync('StoryTime.txt', storyTime);

        // Redirección Hacia menú
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    });
})

router.get('/aboutme', (req, res) => {
    res.sendFile(path.resolve('views/AboutMe.html'))
})

module.exports = router;