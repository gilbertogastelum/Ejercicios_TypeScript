class Persona{
    private nombre: string;
    constructor (elNombre:string){
        this.nombre= elNombre;
    }
    introduceSelf(){
        console.log("Hola, soy "+this.nombre+"!");
    }
}

class Amigo extends Persona {
    yearsknow: number;
    constructor(nombre:string, yearsknow: number){
        super(nombre);
        this.yearsknow=yearsknow;
    }
    TimeKnow(){
        console.log("Hemos sido amigos desde hace "+this.yearsknow+" años.")
    }
}

let AmigoA= new Amigo ("Jacob",6);
AmigoA.introduceSelf();//Imprime Hola, soy Jacob
AmigoA.TimeKnow();//Imprime Hemos sido amigos desde hace 6 años