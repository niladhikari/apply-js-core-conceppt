//sum of array
function oddNumberSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element
        
    }
    return sum;
}

//fine the odd number array
function oddNumberFind(number) {
    let oddnum = [];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element % 2 !== 0) {
            // console.log(element);
            oddnum.push(element);
        }
    }
    return oddnum;
}

const mynumbers = [12, 22,43,21,33]; // array value
const oddnum = oddNumberFind(mynumbers); // odd number find
console.log('odd numbers :',oddnum);

const oddSum = oddNumberSum(oddnum);// find odd numbers sum
console.log('odd sum is :',oddSum);
