// class Superclass {
//   constructor(public isSuper: boolean = true) { }

//   public sayHello() {
//     console.log('Olá mundo!');
//   }
// }

// class Subclass extends Superclass {
//   constructor() {
//     super();
//     this.isSuper = false;
//   }
// }

// function func1(obj: Superclass) {
//   obj.sayHello();

//   if (obj.isSuper) {
//     console.log('Super');
//   } else {
//     console.log('Sub');
//   }
// }

// const superclass = new Superclass();
// const subclass = new Subclass();

// func1(superclass);
// func1(subclass);

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

