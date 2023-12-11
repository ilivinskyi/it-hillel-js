// reverse string
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

// palindrome check
function isPalindrome(str) {
    if (str === str.split("").reverse().join("")) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome("lol"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("tttt"));
console.log(isPalindrome("ok"));
console.log(isPalindrome("111"));


// GCD fucntion
function findGCD(a, b) {
  if (b) {
        return findGCD(b, a % b);
    } else {
        return Math.abs(a);
    }
}

console.log(findGCD(252, 105));
