function randomIntElem(theArray: number[]):number{
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
}

let posiciones: number[] =[103,458,472,458];
let posicionRandom: number = randomIntElem (posiciones);


function randomStrElem (theArray2: string []):string{
    let randomIndex= Math.floor(Math.random()*theArray2.length);
    return theArray2[randomIndex];
}

let colores : string []=['Azul','Violeta','Verde','Rojo'];
let ColorRandom:string = randomStrElem(colores);

function randomElem(theArray3: any[]):any{
    let randomIndex= Math.floor(Math.random()*theArray3.length);
    return theArray3 [randomIndex];
}

let ColorRandom2 = randomElem(colores);
let posicionRandom2 = randomElem(posiciones);


//Funcion Generica

function ElementoRandom<T>(Array: T[]):T{
    let randomIndex = Math.floor(Math.random()*Array.length);
    return Array[randomIndex];
}

let colors: string[] = ['violet', 'indigo', 'blue', 'green'];
let randomColor: string = ElementoRandom(colors);


console.log(randomColor);