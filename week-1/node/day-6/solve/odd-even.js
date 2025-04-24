const isPrime = (num) => {
  if (num % 2 == 0) {
    return `${num} is even number`;
  } else {
    return `${num} is a odd number`;
  }
};

console.log(isPrime(21));
