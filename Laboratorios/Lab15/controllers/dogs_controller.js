const Dog = require('../models/dogs_model');
const dogDescription = require('../models/dogsDescription_model');


const controller = {
    dogsList: (req, res, next) => {
        res.render('allDogs', { lista_dogs: Dog.fetchAll(), mascota: 'Firulais'})
    },

    addDog: (req, res, next) => {
        res.render('Description',{ Subtitulo: 'Describiendo a mi mascota'})
    },

    seeDescriptions: (req, res, next) => {
        res.render('DogsDescriptions',{ lista_descripciones: dogDescription.fetchAll(), Subtitulo: 'Mural de Descripciones de Firulais'})
    },

    saveDog: (req, res, next) => {
        const dog = new dogDescription(req.body.TipoMascota,req.body.FechaNacimiento, req.body.Nombre, req.body.Edad, req.body.Sexo,req.body.Raza, req.body.Tamanio, req.body.Color);
        dog.save();
        res.status(302).redirect('/dogs/descriptions');
    }
}
module.exports = controller;

