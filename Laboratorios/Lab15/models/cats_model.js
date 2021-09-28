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

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(cat_nombre, cat_imagen) {
        this.nombre = cat_nombre;
        this.imagen = cat_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        cats.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return cats;
    }
}


const CatsDescriptions = [
    {
        TipoMascota: "Gato",
        FechaNacimiento: '2020-08-10',
        Nombre: "Momo Rogelio",
        Edad: 1,
        Sexo: "Macho",
        Raza: "Desconocida",
        Tamanio: "Pequenio",
        Color: "Gris",
    },
];

module.exports = class catDescription {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(TipoMascota, FechaNacimiento, Nombre, Edad, Sexo, Raza, Tamanio, Color) {
        this.TipoMascota = TipoMascota;
        this.FechaNacimiento = FechaNacimiento;
        this.Nombre = Nombre;
        this.Edad = Edad;
        this.Sexo = Sexo;
        this.Raza = Raza;
        this.Tamanio = Tamanio;
        this.Color = Color;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        CatsDescriptions.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return CatsDescriptions;
    }
}