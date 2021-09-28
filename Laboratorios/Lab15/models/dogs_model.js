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

    constructor(dog_nombre, dog_imagen) {
        this.nombre = dog_nombre;
        this.imagen = dog_imagen;
    }

    save() {
        dogs.push(this);
    }

    static fetchAll() {
        return dogs;
    }
}