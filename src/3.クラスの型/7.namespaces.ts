export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Nagoya {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName?: string
    ) {}
  }
}

let kei = new Japanese.Tokyo.Person('Kei');
console.log(kei);

let yumiko = new Japanese.Nagoya.Person('Yumiko');
console.log(yumiko);

let michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);
