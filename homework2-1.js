// fizzbuzz

let number = 5;

if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
} else if (number % 3 === 0) {
    console.log("Fizz");
} else if (number % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(number);
}

// високосний рік, формулу знайшов в інтернеті:
// якщо рік кратний 4 і при цьому ділиться на 100 з остатком, то він високосний, 
// і якщо рік ділиться на 400 без залишку

let year = 2023;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " рік є високосним.");
} else {
    console.log(year + " рік не є високосним.");
}

// Программа для виведення віку людини
/*
Якщо вірити інтернету то:
"рік" вживається, якщо число закінчується на 1, 
крім випадків, коли це число закінчується на 11 (11, 111, 211 і т.д.).
Наприклад:
1 рік
21 рік
111 рік
1001 рік

"роки" вживається, якщо число закінчується на 2, 3, 4, крім випадків, 
коли це число закінчується на 12, 13, 14 (12, 113, 214 і т.д.).
Наприклад:
2 роки
32 роки
104 роки

"років" вживається в усіх інших випадках.
Наприклад:
5 років
27 років
1111 років
*/
function printAgeMessage(age) {
    let edgeCasesArray = [2, 3, 4]
    let yearsString;

    if (age === 1 || age % 10 === 1 && age % 100 !== 11) {
        yearsString = "рік";
    } else if (edgeCasesArray.includes(age) || edgeCasesArray.includes(age % 10) && !edgeCasesArray.includes(age % 100)) {
        yearsString = "роки";
    } else {
        yearsString = "років";
    }

    console.log("Ваш вік " + age + " " + yearsString);
}

printAgeMessage(1);
printAgeMessage(4);
printAgeMessage(50);
printAgeMessage(111);
printAgeMessage(21);
printAgeMessage(82);