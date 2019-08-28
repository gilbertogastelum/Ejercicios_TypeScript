class Persona{
    private nombre: string;
    protected age: number;
    protected constructor (elNombre:string, Edad: number){
        this.nombre= elNombre;
        this.age= Edad;
    }
    introduceSelf(){
        console.log("Hola, soy "+this.nombre+"!");
    }
}

class Amigo extends Persona {
    yearsknow: number;
    constructor(nombre:string, age:number, yearsknow: number){
        super(nombre,age);
        this.yearsknow=yearsknow;
    }
    TimeKnow(){
        console.log("Hemos sido amigos desde hace "+this.yearsknow+" años.")
    }
    friendSince(){
        let firstAge =this.age - this.yearsknow;
        console.log ("Hemos sido amigos desde que tenia "+firstAge+" años.")
    }
}

let AmigoA= new Amigo ("William",19,8);
AmigoA.friendSince();//Imprime Hemos sido amigos desde que tenia 11 años
//let PersonaA = new Persona ("Amanda",22);//Error, no se puede instanciar directamente la clase Persona.