const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');

const historias = [
    {
        TipoMascota: "Perro",
        FechaNacimiento: '2012-11-25',
        Nombre: "Toby Garcia",
        Edad: 9,
        Sexo: "Macho",
        Story: "Mi pequenio amigo cree que es SuperCan y por querer ladrarle al mundo entero, dio un salto del balcon.Se lastimo una patita, pero ahora el balcon tiene malla para evitar que vuelva a querer volar por creerse SuperCan",
    },
];

const mascotas = [
    {nombre: "Perros", imagen: "pexels_dog2"},
    {nombre: "Gatos", imagen: "pexels_cat2"},
];

router.get('/', (req, res, next) => {
    res.render('index',{ 
        lista_mascotas: mascotas
    })
})

router.get('/storyTime', (req, res, next) => {
    res.render('Historia',{ Subtitulo: 'Contando una historia'})
})

router.get('/memories', (req, res, next) => {
    res.render('HistoriasContadas',{
        lista_historias: historias,
        Subtitulo: 'Mural de Historias Contadas'
    })
})

router.post('/storyTime', (req, res, next) => {
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

        // let storyTime = "Tipo de Mascota: " + TipoMascota +"\nFecha de Suceso: " +  Fecha + "\nNombre: "+ Nombre + "\nEdad: "+Edad+ "\nSexo: "+Sexo+"\nHistoria:\n"+Story+"\n";
        // fs.writeFileSync('StoryTime.txt', storyTime);
        historias.push({
            TipoMascota: TipoMascota, FechaNacimiento: FechaNacimiento,Nombre: Nombre,
            Edad: Edad,Sexo: Sexo, Story:Story,
        });

        // Redirección Hacia menú
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    });
})

router.get('/aboutme', (req, res, next) => {
    res.render('AboutMe')
})

module.exports = router;