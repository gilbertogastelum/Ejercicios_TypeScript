class Persona{
    private nombre: string;
    constructor (elNombre:string){
        this.nombre= elNombre;
    }
    introduceSelf(){
        console.log("Hola, yo soy "+this.nombre+"!");
    }
}

let personA = new Persona ("Sally");


personA.introduceSelf();// Imprime: Hola, soy Sally!

//personA.nombre="Mindy";//Solo se puede acceder a la propiedad nombre dentro de la clase Persona 

personA.introduceSelf();// Imprime: Hola, soy Mindy!