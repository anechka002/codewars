// Description:
// If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.

// Usage example:

// var complexFunction = function(arg1, arg2) { /* complex calculation in here */ };
// var cachedFunction = cache(complexFunction);

// cachedFunction('foo', 'bar'); // complex function should be executed
// cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
// cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments

// Solution:

function cache(func) {
  let storage = {};

  return (...args) => {
    const key = JSON.stringify(args)
    if(key in storage) {
      return storage[key]
    } 

    const res = func(...args)
    storage[key] = res
    return res
    
  }
}

function sum(a, b) {
  console.log('called');
  return a + b;
}

function minus(a, b) {
  console.log('called');
  return a - b;
}

const cachedSum = cache(sum);
const cachedMinus = cache(minus);

console.log(cachedSum(1, 2))
console.log(cachedSum(1, 2))
console.log(cachedMinus(1, 1))
console.log(cachedMinus(1, 1))