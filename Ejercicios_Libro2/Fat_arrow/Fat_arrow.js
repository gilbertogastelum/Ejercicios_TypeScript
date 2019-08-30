var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(age) {
        var _this = this;
        this.age = age;
        this.growOld = function () {
            _this.age++;
        };
    }
    return Person;
}());
var person = new Person(1);
setTimeout(person.growOld, 1000);
setTimeout(function () { console.log(person.age); }, 2000);
//
//Funciones con herencia
var Adder = /** @class */ (function () {
    function Adder() {
        var _this = this;
        this.add = function (b) {
            return _this.a + b;
        };
    }
    return Adder;
}());
var ExtendedAdder = /** @class */ (function (_super) {
    __extends(ExtendedAdder, _super);
    function ExtendedAdder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.superAdd = _this.add;
        _this.add = function (b) {
            return _this.superAdd(b);
        };
        return _this;
    }
    return ExtendedAdder;
}(Adder));
//
//
//Cadenas de Fat arrow(Currying)
var add = function (x) { return function (y) { return x + y; }; };
add(123)(456);
var add123 = add(123);
add123(456);
