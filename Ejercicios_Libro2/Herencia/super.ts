//Super sin fat arrow
class Base {
    log() { console.log('hello world'); }
}
class Child extends Base {
    log() { super.log() };
}
//
//THIS con fat arrow
class Base1 {
    log = () => { console.log('hello world'); }
}
class Child1 extends Base {
    logWorld() { this.log() };
}