const db = require('../util/database');

const heroes = [
    { 
        nombre: "Ada Lovelace", 
        profesion: "Matemática e Informática", 
        pais:"Reino Unido", 
        resenia:"Augusta Ada King, Condesa de Lovelace (Londres, 10 de diciembre de 1815-íd., 27 de noviembre de 1852), registrada al nacer como Augusta Ada Byron y conocida habitualmente como Ada Lovelace, fue una matemática, informática y escritora británica, célebre sobre todo por su trabajo acerca de la calculadora de uso general de Charles Babbage, la denominada máquina analítica. Entre sus notas sobre la máquina, se encuentra lo que se reconoce hoy como el primer algoritmo destinado a ser procesado por una máquina, por lo que se la considera como la primera programadora de ordenadores.", 
        imagen: "../public/images/Ada_Lovelace_Chalon.jpg"
    },
    {
        nombre: "Charles Babbage", 
        profesion: "Matemático y Científico de la Computación", 
        pais:"Reino Unido", 
        resenia:"Charles Babbage FRS (Teignmouth, Devonshire, Gran Bretaña, 26 de diciembre de 1791-Londres, 18 de octubre de 1871) fue un matemático y científico de la computación británico.1​ Diseñó y desarrolló parcialmente una calculadora mecánica capaz de calcular tablas de funciones numéricas por el método de diferencias. También diseñó, pero nunca construyó, la analítica para ejecutar programas de tabulación o computación; por estos inventos se le considera como una de las primeras personas en concebir la idea de lo que hoy llamaríamos una computadora, por lo que se le considera como «El Padre de la Computación». En el Museo de Ciencias de Londres se exhiben partes de sus mecanismos inconclusos. Parte de su cerebro conservado en formol se exhibe en el Royal College of Surgeons of England. Sitio en Londres.", 
        imagen: "../public/images/CharlesBabbage.jpg"
    },
];

module.exports = class Heroe {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_profesion, mi_pais, mi_resenia, mi_imagen) {
        this.nombre = mi_nombre;
        this.profesion = mi_profesion;
        this.pais = mi_pais;
        this.resenia = mi_resenia;
        this.imagen = mi_imagen;
    }

    // constructor(id, mi_nombre, mi_profesion, mi_pais, mi_resenia, mi_imagen){
    //     this.id = id;
    //     this.nombre = mi_nombre;
    //     this.profesion = mi_profesion;
    //     this.pais = mi_pais;
    //     this.resenia = mi_resenia;
    //     this.imagen = mi_imagen;
    // }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO heroes (nombre, profesion, pais, resenia, imagen) VALUES (?, ?, ?, ?, ?)',
            [this.nombre, this.profesion, this.pais, this.resenia, this.imagen]);
    }

    static update( nombre, profesion, pais, resenia, id){
        return db.execute('UPDATE heroes SET  nombre = ?, profesion = ?, pais = ?, resenia = ? WHERE id = ? ',
            [nombre, profesion, pais, resenia,id]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM heroes');
    }

    static fetchOne(id){
        return db.execute('SELECT * FROM heroes WHERE id = ?', [id]);
    }



    // update() {
    //     return db.execute(' UPDATE heroes set (nombre, profesion, pais, resenia, imagen) VALUES (?, ?, ?, ?, ?)',
    //         [this.nombre, this.profesion, this.pais, this.resenia, this.imagen]);
    // }
}