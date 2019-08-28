interface Gente{
    nombre:string;
}

interface Familia{
    nombre:string,
    edad:number,
    relacion:string;
}

interface Celebridad extends Gente{
    profesion:string;
}

function PrintNmae<T extends Gente>(theInput: T):void{
    console.log(`Mi nombre es ${theInput.nombre}`);
}

let serena: Celebridad ={
    nombre:'Serene Williams',
    profesion:'Tennis Player'
}

PrintNmae(serena);