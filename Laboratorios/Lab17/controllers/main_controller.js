const Mascota = require('../models/petsGallery_model');
const Historias = require('../models/historias_model');


const controller = {
    index:  (req, res, next) => {
        res.render('index',{ Titulo:"Laboratorio 17", lista_mascotas: Mascota.fetchAll(),
        isLoggedIn: req.session.isLoggedIn,
        email: req.session.email, 
        })
    },

    story: (req, res, next) => {
        res.render('Historia',{ Subtitulo: 'Contando una historia',
        isLoggedIn: req.session.isLoggedIn,
        email: req.session.email,
        })
    },

    memories: (req, res, next) => {
        res.render('HistoriasContadas',{ lista_historias: Historias.fetchAll(), Subtitulo: 'Mural de Historias Contadas',
        isLoggedIn: req.session.isLoggedIn,
        email: req.session.email, 
        })
    },

    saveStory: (req, res, next) => {
        const historia = new Historias(req.body.TipoMascota,req.body.FechaNacimiento, req.body.Nombre, req.body.Edad, req.body.Sexo, req.body.Story);
        historia.save();
        res.status(302).redirect('/memories');
    },

    aboutMe: (req, res, next) => {
        res.render('AboutMe', {
            isLoggedIn: req.session.isLoggedIn,
            email: req.session.email,
        })
    },

    login:(req, res, next) => {
        console.log("Ruta Login")
        res.render('Login', {
            isLoggedIn: req.session.isLoggedIn,
            email: req.session.email,
        });
    },
    
    processLoggin:(req, res, next) => {
        console.log("Procesando Login")
        req.session.email = req.body.email;
        console.log("Usuario logueado: "+req.body.email)
        console.log("Username: "+req.body.email.split('@')[0])
        req.session.isLoggedIn = true;
        console.log(req.session.email);
        if(req.body.rememberMe){
            res.setHeader('Set-Cookie', 'ultimoAcceso='+req.body.email+'; HttpOnly');
        }
        res.status(302).redirect('/');
    },

    logout:(req, res, next) => {
        console.log("Cerrando sesión")
        req.session.destroy(() => {
            res.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
        });
    },

}
module.exports = controller;