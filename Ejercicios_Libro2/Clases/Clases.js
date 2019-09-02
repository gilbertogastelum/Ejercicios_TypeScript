var Startup = /** @class */ (function () {
    function Startup(texto) {
        this.text = texto;
    }
    Startup.prototype.main = function () {
        console.log(this.text);
        return 0;
    };
    return Startup;
}());
var s = new Startup("Hola mundo");
s.main();
//}
//
//Otro ejemplo
var Calculo = /** @class */ (function () {
    function Calculo(x, y) {
        this.x = 0;
        this.y = 0;
        this.setX(x);
        this.setY(y);
    }
    Calculo.prototype.setX = function (x) {
        this.x = x;
    };
    Calculo.prototype.setY = function (y) {
        this.y = y;
    };
    Calculo.prototype.getX = function () {
        return this.x;
    };
    Calculo.prototype.getY = function () {
        return this.y;
    };
    Calculo.prototype.sumar = function () {
        return (this.getX() + this.getY());
    };
    Calculo.prototype.restar = function () {
        return (this.mayor() - this.menor());
    };
    Calculo.prototype.menor = function () {
        if (this.getX() >= this.getY()) {
            return this.getY();
        }
        return this.getX();
    };
    Calculo.prototype.mayor = function () {
        if (this.getX() >= this.getY()) {
            return this.getX();
        }
        return this.getY();
    };
    return Calculo;
}());
var calculo = new Calculo(30, 10);
console.log(calculo.restar());
//
//
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
//
//
var Something = /** @class */ (function () {
    function Something() {
        Something.instances++;
    }
    Something.instances = 0;
    return Something;
}());
var s1 = new Something();
var s2 = new Something();
console.log(Something.instances);
