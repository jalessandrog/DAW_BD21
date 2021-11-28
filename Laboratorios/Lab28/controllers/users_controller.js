const Usuario = require('../models/users');
const bcrypt = require('bcryptjs');

const controller = {
    login:(req, res, next) => {
        console.log("Ruta Login")
        res.render('Login', {
            isLoggedIn: req.session.isLoggedIn,
            email: req.session.email,
        });
    },
    
    processLoggin:(req, res, next) => {
        Usuario.fetchOne(req.body.email).then(([rows, fieldData]) => {
            console.log(rows)
            bcrypt.compare(req.body.password, rows[0].password)
                .then(doMatch => {
                    if (doMatch) {
                        req.session.isLoggedIn = true;
                        req.session.email = req.body.email;
                        if(req.body.rememberMe){
                            res.setHeader('Set-Cookie', 'ultimoAcceso='+req.body.email+'; HttpOnly');
                        }
                        return req.session.save(err => {
                            res.redirect('/');
                        });
                    }
                    console.log('Credenciales invalidas')
                    res.status(302).res.redirect('/users/login');
                }).catch(err => {
                    console.log("Ocurrió un error en la comparación de los passwords");
                    res.status(302).res.redirect('/users/login');
                });
        })
        .catch(err => {
            console.log(err);
            console.log('No existe el usuario')
            res.status(302).res.redirect('/users/login');
        });

        // if(!req.session.isLoggedIn){
        //     return res.redirect('/login')
        // }else{
            
        // } //fin else !req.session.isLoggedIn
    },

    logout:(req, res, next) => {
        console.log("Cerrando sesión")
        req.session.destroy(() => {
            res.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
        });
    },

    register: (req, res, next) => {
        console.log("Crear usuario")
        res.render('Register', {
            isLoggedIn: req.session.isLoggedIn,
            email: req.session.email,
        });
    },

    processRegister: (req, res, next) => {
        console.log(req.body);
        res.setHeader('Set-Cookie', 'ultimo_usuarioRegistrado='+req.body.email+'; HttpOnly');
        const user = new Usuario(req.body.nombre, req.body.apellidos, req.body.email, req.body.password);
        user.save()
            .then( () => {
                res.status(302).redirect('/');
            })
            .catch(err => {
                console.log(err);
                res.status(302).redirect('/error');
            });
    },


    aboutMe: (req, res, next) => {
        res.render('AboutMe', {
            isLoggedIn: req.session.isLoggedIn,
            email: req.session.email,
        })
    },

}
module.exports = controller;

