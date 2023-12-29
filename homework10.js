// fibonacci
function recursiveFibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
    }
}

console.log(recursiveFibonacci(6));

// palindrome
function findStepsToPalyndrome(num, maxSteps = 100) {
    function getReversedNumber() {
        return parseInt(num.toString().split('').reverse().join(''));
    }
    let steps = 0;
    while (steps < maxSteps) {
        const reversed = getReversedNumber;
        num += reversed;
        steps++;
        if (num === getReversedNumber) {
            return { result: num, steps };
        }
    }
    return { result: 'No palindrome', steps };
}

console.log(findStepsToPalyndrome(96)); 
console.log(findStepsToPalyndrome(196)); 

// Не дуже осилив 3 завдання