var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ClassDecoratorParams(param1, param2) {
    return function (target) {
        console.log("ClassDecoratorParams(" + param1 + ", '" + param2 + "') called on:", target);
    };
}
var ClassDecoratorParamsExample = /** @class */ (function () {
    function ClassDecoratorParamsExample() {
    }
    ClassDecoratorParamsExample = __decorate([
        ClassDecoratorParams(1, "a"),
        ClassDecoratorParams(2, "b")
    ], ClassDecoratorParamsExample);
    return ClassDecoratorParamsExample;
}());
ClassDecoratorParams(2, 'b');
called;
on: function ClassDecoratorParamsExample() {
}
ClassDecoratorParams(1, 'a');
called;
on: function ClassDecoratorParamsExample() {
}
