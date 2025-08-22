function printPrime(num1, num2) {
  for (let i = num1; i < num2; i++) {
    prime(i);
  }
}

function check(num1, num2) {
  if (num1 > num2) {
    temp = num1;
    num1 = num2;
    num2 = temp;
    printPrime(num1, num2);
  } else {
    printPrime(num1, num2);
  }
}
function prime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return;
    }
  }
  console.log(num);
}
check(9, 1);
