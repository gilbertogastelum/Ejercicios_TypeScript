class Persona{
    nombre: string;
    constructor (elNombre:string){
        this.nombre= elNombre;
    }
    introduceSelf(){
        console.log("Hola, yo soy "+this.nombre+"!");
    }
}

let personA = new Persona ("Sally");


personA.introduceSelf();// Imprime: Hola, soy Sally!

personA.nombre="Mindy"; //Error

personA.introduceSelf();// Imprime: Hola, soy Mindy!