// adition
let a = 1 + 1;
console.log(a);

let b = 10;
let c = a + b;
console.log(c);
//b = b + 1;
b += 1;
console.log(b);

//subtraction
let x = 10 - 5;
console.log(x);

let y = b + x;
console.log(y);

//x = x - 1;
x -= 1;
console.log(x);

//multiplication
let unitPrice = 2;
let units = 10;
let totalPrice = unitPrice * units;
console.log(totalPrice);

//division
let n = 10;
let result = n / 2;
console.log(result);

//modulus
let r = 5 % 2;
console.log(r);

// Challenge:
let baseWeight = 10000;
let foodWeight = 100;
let passengersWeight = 10;

let fuelUnitWeight = 2;
let fuelUnits = 100;

let totalWeight = baseWeight + foodWeight + passengersWeight + (fuelUnitWeight * fuelUnits);
console.log(totalWeight);