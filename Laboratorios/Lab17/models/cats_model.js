const cats = [
    {nombre: "Michi 1", imagen: "pexels_cat1"},
    {nombre: "Michi 2", imagen: "pexels_cat2"},
    {nombre: "Michi 3", imagen: "pexels_cat3"},    
    {nombre: "Michi 4", imagen: "pexels_cat4"},    
    {nombre: "Michi 5", imagen: "pexels_cat5"},    
    {nombre: "Michi 6", imagen: "pexels_cat6"},    
    {nombre: "Michi 7", imagen: "pexels_cat7"},    
    {nombre: "Michi 8", imagen: "pexels_cat8"},    
];
module.exports = class Cat {

    constructor(cat_nombre, cat_imagen) {
        this.nombre = cat_nombre;
        this.imagen = cat_imagen;
    }

    save() {
        cats.push(this);
    }

    static fetchAll() {
        return cats;
    }
}

