class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
        move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    constructor(name: string) { super(name); }
        move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Rhino extends Animal {
    constructor(name: string) { super(name); }
        move(distanceInMeters = 10) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Elephant extends Animal {
    constructor(name: string) { super(name); }
        move(distanceInMeters = 20) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
let array : Animal[] = [ new Rhino('Rinocerator'), new Snake("Serpentina"), new Elepha
nt("Elefanton") ];

let ej2 = {Rhino: new Rhino('Rinocerator'), Snake: new Snake("Serpentina"), Elephant:
new Elephant("Elefanton")};
console.log(array);