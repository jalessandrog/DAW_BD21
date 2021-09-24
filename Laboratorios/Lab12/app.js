const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030

const mainRouter = require('./routes/main');
const catsRouter = require('./routes/cats');
const dogsRouter = require('./routes/dogs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRouter);
app.use('/cats', catsRouter);
app.use('/dogs', dogsRouter);

app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado'); //Manda error al no existir la ruta
});

//Activando el servidor desde express
app.listen(PORT, () => console.log('Servidor corriendo en el puerto ' + PORT))

