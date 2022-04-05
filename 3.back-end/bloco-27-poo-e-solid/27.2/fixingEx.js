/*
PARA FIXAR 1
class Superclass {
  constructor(public isSuper: boolean = true) { }

  public sayHello() {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

function func1(obj: Superclass) {
  obj.sayHello();

  if (obj.isSuper) {
    console.log('Super');
  } else {
    console.log('Sub');
  }
}

const superclass = new Superclass();
const subclass = new Subclass();

func1(superclass);
func1(subclass); */
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (param) {
        console.log(param, '1');
    };
    return ConsoleLogger;
}());
var ConsoleLogger2 = /** @class */ (function () {
    function ConsoleLogger2() {
    }
    ConsoleLogger2.prototype.log = function (param) {
        console.log(param, '2');
    };
    return ConsoleLogger2;
}());
var ExampleDatabase = /** @class */ (function () {
    function ExampleDatabase(logger) {
        if (logger === void 0) { logger = new ConsoleLogger(); }
        this.logger = logger;
    }
    ExampleDatabase.prototype.save = function (key, value) {
        this.logger.log("".concat(key, ": ").concat(value));
    };
    return ExampleDatabase;
}());
var consoleLogger = new ConsoleLogger();
var consoleLogger2 = new ConsoleLogger2();
var exampleDatabase = new ExampleDatabase(consoleLogger);
var exampleDatabase2 = new ExampleDatabase(consoleLogger2);
var exampleDatabase3 = new ExampleDatabase();
exampleDatabase.save('name', 'Samuel');
exampleDatabase2.save('name', 'Claudia');
exampleDatabase3.save('name', 'Hugo');
