const Cat = require('../models/cats_model');
const catDescription = require('../models/cats_model');

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

const controller = {
    catsList: (req, res, next) => {

        res.render('allCats',{lista_cats: cats,mascota: 'Michi'})
    },
    addcat: (req, res, next) => {
        res.render('Description', {Subtitulo: 'Describiendo a mi mascota'})
    },
    seeDescriptions:(req, res, next) => {
        res.render('CatsDescriptions',{
            lista_descripciones: CatsDescriptions,
            Subtitulo: 'Mural de Descripciones de Michis'
        })
    },
    saveCat:(req, res, next) => {

        const cat = new catDescription(req.body.TipoMascota,req.body.FechaNacimiento, req.body.Nombre, req.body.Edad, req.body.Sexo,req.body.Raza, req.body.Tamanio, req.body.Color);
        cat.save();
        res.status(302).redirect('/cats/descriptions');
    }

}
module.exports = controller;