var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function log(constructor) {
    console.log('Registered Class: ' + constructor['name'] + ' at ' + Date.now());
}
function logm(target, propertyKey, descriptor) {
    console.log('Registered Method: ' + propertyKey.toString() + ' at ' + Date.now());
}
function logparam(target, propertyKey, parameterIndex) {
    console.log('Registered Parameter: ' + propertyKey.toString() + ' - ' + parameterIndex + ' at ' + Date.now());
}
//Decorador
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.name = 'name';
        console.log('constructor');
    }
    MyClass.prototype.myMethod = function () {
        console.log('method');
    };
    MyClass.prototype.myMethod2 = function (param1, param2) {
        console.log('method2');
    };
    __decorate([
        logm
    ], MyClass.prototype, "myMethod");
    __decorate([
        logm,
        __param(1, logparam)
    ], MyClass.prototype, "myMethod2");
    MyClass = __decorate([
        log
    ], MyClass);
    return MyClass;
}());
var myClass = new MyClass();
myClass.myMethod();
myClass.myMethod2(1, false);
