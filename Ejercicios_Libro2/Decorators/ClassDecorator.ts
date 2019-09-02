function ClassDecoratorParams(param1: number, param2: string) {
    return function(
        target: Function 
        ) {
        console.log("ClassDecoratorParams(" + param1 + ", '" + param2 + "') called on:", target);
    }
}
@ClassDecoratorParams(1, "a")
@ClassDecoratorParams(2, "b")
class ClassDecoratorParamsExample {
}
