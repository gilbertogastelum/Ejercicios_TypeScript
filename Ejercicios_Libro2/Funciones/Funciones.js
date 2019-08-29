var _this = this;
setTimeout(function () {
    console.log(this); // Elemento Que llama a la función
}, 2000);
setTimeout(function () {
    console.log(_this); // Elemento que contiene esta función
}, 2000);
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return Array(padding.length + 1).join(" ") + value;
    }
    throw new Error("Expected String or number, got '" + padding + "' ");
}
console.log(padLeft("hello", "aaa")); // Ejemplo de función con texto 
console.log(padLeft("hello", 5)); // Ejemplo de función con número 
//console.log(padLeft("hello", true)); //Error ejemplo de función con texto
function validateEntity(e) {
}
function processEntity(e) {
    validateEntity(e);
    var s = e.name;
}
//IGUALACIÓN DE FUNCIONES
var x = function (a) { return 0; };
var y = function (b, s) { return 0; };
y = x; // OK
//x = y; // Error
var xx = function () { return ({ name: 'Alice' }); };
var yy = function () { return ({ name: 'Alice', location: 'Seattle' }); };
xx = yy; // OK
//y = x; // Error porque 'xx' tiene la propiedad location
