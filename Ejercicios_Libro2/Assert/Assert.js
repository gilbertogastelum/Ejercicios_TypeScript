var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("Pajaro");
    };
    Bird.prototype.layEggs = function () {
        console.log("Pone huevos");
    };
    return Bird;
}());
//
//
var Fish = /** @class */ (function () {
    function Fish() {
    }
    Fish.prototype.swim = function () {
        console.log("PEZ");
    };
    Fish.prototype.layEggs = function () {
        console.log("Pone huevos");
    };
    return Fish;
}());
//
//
function getAnimal() {
    var a = new Fish();
    return a;
}
var pet = getAnimal();
console.log(getAnimal());
pet.layEggs();
// ASSERT
//
if (pet.swim) {
    pet.swim();
}
else if (pet.fly) {
    pet.fly();
}
