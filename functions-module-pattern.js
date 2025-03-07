// Global Scoped = Available Everywhere
// Local Scoped = Available withi {}

// var defined variables are local scoped but also allows us to define block scoped variables

// Combination of functions and its surrounding state in which it was declared is called closures.

function makeAdding (firstNumber) {
    const first = firstNumber;
    return function resulting (secondNumber) {
      const second = secondNumber;
      return first + second;
    }
  }
  
  const add5 = makeAdding(5);
  console.log(add5(2)) // logs 7
  

//   Module Pattern

const calculator = (function () {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return { add, sub, mul, div };
  })();
  
  calculator.add(3,5); // 8
  calculator.sub(6,2); // 4
  calculator.mul(14,5534); // 77476
  