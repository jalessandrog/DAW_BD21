const Heroe = require('../models/heroe');
const db = require('../util/database');

const controller = {
    index:  (req, res, next) => {
        Heroe.fetchAll()
        .then(([rows, fieldData]) => {
            console.log(rows);
            res.render('index', {
                isLoggedIn: req.session.isLoggedIn,
                email: req.session.email, 
                lista_heroes: rows,
            });
        })
        .catch(err => {
            console.log(err);
            res.status(302).redirect('/error');
        });
    },

    seeHeroe:(req, res, next) => {
        Heroe.fetchOne(req.params.heroe_id)
        .then(([rows, fieldData]) => {
            console.log(rows);
            res.render('Heroe', {
                isLoggedIn: req.session.isLoggedIn,
                email: req.session.email, 
                heroe: rows[0],
            });
        })
        .catch(err => {
            console.log(err);
            res.status(302).redirect('/error');
        });
    },

    addHeroe:(req, res, next) => {
        res.render('addHeroe',{ 
        isLoggedIn: req.session.isLoggedIn,
        email: req.session.email, 
        })
    },

    saveHeroe:(req, res, next) => {
        console.log(req.body);
        console.log(req.body.nombre);
        res.setHeader('Set-Cookie', 'ultimo_heroe='+req.body.nombre+'; HttpOnly');
        const heroe = new Heroe(req.body.nombre, req.body.profesion, req.body.pais, req.body.resenia, "avatar.jpg");
        heroe.save()
            .then( () => {
                res.status(302).redirect('/');
            })
            .catch(err => {
                console.log(err);
                res.status(302).redirect('/error');
            });
    },

    updateHeroe:(req, res, next) => {
        Heroe.fetchOne(req.params.heroe_id)
        .then(([rows, fieldData]) => {
            console.log(rows);
            res.render('updateHeroe', {
                isLoggedIn: req.session.isLoggedIn,
                email: req.session.email, 
                heroe: rows[0],
            });
        })
        .catch(err => {
            res.status(302).redirect('/error');
        });
    },

    processUpdate: (req, res, next) => {
        console.log('actualizando heroe')
        Heroe.update(req.body.nombre, req.body.profesion, req.body.pais, req.body.resenia, req.params.id )
            .then( () => {
                res.status(302).redirect('/');
            })
            .catch(err => {
                res.status(302).redirect('/error');
            });
    },
}
module.exports = controller;