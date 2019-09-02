class FooBase {
    public x: number;
    private y: number;
    protected z: number;
}
var foo = new FooBase();
foo.x; // Bien
foo.y; // Error
foo.z; // Error
class FooChild extends FooBase {
    constructor() {
        super();
        this.x; //Bien
        this.y; // Error
        this.z; // Bien
    }
}