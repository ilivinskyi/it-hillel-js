// logArguments
function logArguments(fn) {
    return function (...args) {
      console.log('Arguments:', args);
      return fn.apply(this, args);
    };
  }
  
  function myFunction(a, b, c) {
    console.log('function print', a, b, c);
  }
  
  const decorator = logArguments(myFunction);
  
  decorator('Print one', 'Print two', 'Print three');

  // validator
  function validate(fn, validator) {
    return function (...args) {
      if (validator(args)) {
        return fn.apply(this, args);
      } else {
        throw new Error('Validation failed');
      }
    };
  }

  function numberValidator(args) {
    return args.every(arg => typeof arg === 'number');
  }

  function sum(a, b) {
    return a + b;
  }

  const validatedSum = validate(sum, numberValidator);

  console.log(validatedSum(2, 3));
//   console.log(validatedSum(2, '3')); // error

  // retry
  function retry(fn, maxAttempts) {
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                const result = fn();
                return result;
            } catch (error) {
                if (attempt === maxAttempts) {
                throw error;
                }
                console.warn('Attempt' + attempt + ' failed. Retrying');
            }
        }
    }
  
  
  function myFunc(a, b) {
    if (a + b >= 1) {
      throw new Error('Sum is less than 1');
    }
    return 'Sum is bigger than 1!';
  }
  
  const retryFunc = (a, b, maxAttempts) => retry(() => myFunc(a, b), maxAttempts);
  
  try {
    const result = retryFunc(1, 2, 5);
    console.log('Result:', result);
  } catch (error) {
    console.error('Final error:', error);
  }