// if, else if, else statements

let direction = '';

if (direction == 'left') {
  console.log('red planet');
} 
else if (direction == 'right') {
  console.log('purple planet');
}
else if (direction == 'backwards') {
  console.log('back home');
}
else {
    console.log('ship crashed');
}

// Challenge:
let balance = 100;
let item = 10;

if (balance >= 10) {
    console.log('Purchased item!');
    balance -= item;
} else {
    console.log('Not enough money');
}