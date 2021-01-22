function Persona() {
    this.nombre = "Arian";
    this.apellido = "Angoma";
    this.edad = 20;
    this.pais = "Perú";
}

Persona.prototype.imprimirInfo = function () {
    console.log(`${this.nombre} ${this.apellido} (${this.edad})`)
}

let ari = new Persona();

// Creación de un prototipo a Number (No recomendado)
Number.prototype.esPositivo = function () {
    return this > 0;
}