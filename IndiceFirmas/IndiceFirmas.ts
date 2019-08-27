interface Lagos {
    nombre: string,
    area: number,
    longitud: number,
    profundidad: number,
    agua_dulce: boolean,
    paises: string[],
    congelado?: string[]
    [extraProp: string]:any
}



let CuartoLago: Lagos={
    nombre: 'Tanganyika',
    profundidad: 1470,
    longitud: 676,
    area: 32600,
    agua_dulce : true,
    paises: ['Burundi', 'Tanzania', 'Zambia', 'Congo'],
    kigoma:'Tanzania',
    kalemie: 'Congo',
    bujumbura: 'Burundi'
}