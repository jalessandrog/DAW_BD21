const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');

const dogs = [
    {nombre: "Firulais 1", imagen: "pexels1"},
    {nombre: "Firulais 2", imagen: "pexels_dog2"},
    {nombre: "Firulais 3", imagen: "pexels_dog3"},    
    {nombre: "Firulais 4", imagen: "pexels_dog4"},    
    {nombre: "Firulais 5", imagen: "pexels_dog5"},    
    {nombre: "Firulais 6", imagen: "pexels_dog6"},    
    {nombre: "Firulais 7", imagen: "pexels_dog7"},    
    {nombre: "Firulais 8", imagen: "pexels_dog8"},     
];

const DogsDescriptions = [
    {
        TipoMascota: "Perro",
        FechaNacimiento: '2012-11-25',
        Nombre: "Toby Garcia",
        Edad: 9,
        Sexo: "Macho",
        Raza: "Terrier Escoces",
        Tamanio: "Pequenio",
        Color: "Negro",
    },
];



router.get('/', (req, res, next) => {
    res.render('allDogs',{ 
        lista_dogs: dogs,
        mascota: 'Firulais' 
    })
})

router.get('/add', (req, res, next) => {
    res.render('Description',{Subtitulo: 'Describiendo a mi mascota'})
})

router.get('/descriptions', (req, res, next) => {
    res.render('DogsDescriptions',{
        lista_descripciones: DogsDescriptions,
        Subtitulo: 'Mural de Descripciones de Firulais'
    })
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

        // let descripcion = "Tipo de Mascota: " + TipoMascota +"\nFecha de Nacimiento: " +  FechaNacimiento + "\nNombre: "+ Nombre + "\nEdad: "+Edad+ "\nSexo: "+Sexo+"\nRaza: "+Raza+"\nTamanio: "+Tamanio+"\nColor: "+Color+"\n";
        // response.send(descripcion)

        DogsDescriptions.push({
            TipoMascota: TipoMascota, FechaNacimiento: FechaNacimiento,Nombre: Nombre,
            Edad: Edad,Sexo: Sexo,Raza: Raza,Tamanio: Tamanio,Color: Color,
        });

        // Redirección Hacia menú
        response.statusCode = 302;
        response.setHeader('Location', '/dogs');
        response.end();
    });
})


module.exports = router;