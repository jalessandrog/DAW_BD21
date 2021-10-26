const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, apellido, email, password) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
    }


    save() {
        return db.execute('INSERT INTO usuarios (Nombres, Apellidos, email, password) VALUES (?, ?, ?, ?)',
            [this.nombre, this.apellido, this.email, bcrypt.hashSync(this.password, 12)]);
    }

    // static fetchOne(email, password){
    //     return db.execute('SELECT * FROM usuarios WHERE email = ? AND contrasenia = ?',
    //     [this.email, this.password]
    //     )
    // }
    static fetchOne(email){
        return db.execute('SELECT * FROM usuarios WHERE email = ? ', [email])
    }
}