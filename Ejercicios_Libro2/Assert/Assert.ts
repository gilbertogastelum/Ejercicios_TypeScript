class Bird {
    fly(){
        console.log("Pajaro");
    }
    layEggs(){
        console.log("Pone huevos");
    }
}
//
//
class Fish {
    constructor(){
    }
    swim(){
        console.log("PEZ")
    }
    layEggs(){
        console.log("Pone huevos");
    }
}
//
//
function getAnimal() : Fish | Bird {
    var a : Fish = new Fish();
    return a;
}
let pet = getAnimal();
console.log(getAnimal());
pet.layEggs();
// ASSERT
//
if((<Fish>pet).swim){
    (<Fish>pet).swim();
} else if((<Bird>pet).fly) {
    (<Bird>pet).fly();
}