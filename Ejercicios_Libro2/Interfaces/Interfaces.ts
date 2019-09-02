interface a {
    b: number;
}
interface b extends a {
    c: string;
}
class test implements b {
    b: number;
    c: string;
    constructor (b: number, c: string) {
        this.b = b;
        this.c = c;
    }
}