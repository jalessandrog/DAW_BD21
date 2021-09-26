const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');

const cats = [
    {nombre: "Michi 1", imagen: "pexels_cat1"},
    {nombre: "Michi 2", imagen: "pexels_cat2"},
    {nombre: "Michi 3", imagen: "pexels_cat3"},    
    {nombre: "Michi 4", imagen: "pexels_cat4"},    
    {nombre: "Michi 5", imagen: "pexels_cat5"},    
    {nombre: "Michi 6", imagen: "pexels_cat6"},    
    {nombre: "Michi 7", imagen: "pexels_cat7"},    
    {nombre: "Michi 8", imagen: "pexels_cat8"},    
];

const CatsDescriptions = [
    {
        TipoMascota: "Gato",
        FechaNacimiento: '2020-08-10',
        Nombre: "Momo Rogelio",
        Edad: 1,
        Sexo: "Macho",
        Raza: "Desconocida",
        Tamanio: "Pequenio",
        Color: "Gris",
    },
];

router.get('/', (req, res, next) => {
    res.render('allCats',{ 
        lista_cats: cats,
        mascota: 'Michi' 
    })
})

router.get('/add', (req, res, next) => {
    res.render('Description', {Subtitulo: 'Describiendo a mi mascota'})
})

router.get('/descriptions', (req, res, next) => {
    res.render('CatsDescriptions',{
        lista_descripciones: CatsDescriptions,
        Subtitulo: 'Mural de Descripciones de Michis'
    })
})


router.post('/add', (req, res, next) => {
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
        // fs.writeFileSync('catDescription.txt', descripcion);

        CatsDescriptions.push({
            TipoMascota: TipoMascota, FechaNacimiento: FechaNacimiento,Nombre: Nombre,
            Edad: Edad,Sexo: Sexo,Raza: Raza,Tamanio: Tamanio,Color: Color,
        });

        // Redirección Hacia menú
        res.statusCode = 302;
        res.setHeader('Location', '/cats');
        res.end();
    });
})


module.exports = router;