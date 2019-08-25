interface Shape {
    name: string;
    widht: number;
    height: number;
    color?: string;
}

function area (shape: Shape){
    var area= shape.widht * shape.height;
    return "I'm "+shape.name +" with area "+area +" cm squared";
}
console.log(area({name: "Rectangle", widht:30, height:15}));
console.log(area({name: "square",widht:30, height:30, color:"Blue"}));
