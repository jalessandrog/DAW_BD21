
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
        CatsDescriptions.push(this);
    }

    static fetchAll() {
        return CatsDescriptions;
    }
}