//Desestructuración de objetos
var obj = {x: 1, y: 2, z: 3};
console.log(obj.x); 
var {x, y, z} = obj;
console.log(x);
//
//Desestructuración de arrays
var array = [1, 2, 3];
console.log(array[0]); 
var [x, y, z] = array;
console.log(x);
//
//Desestructuración de arrays con estructuración
var array = [1, 2, 3, 4];
var [x, y, ...rest] = array;
console.log(x, y, rest);