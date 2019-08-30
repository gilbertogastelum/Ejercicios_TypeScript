interface Bird {
    fly();
    layEggs(); // Los 2 pueden
}
interface Fish {
    swim();
    layEggs(); // Los 2 pueden
}
function getAnimal() : Fish | Bird {
    var a : Fish;
    return a;
}
let pet = getAnimal();
pet.layEggs(); // Esto funcionaría
pet.swim() // Esto da error