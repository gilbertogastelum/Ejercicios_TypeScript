interface enemigo{
    readonly tamano: number,
    vida: number,
    rango: number,
    readonly dano: number
}

let tanque: enemigo={
    tamano:50,
    vida:100,
    rango:60,
    dano:12
}


tanque.vida=95;
//tanque.damage=10; Error, el atributo daño es de solo lectura 


interface Ataque{
    (nombre: enemigo, danoRealizado: number):number;
}

let TankHit: Ataque = function (tankName: enemigo, danoRealizado:number){
    tankName.vida-=danoRealizado;
    return tankName.vida;
}