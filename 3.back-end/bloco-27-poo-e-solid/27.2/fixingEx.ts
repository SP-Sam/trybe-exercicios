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

/* 
PARA FIXAR 2
interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  public myFunc(myParam: number): string {
    return `${myParam + this.myNumber}`;
  }
}

const myObj = new MyClass(21);

const myNumber = myObj.myNumber;
console.log(myNumber);

const myFunc = myObj.myFunc(7);
console.log(myFunc);
 */

interface Logger {
  log(param: string): void;
}

class ConsoleLogger implements Logger {
  public log(param: string): void {
    console.log(param, '1');
  }
}

class ConsoleLogger2 implements Logger {
  public log(param: string): void {
    console.log(param, '2');
  }
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}

  public save(key: string, value: string): void {
    this.logger.log(`${key}: ${value}`);
  }
}

const consoleLogger = new ConsoleLogger();
const consoleLogger2 = new ConsoleLogger2();

const exampleDatabase = new ExampleDatabase(consoleLogger);
const exampleDatabase2 = new ExampleDatabase(consoleLogger2);
const exampleDatabase3 = new ExampleDatabase();

exampleDatabase.save('name', 'Samuel');
exampleDatabase2.save('name', 'Claudia');
exampleDatabase3.save('name', 'Hugo');
