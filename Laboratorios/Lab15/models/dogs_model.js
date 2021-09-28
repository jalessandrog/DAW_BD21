const dogs = [
    {nombre: "Firulais 1", imagen: "pexels1"},
    {nombre: "Firulais 2", imagen: "pexels_dog2"},
    {nombre: "Firulais 3", imagen: "pexels_dog3"},    
    {nombre: "Firulais 4", imagen: "pexels_dog4"},    
    {nombre: "Firulais 5", imagen: "pexels_dog5"},    
    {nombre: "Firulais 6", imagen: "pexels_dog6"},    
    {nombre: "Firulais 7", imagen: "pexels_dog7"},    
    {nombre: "Firulais 8", imagen: "pexels_dog8"},     
];

module.exports = class Dog {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(dog_nombre, dog_imagen) {
        this.nombre = dog_nombre;
        this.imagen = dog_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        dogs.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return dogs;
    }
}

const DogsDescriptions = [
    {
        TipoMascota: "Perro",
        FechaNacimiento: '2012-11-25',
        Nombre: "Toby Garcia",
        Edad: 9,
        Sexo: "Macho",
        Raza: "Terrier Escoces",
        Tamanio: "Pequenio",
        Color: "Negro",
    },
];

module.exports = class dogDescription {

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
        DogsDescriptions.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return DogsDescriptions;
    }
}