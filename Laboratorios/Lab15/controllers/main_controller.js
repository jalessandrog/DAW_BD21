const Mascota = require('../models/petsGallery_model');
const Historias = require('../models/historias_model');


const controller = {
    index:  (req, res, next) => {
        res.render('index',{ Titulo:"Laboratorio 15", lista_mascotas: Mascota.fetchAll() })
    },

    story: (req, res, next) => {
        res.render('Historia',{ Subtitulo: 'Contando una historia'})
    },

    memories: (req, res, next) => {
        res.render('HistoriasContadas',{ lista_historias: Historias.fetchAll(), Subtitulo: 'Mural de Historias Contadas' })
    },

    saveStory: (req, res, next) => {
        const historia = new Historias(req.body.TipoMascota,req.body.FechaNacimiento, req.body.Nombre, req.body.Edad, req.body.Sexo, req.body.Story);
        historia.save();
        res.status(302).redirect('/memories');
    },

    aboutMe: (req, res, next) => {
        res.render('AboutMe')
    },

}
module.exports = controller;