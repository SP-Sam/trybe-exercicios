// class Superclass {
//   constructor(public isSuper: boolean = true) { }
var MyClass = /** @class */ (function () {
    function MyClass(myNumber) {
        this.myNumber = myNumber;
    }
    MyClass.prototype.myFunc = function (myParam) {
        return "".concat(myParam + this.myNumber);
    };
    return MyClass;
}());
var myObj = new MyClass(21);
var myNumber = myObj.myNumber;
console.log(myNumber);
var myFunc = myObj.myFunc(7);
console.log(myFunc);
