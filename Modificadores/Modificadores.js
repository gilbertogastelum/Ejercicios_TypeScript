var Persona = /** @class */ (function () {
    function Persona(elNombre) {
        this.nombre = elNombre;
    }
    Persona.prototype.introduceSelf = function () {
        console.log("Hola, yo soy " + this.nombre + "!");
    };
    return Persona;
}());
var personA = new Persona("Sally");
personA.introduceSelf(); // Imprime: Hola, soy Sally!
personA.nombre = "Mindy"; //Error
personA.introduceSelf(); // Imprime: Hola, soy Mindy!
