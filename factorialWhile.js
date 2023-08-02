function factorial(number) {
    let result = 1;
    let i = number;
    while (i >= 1) {
         result = result * i;
         i--;
    }
    return result;
}

const factorials = factorial(7);
console.log('Factorial is:',factorials);