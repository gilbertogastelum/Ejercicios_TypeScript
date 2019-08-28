var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(elNombre, Edad) {
        this.nombre = elNombre;
        this.age = Edad;
    }
    Persona.prototype.introduceSelf = function () {
        console.log("Hola, soy " + this.nombre + "!");
    };
    return Persona;
}());
var Amigo = /** @class */ (function (_super) {
    __extends(Amigo, _super);
    function Amigo(nombre, age, yearsknow) {
        var _this = _super.call(this, nombre, age) || this;
        _this.yearsknow = yearsknow;
        return _this;
    }
    Amigo.prototype.TimeKnow = function () {
        console.log("Hemos sido amigos desde hace " + this.yearsknow + " años.");
    };
    Amigo.prototype.friendSince = function () {
        var firstAge = this.age - this.yearsknow;
        console.log("Hemos sido amigos desde que tenia " + firstAge + " años.");
    };
    return Amigo;
}(Persona));
var AmigoA = new Amigo("William", 19, 8);
AmigoA.friendSince(); //Imprime Hemos sido amigos desde que tenia 11 años
//let PersonaA = new Persona ("Amanda",22);//Error, no se puede instanciar directamente la clase Persona.
