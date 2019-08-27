var Persona = /** @class */ (function () {
    function Persona(elNombre) {
        this.nombre = elNombre;
    }
    Persona.prototype.introduceSelf = function () {
        console.log("Hola, yo soy " + this.nombre + "!");
    };
    return Persona;
}());
var personaA = new Persona("Sally");
personaA.introduceSelf();
