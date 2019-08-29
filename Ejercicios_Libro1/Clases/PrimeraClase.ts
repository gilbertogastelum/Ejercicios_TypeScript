class Persona{
    nombre: string;
    constructor (elNombre:string){
        this.nombre= elNombre;
    }
    introduceSelf(){
        console.log("Hola, yo soy "+this.nombre+"!");
    }
}

let personaA = new Persona("Sally");
personaA.introduceSelf();