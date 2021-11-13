const express = require('express');
const ejs = require('ejs');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const PORT = 3030;
const csrf = require('csurf');
const csrfProtection = csrf();

const multer = require('multer');

//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'public/images');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().getMilliseconds() + '-' + file.originalname);
    },
});

// // Rutas
const heroesRouter = require('./routes/heroes');
const usersRouter = require('./routes/users');


// ************ Template Engine ************
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma
app.use(multer({ storage: fileStorage }).single('imagen')); 

app.use(session({
    secret: 'kJSDLKJshdflMOEKJHDKJAHSKJHksWCD03DIDAPI3WDPpoijp98jpjjkiojp0LKSD0knlnl', //mi string secreto que debe ser un string aleatorio muy largo', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(csrfProtection); 
app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

app.use('/', heroesRouter);
app.use('/users', usersRouter);

app.use('/error', (request, response, next) => {
    response.status(500).send('Internal Server Error'); 
});

app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado'); //Manda error al no existir la ruta
});

//Activando el servidor desde express
app.listen(PORT, () => console.log('Servidor corriendo en el puerto ' + PORT))
