const Cat = require('../models/cats_model');
const catDescription = require('../models/catsDescription_model');


const controller = {
    catsList: (req, res, next) => {
        res.render('allCats',{ lista_cats: Cat.fetchAll(),mascota: 'Michi' ,
        isLoggedIn: req.session.isLoggedIn,
        email: req.session.email, 
        })
    },

    addcat: (req, res, next) => {
        res.render('Description', { Subtitulo: 'Describiendo a mi mascota',
        isLoggedIn: req.session.isLoggedIn,
        email: req.session.email, 
        })
    },

    seeDescriptions:(req, res, next) => {
        res.render('CatsDescriptions',{ lista_descripciones: catDescription.fetchAll(), Subtitulo: 'Mural de Descripciones de Michis',
        isLoggedIn: req.session.isLoggedIn,
        email: req.session.email, 
        })
    },

    saveCat:(req, res, next) => {
        const cat = new catDescription(req.body.TipoMascota,req.body.FechaNacimiento, req.body.Nombre, req.body.Edad, req.body.Sexo,req.body.Raza, req.body.Tamanio, req.body.Color);
        cat.save();
        res.status(302).redirect('/cats/descriptions');
    }
}
module.exports = controller;