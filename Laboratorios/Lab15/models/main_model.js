const historias = [
    {
        TipoMascota: "Perro",
        FechaNacimiento: '2012-11-25',
        Nombre: "Toby Garcia",
        Edad: 9,
        Sexo: "Macho",
        Story: "Mi pequenio amigo cree que es SuperCan y por querer ladrarle al mundo entero, dio un salto del balcon.Se lastimo una patita, pero ahora el balcon tiene malla para evitar que vuelva a querer volar por creerse SuperCan",
    },
];

module.exports = class Historia {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(TipoMascota, FechaNacimiento, Nombre, Edad, Sexo, Story) {
        this.TipoMascota = TipoMascota;
        this.FechaNacimiento = FechaNacimiento;
        this.Nombre = Nombre;
        this.Edad = Edad;
        this.Sexo = Sexo;
        this.Story = Story;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        historias.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return historias;
    }
}

const mascotas = [
    {nombre: "Perros", imagen: "pexels_dog2"},
    {nombre: "Gatos", imagen: "pexels_cat2"},
];

module.exports = class Mascota {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mascota_nombre, mascota_imagen) {
        this.nombre = mascota_nombre;
        this.imagen = mascota_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        mascotas.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return mascotas;
    }
}