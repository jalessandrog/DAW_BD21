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
    constructor(TipoMascota, FechaNacimiento, Nombre, Edad, Sexo, Story) {
        this.TipoMascota = TipoMascota;
        this.FechaNacimiento = FechaNacimiento;
        this.Nombre = Nombre;
        this.Edad = Edad;
        this.Sexo = Sexo;
        this.Story = Story;
    }

    save() { 
        historias.push(this);
    }

    static fetchAll() {
        return historias;
    }
}

