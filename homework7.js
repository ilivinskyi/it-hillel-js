// summarize 
function summarize(num) {
  return function (arg) {
    const argument = typeof arg === 'number' ? arg : 1;
    return num + argument;
  };
}

const addFive = summarize(5);
console.log("Summarize function results: ")
console.log(addFive(3));
console.log(addFive());
console.log("Summarize function results end")

// counter
function counter(startValue, step) {
  let current = startValue;

  function increment() {
    current += step;
    return current;
  }

  function decrement() {
    current -= step;
    return current;
  }

  function reset() {
    current = startValue;
    return current;
  }

  return {
    increment,
    decrement,
    reset,
    getCurrentValue: () => current,
  };
}

const myCounter = counter(0, 2);

console.log("Counter function results: ")
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.decrement());
console.log(myCounter.reset());
console.log(myCounter.getCurrentValue()); 
console.log("Counter function results end.")

// sequence
function sequence(...fns) {
  return function (...args) {
    let result;
    fns.forEach(fn => {
      if (!result) {
        result = fn(...args);
      } else {
        result = fn(result);
      }
    });

    return result;
  };
}


const addTwo = x => x + 2;
const substractThree = x => x - 3;
const multiplyByFive = x => x * 5;

const mySequence = sequence(addTwo, substractThree, multiplyByFive);

const result = mySequence(5); 
console.log('Sequence function result:', result); 