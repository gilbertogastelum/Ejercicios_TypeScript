function echo(arg) {
    return arg;
}
var a = echo(1);
var b = echo("Hola mundo");
var Generic = /** @class */ (function () {
    function Generic() {
    }
    return Generic;
}());
var myGeneric = new Generic();
console.log(myGeneric.add = function (x, y) { return x + y; });
console.log(myGeneric.add(3, 4));
function echo(arg) {
    console.log(arg.length);
    return arg;
}
var aa = echo("aaa"); //Funciona
var t = echo({ length: 2, name: "aa" }); //Funciona
var bb = echo(1); //NO Funciona
//
//
//
function copyFields(source, target) {
    for (var id in source) {
        if (target[id] != undefined) {
            source[id] = target[id];
        }
        else {
            target[id] = source[id];
        }
    }
    return target;
}
var aaa = { a: 1, b: 2, c: 3 };
var bbb = copyFields(aaa, { b: 10, c: 20 }); // Funciona
var c = copyFields(aaa, { Q: 20 }); //NO Funciona
console.log(bbb);
console.log(c);
