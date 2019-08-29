function randomIntElem(theArray) {
    var randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
var posiciones = [103, 458, 472, 458];
var posicionRandom = randomIntElem(posiciones);
function randomStrElem(theArray2) {
    var randomIndex = Math.floor(Math.random() * theArray2.length);
    return theArray2[randomIndex];
}
var colores = ['Azul', 'Violeta', 'Verde', 'Rojo'];
var ColorRandom = randomStrElem(colores);
function randomElem(theArray3) {
    var randomIndex = Math.floor(Math.random() * theArray3.length);
    return theArray3[randomIndex];
}
var ColorRandom2 = randomElem(colores);
var posicionRandom2 = randomElem(posiciones);
//Funcion Generica
function ElementoRandom(Array) {
    var randomIndex = Math.floor(Math.random() * Array.length);
    return Array[randomIndex];
}
var colors = ['violet', 'indigo', 'blue', 'green'];
var randomColor = ElementoRandom(colors);
console.log(randomColor);
