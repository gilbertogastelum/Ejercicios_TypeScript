function getName(n) {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}
//
//
var FooIdBrand;
(function (FooIdBrand) {
})(FooIdBrand || (FooIdBrand = {}));
//
var BarIdBrand;
(function (BarIdBrand) {
})(BarIdBrand || (BarIdBrand = {}));
