const Heroe = require('../models/heroe');

const controller = {
    index:  (req, res, next) => {
        Heroe.fetchAll(req.params.heroe_id)
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
        const heroe = new Heroe(req.body.nombre, req.body.profesion, req.body.pais, req.body.resenia, "https://i.blogs.es/87930e/comidas-ricas/650_1200.jpg");
        heroe.save()
            .then( () => {
                res.status(302).redirect('/');
            })
            .catch(err => {
                console.log(err);
                res.status(302).redirect('/error');
            });
    },
}
module.exports = controller;