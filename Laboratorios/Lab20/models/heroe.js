const db = require('../util/database');

module.exports = class Heroe {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_profesion, mi_pais, mi_resenia, mi_imagen) {
        this.nombre = mi_nombre;
        this.profesion = mi_profesion;
        this.pais = mi_pais;
        this.resenia = mi_resenia;
        this.imagen = mi_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO heroes (nombre, profesion, pais, resenia, imagen) VALUES (?, ?, ?, ?, ?)',
            [this.nombre, this.profesion, this.pais, this.resenia, this.imagen]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll(id) {
        if (id) {
            return db.execute('SELECT * FROM heroes WHERE id = ?', [id]);
        } else {
            return db.execute('SELECT * FROM heroes');
        }
    }

    // update() {
    //     return db.execute(' UPDATE heroes set (nombre, profesion, pais, resenia, imagen) VALUES (?, ?, ?, ?, ?)',
    //         [this.nombre, this.profesion, this.pais, this.resenia, this.imagen]);
    // }
}