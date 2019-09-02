var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function StaticMethodDecorator(target, // the function itself and not the prototype
propertyKey, // The name of the static method
descriptor) {
    console.log("StaticMethodDecorator called on: ", target, propertyKey, descriptor);
}
var StaticMethodDecoratorExample = /** @class */ (function () {
    function StaticMethodDecoratorExample() {
    }
    StaticMethodDecoratorExample.staticMethod = function () {
    };
    __decorate([
        StaticMethodDecorator
    ], StaticMethodDecoratorExample, "staticMethod");
    return StaticMethodDecoratorExample;
}());
