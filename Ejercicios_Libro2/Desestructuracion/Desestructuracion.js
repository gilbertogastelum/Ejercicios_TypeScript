//Desestructuración de objetos
var obj = { x: 1, y: 2, z: 3 };
console.log(obj.x);
var x = obj.x, y = obj.y, z = obj.z;
console.log(x);
//
//Desestructuración de arrays
var array = [1, 2, 3];
console.log(array[0]);
var x = array[0], y = array[1], z = array[2];
console.log(x);
//
//Desestructuración de arrays con estructuración
var array = [1, 2, 3, 4];
var x = array[0], y = array[1], rest = array.slice(2);
console.log(x, y, rest);
