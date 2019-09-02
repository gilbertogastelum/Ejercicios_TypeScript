function PropertyDecorator(
    target: Object, 
    propertyKey: string | symbol 
    ) {
    console.log("PropertyDecorator called on: ", target, propertyKey);
}
class PropertyDecoratorExample {
    @PropertyDecorator
    name: string;
}