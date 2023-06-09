export {};

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('Ham', 1234567890);

// console.log(card._owner)
// console.log(card._secretNumber)

console.log(card.owner);

// console.log(card.secretNumber)
console.log(card.debugPrint());

card.secretNumber = 1111111111;
console.log(card.debugPrint());
