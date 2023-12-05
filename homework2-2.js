// simple number
function isSimple(number) {
    let isSimpleNumber = true;
    if (number <= 1) {
        console.log("Simple number can't be equal to 1 or less")
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isSimpleNumber = false; 
        }
    }

    isSimpleNumber ? console.log(number + " is a simple number.") : console.log(number + " is not a simple number.")
}

isSimple(2);
isSimple(12);

// number range


// christmas tree

function printChristmasTree(treeHeight) {
    for (let i = 1; i <= treeHeight; i++) {
        let spaces = " ".repeat(treeHeight - i);
        let stars = "*".repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

// Приклад виклику функції для створення ялинки з висотою 4
printChristmasTree(10);