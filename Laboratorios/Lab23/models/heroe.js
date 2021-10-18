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

    static update(id, nombre, profesion, pais, resenia){
        return db.execute('UPDATE heroes SET nombre = ?, profesion = ?, pais = ?, resenia = ? WHERE id = ? ',
            [id, nombre, profesion, pais, resenia]);
    }


    static fetchAll() {
        return db.execute('SELECT * FROM heroes');
    }

    static fetchOne(id){
        return db.execute('SELECT * FROM heroes WHERE id = ?', [id]);
    }

    static buscar(query){
        return db.execute('SELECT * FROM heroes WHERE nombre LIKE ? OR pais LIKE ? OR profesion LIKE ? ', ['%'+query+'%', '%'+query+'%', '%'+query+'%']);
    }
}