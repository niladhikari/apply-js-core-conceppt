function factorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
         result = result * i;
    }
    return result;
}

const factorials = factorial(7);
console.log('Factorial is:',factorials);
