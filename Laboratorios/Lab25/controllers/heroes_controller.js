const Heroe = require('../models/heroe');

const controller = {
    index:(req, res, next) => {
        Heroe.fetchAll()
        .then(([rows, fieldData]) => {
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

    search:(req, res, next) => {
        // console.log(req.body.query)
        Heroe.buscar(req.body.query)
            .then(([rows, fieldData]) => {
                res.status(200).json({rows});
            }).catch(err => {
                console.log(err);
                res.status(302).json({error: err});
            });
    },

    seeHeroe:(req, res, next) => {
        Heroe.fetchOne(req.params.heroe_id)
        .then(([rows, fieldData]) => {
            // console.log(rows);
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
        let id = Math.floor(Math.random() * ((100+1)-1)+1);
        console.log(id)
        res.setHeader('Set-Cookie', 'ultimo_heroe='+req.body.nombre+'; HttpOnly');
        if(req.file){
            if(req.file.filename){
                const heroe = new Heroe(id, req.body.nombre, req.body.profesion, req.body.pais, req.body.resenia, req.file.filename);
                heroe.save()
                    .then( () => {
                        res.status(302).redirect('/');
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(302).redirect('/error');
                    });
            }
        }else{
            res.send('Falta adjuntar imagen, intentalo de nuevo')
        }
    },

    updateHeroe:(req, res, next) => {
        Heroe.fetchOne(req.params.heroe_id)
        .then(([rows, fieldData]) => {
            // console.log(rows);
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
        console.log('actualizando heroe...')
        console.log('ID: '+req.params.heroe_id+' Correspondiente a: '+req.body.nombre)
        console.log(req.body)
        if(req.file){
            if(req.file.filename){
                Heroe.update(req.params.heroe_id, req.body.nombre, req.body.profesion, req.body.pais, req.body.resenia, req.file.filename)
                    .then( () => {
                        console.log('Actualización de heroe con exito!!')
                        res.status(302).redirect('/');
                    })
                    .catch(err => {
                        res.status(302).redirect('/error');
                    });
            }
        }else{
            Heroe.updateNoImagen(req.params.heroe_id, req.body.nombre, req.body.profesion, req.body.pais, req.body.resenia)
                    .then( () => {
                        console.log('Actualización de heroe con exito!!')
                        res.status(302).redirect('/');
                    })
                    .catch(err => {
                        res.status(302).redirect('/error');
                    });
        }
    },

    delete:(req, res, next) => {
        Heroe.deleteHeroe(req.params.heroe_id)
        .then(([rows, fieldData]) => {
            console.log('Eliminacion de heroe con exito!!')
            res.status(302).redirect('/');
        })
        .catch(err => {
            res.status(302).redirect('/error');
        });
    },

    error:(req, res, next) => {
        res.render('error',{ 
        isLoggedIn: req.session.isLoggedIn,
        email: req.session.email, 
        })
    }
}
module.exports = controller;
