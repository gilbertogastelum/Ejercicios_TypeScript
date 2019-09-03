var MySpace;
(function (MySpace) {
    var MyClass = /** @class */ (function () {
        function MyClass() {
        }
        MyClass.myProperty = 1;
        return MyClass;
    }());
    MySpace.MyClass = MyClass;
})(MySpace || (MySpace = {}));
