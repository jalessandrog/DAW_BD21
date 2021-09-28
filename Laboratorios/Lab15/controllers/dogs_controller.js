const Dog = require('../models/dogs_model');
const dogDescription = require('../models/dogs_model');

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

const controller = {
    dogsList: (req, res, next) => {
        res.render('allDogs', { lista_dogs: dogs, mascota: 'Firulais'})
    },

    addDog: (req, res, next) => {
        res.render('Description',{ Subtitulo: 'Describiendo a mi mascota'})
    },

    seeDescriptions: (req, res, next) => {
        res.render('DogsDescriptions',{ lista_descripciones: DogsDescriptions,Subtitulo: 'Mural de Descripciones de Firulais'})
    },

    saveDog: (req, res, next) => {

        const dog = new dogDescription(req.body.TipoMascota,req.body.FechaNacimiento, req.body.Nombre, req.body.Edad, req.body.Sexo,req.body.Raza, req.body.Tamanio, req.body.Color);
        dog.save();
        res.status(302).redirect('/dogs/descriptions');
    }

}
module.exports = controller;

