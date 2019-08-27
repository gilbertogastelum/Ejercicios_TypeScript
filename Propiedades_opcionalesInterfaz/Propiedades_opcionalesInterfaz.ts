interface Lagos {
    nombre: string,
    area: number,
    longitud: number,
    profundidad: number,
    agua_dulce: boolean,
    paises: string[],
    congelado?: string[]
}

let segundoLago: Lagos ={
    nombre: 'Superior',
    profundidad: 406.3,
    longitud: 616,
    area: 81200,
    agua_dulce: true,
    paises:['Canada','Estados Unidos']
}

let CuartoLago: Lagos={
    nombre: 'Baikal',
    profundidad: 1637,
    longitud: 636,
    area: 31500,
    agua_dulce : true,
    paises: ['Rusia'],
    congelado: ['Enero','Febrero','Marzo','Abril','Mayo']
}