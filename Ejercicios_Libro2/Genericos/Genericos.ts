function echo<T>(arg: T){
    return arg;
}

let a = echo<number>(1); 
let b = echo<String>("Hola mundo"); 


class Generic<T> {
    add: (X: T, y:T) => T;
}
let myGeneric = new Generic<number>();
console.log(myGeneric.add = function (x,y) {return x + y});
console.log(myGeneric.add(3,4));
//
//
interface withLength {
    length: number;
}
function echo<T extends withLength>(arg: T): T {
    console.log(arg.length);
    return arg;
}

let aa = echo("aaa");//Funciona
let t = echo({length: 2, name: "aa"});//Funciona

let bb = echo(1);//NO Funciona
//
//
//
function copyFields<T extends U, U>(source: T, target: U) : U {
    for(let id in source){
        if(target[id] != undefined){
            source[id] = target[id];
        }else {
            target[id] = source[id];
        }
    }
    return target;
}
let aaa = {a: 1, b: 2, c: 3};
let bbb = copyFields (aaa, {b: 10, c:20}); // Funciona
let c = copyFields (aaa, {Q: 20}); //NO Funciona
console.log(bbb); 
console.log(c); 
