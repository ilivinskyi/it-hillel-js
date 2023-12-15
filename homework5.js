// reverse array

function reverseArray(arrayToReverse) {
    return arrayToReverse.reverse();
}

const originalArray = [1, 2, 3, 4, 5]; 
const reversedArray = reverseArray(originalArray); 

console.log(reversedArray); // [5, 4, 3, 2, 1]


// unique values
const array1 = [1, 2, 3, 4, 5]; 
const array2 = [3, 4, 5, 6, 7]; 

function uniqueValues(firstArray, secondArray) {
    return [... new Set([...firstArray, ...secondArray])];
}

const uniqueValuesArray = uniqueValues(array1, array2); 

console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]


// average grade
const students = [ 
    { name: "Alice", age: 20, grade: 4.5 }, 
    { name: "Bob", age: 21, grade: 3.9 }, 
    { name: "Charlie", age: 19, grade: 4.8 } 
    ]; 

function calculateAverageGrade(studentsArray) {
    const sum = studentsArray.reduce((acc, obj) => acc + obj.grade, 0);
    // чи малось на увазі взагалі так зробити:
    // return (studentsArray.reduce((acc, obj) => acc + obj.grade, 0) / studentsArray.length).toFixed(1);

    const average = sum / studentsArray.length;
    return parseFloat(average.toFixed(1));
}

console.log(calculateAverageGrade(students)); // 4.4