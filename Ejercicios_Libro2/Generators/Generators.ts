function* generator(){
    console.log('Execution started');
    yield 0;
    console.log('Execution resumed');
    yield 1;
    console.log('Execution resumed');
}
var iterator = generator();
console.log('Starting iteration');
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next());
//
//
function* generator1() {
    try {
        yield 'foo';
        throw Error("Test");
    }
    catch(err) {
        console.log(err.message); // bar!
    }
}
var iterator = generator();
var foo = iterator.next();
console.log(foo.value);
var foo = iterator.next();
//
//
//
function getFirstName() {
    setTimeout(function(){
        gen.next('alex')
    }, 1000);
}
function getSecondName() {
    setTimeout(function(){
        gen.next('perry')
    }, 1000);
}
function *sayHello() {
    var a = yield getFirstName();
    var b = yield getSecondName();
    console.log(a, b); //alex perry
}
var gen = sayHello();
gen.next();