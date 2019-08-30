function getAnimal() {
    var a;
    return a;
}
function isFish(pet) {
    return pet.swim != undefined;
}
var pet = getAnimal();
if (isFish(pet)) {
    pet.swim();
    console.log('glup');
}
else {
    console.log('believe i can fly');
    pet.fly();
}
