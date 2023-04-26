export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

enum COLORS {
  RED = '#ff0000',
  WHITE = '#ffffff',
  BLACK = '#000000',
}

let black = COLORS.BLACK;
console.log({ black });

enum COLORS {
  YELLOW = '#ff0000',
  GRAY = '#808080'
}

COLORS.YELLOW;