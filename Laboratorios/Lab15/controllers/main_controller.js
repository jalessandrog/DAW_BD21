const Mascota = require('../models/dogs_model');
const Historias = require('../models/main_model');

const mascotas = [
    {nombre: "Perros", imagen: "pexels_dog2"},
    {nombre: "Gatos", imagen: "pexels_cat2"},
];

const controller = {
    index:  (req, res, next) => {
        res.render('index',
        {lista_mascotas: mascotas})
    },

    story: (req, res, next) => {
        res.render('Historia',{ Subtitulo: 'Contando una historia'})
    },

    memories: (req, res, next) => {
        res.render('HistoriasContadas',{
            lista_historias: Historias,
            Subtitulo: 'Mural de Historias Contadas'
        })
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