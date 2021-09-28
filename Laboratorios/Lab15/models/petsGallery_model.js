const mascotas = [
    {nombre: "Perros", imagen: "pexels_dog2"},
    {nombre: "Gatos", imagen: "pexels_cat2"},
];

module.exports = class Mascota {

    constructor(mascota_nombre, mascota_imagen) {
        this.nombre = mascota_nombre;
        this.imagen = mascota_imagen;
    }

    save() {
        mascotas.push(this);
    }

    static fetchAll() {
        return mascotas;
    }
}