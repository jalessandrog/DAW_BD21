
const controller = {
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

    aboutMe: (req, res, next) => {
        res.render('AboutMe', {
            isLoggedIn: req.session.isLoggedIn,
            email: req.session.email,
        })
    },

}
module.exports = controller;

