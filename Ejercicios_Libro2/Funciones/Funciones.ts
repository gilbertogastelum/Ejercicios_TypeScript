setTimeout(function(){
    console.log(this); // Elemento Que llama a la función
}, 2000);



setTimeout(() => {
    console.log(this);// Elemento que contiene esta función
},2000);


function padLeft(value: string, padding: string | number) {
    if(typeof padding === "number"){
    return Array(padding + 1).join(" ") + value;
    }
    if(typeof padding === "string") {
    return Array(padding.length + 1).join(" ") + value;
    }
    throw new Error(`Expected String or number, got '${padding}' `);
}

console.log(padLeft("hello", "aaa")); // Ejemplo de función con texto 
console.log(padLeft("hello", 5)); // Ejemplo de función con número 
//console.log(padLeft("hello", true)); //Error ejemplo de función con texto


function validateEntity(e: Entity?) {
    
}
function processEntity(e: Entity?) {
    validateEntity(e);
    let s = e!.name; 
}


//IGUALACIÓN DE FUNCIONES

let x = (a:number)=>0;
let y = (b: number, s: string) => 0;

y = x; // OK
//x = y; // Error

let xx = () => ({name: 'Alice'});
let yy = () => ({name: 'Alice', location: 'Seattle'});
xx = yy; // OK
//y = x; // Error porque 'xx' tiene la propiedad location
