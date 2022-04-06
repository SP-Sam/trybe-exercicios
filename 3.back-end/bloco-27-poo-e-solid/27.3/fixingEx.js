var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Character = /** @class */ (function () {
    function Character() {
    }
    return Character;
}());
var MeleeCharacter = /** @class */ (function (_super) {
    __extends(MeleeCharacter, _super);
    function MeleeCharacter(name, specialMovieName) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.specialMovieName = specialMovieName;
        return _this;
    }
    MeleeCharacter.prototype.talk = function () {
        console.log("Hi, I am ".concat(this.name, " and I am a Melee character"));
    };
    MeleeCharacter.prototype.specialMovie = function () {
        console.log("".concat(this.name, " special movie: ").concat(this.specialMovieName));
    };
    return MeleeCharacter;
}(Character));
var LongRangeCharacter = /** @class */ (function (_super) {
    __extends(LongRangeCharacter, _super);
    function LongRangeCharacter(name, specialMovieName) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.specialMovieName = specialMovieName;
        return _this;
    }
    LongRangeCharacter.prototype.talk = function () {
        console.log("Hi, I am ".concat(this.name, " and I am a Long range character"));
    };
    LongRangeCharacter.prototype.specialMovie = function () {
        console.log("".concat(this.name, " special movie: ").concat(this.specialMovieName));
    };
    return LongRangeCharacter;
}(Character));
function characterPresentation(character) {
    character.talk();
    character.specialMovie();
}
var mario = new MeleeCharacter('Mario', 'Uppercut');
var link = new LongRangeCharacter('Link', 'Arrowhead');
characterPresentation(mario);
characterPresentation(link);
