export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Kei';
  static lastName: string = 'Matsuoka';

  static work() {
    return `Hello! I am ${this.firstName}`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer)

console.log(Me.isProgrammer);
console.log(Me.work())