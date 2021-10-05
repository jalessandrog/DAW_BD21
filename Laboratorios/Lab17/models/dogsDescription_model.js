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

    save() {
        DogsDescriptions.push(this);
    }

    static fetchAll() {
        return DogsDescriptions;
    }
}