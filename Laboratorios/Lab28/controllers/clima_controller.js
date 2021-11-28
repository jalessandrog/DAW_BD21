
const controller = {
    index: (req, res, next) => {
        res.render('Clima',{ 
            isLoggedIn: req.session.isLoggedIn,
            email: req.session.email, 
            })
    },

    error:(req, res, next) => {
        res.render('error',{ 
        isLoggedIn: req.session.isLoggedIn,
        email: req.session.email, 
        })
    }

}
module.exports = controller;

