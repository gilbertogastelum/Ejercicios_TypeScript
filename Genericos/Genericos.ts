function randomIntElem(theArray: number[]):number{
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
}

let posiciones: number[] =[103,458,472,458];
let posicionRandom: number = randomIntElement (posiciones);


function randomStrElem