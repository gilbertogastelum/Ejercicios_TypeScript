interface  Lagos{
    nombre: string,
    area: number,
    longitud: number,
    profundidad: number,
    agua_dulce: boolean,
    paises: string[]
}

let PrimerLago: Lagos={
    nombre: 'Caspian Sea',
    longitud:1199,
    area: 371000,
    profundidad:1025,
    agua_dulce:false,
    paises:['Kazakhstan', 'Russia', 'Turkmenistan', 'Azerbaijan', 'Iran']
}

let SeundoLago: Lagos ={
    nombre :'Superior',
    longitud:616,
    profundidad :700,//Se omitia la propiedad Profundidad                        
    area:81200,
    agua_dulce:true,
    paises :['Canada','Estados Unidos']
}
