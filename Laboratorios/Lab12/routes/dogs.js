const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');


router.get('/', (req, res) => {
    res.sendFile(path.resolve('views/allDogs.html'))
})

router.get('/add', (req, res) => {
    res.sendFile(path.resolve('views/Description.html'))
})

router.post('/add', (request, response) => {

    // Recibir datos del usuario
    const datos = [];
    request.on('data', (dato) =>{
        console.log(dato);
        datos.push(dato);
    });
    console.log(datos);

    // Procesar datos del usuario
    return request.on('end', () =>{
        const datos_completos = Buffer.concat(datos).toString();
        console.log("Datos"+datos);
        console.log("datos completos"+datos_completos);
        const FechaNacimiento = datos_completos.split('=')[1].split('&')[0];
        const TipoMascota = datos_completos.split('=')[2].split('&')[0];
        const Nombre = datos_completos.split('=')[3].replace('+',' ').split('&')[0];
        const Edad = datos_completos.split('=')[4].split('&')[0];
        const Sexo = datos_completos.split('=')[5].split('&')[0];
        const Raza = datos_completos.split('=')[6].replace('+',' ').split('&')[0];
        const Tamanio = datos_completos.split('=')[7].split('&')[0];
        const Color = datos_completos.split('=')[8].split('&')[0];
        console.log(FechaNacimiento)
        console.log(TipoMascota)
        console.log(Nombre)
        console.log(Edad)
        console.log(Sexo)
        console.log(Raza)
        console.log(Tamanio)
        console.log(Color)

        let descripcion = "Tipo de Mascota: " + TipoMascota +"\nFecha de Nacimiento: " +  FechaNacimiento + "\nNombre: "+ Nombre + "\nEdad: "+Edad+ "\nSexo: "+Sexo+"\nRaza: "+Raza+"\nTamanio: "+Tamanio+"\nColor: "+Color+"\n";
        fs.writeFileSync('dogDescription.txt', descripcion);

        // Redirección Hacia menú
        response.statusCode = 302;
        response.setHeader('Location', '/dogs');
        response.end();
    });
})


module.exports = router;