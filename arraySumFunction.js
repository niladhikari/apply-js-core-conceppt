function getArraySum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element
        
    }
    return sum;
}

const numbers = [12, 22,43,21,33];
const arraySum = getArraySum(numbers);
console.log('Sum is :',arraySum);