class Person {
    constructor(public age:number) {}
    growOld = () => {
        this.age++;
    }
}
var person = new Person(1);
setTimeout(person.growOld,1000);
setTimeout(function() { console.log(person.age); },2000);
//
//Funciones con herencia
class Adder {
    add = (b: string): string => {
        return this.a + b;
    }
}
class ExtendedAdder extends Adder {
    private superAdd = this.add;
    add = (b: string): string => {
        return this.superAdd(b);
    }
}
//
//
//Cadenas de Fat arrow(Currying)
let add = (x: number) => (y: number) => x + y;
add(123)(456);
let add123 = add(123);
add123(456);
