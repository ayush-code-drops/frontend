// Functional technique to covert functions with n arguments into n functions with 1 argument each
//  fn(a,b) into fn(a)(b)

// Uses
// 1. To create higher order functions
// 2. To avoid passing same variable as argument again and again
// 3. Separation of logic by returing different functions on each call
// 4. Make function pure and less prone to errors

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const ans = sum(4)(5)(6);
console.log("ans", ans);

//fn(a,b,...n) => fn(a)(b)(c)...(n)()

// Q2 :- Currying function that takes an operation and returns accordingly



const curryingFn = function (operation) {
  return function (a) {
    return function (b) {
      switch (operation) {
        case "sum":
          return a + b;
        case "subtract":
          return a - b;
        case "multiply":
          return a * b;
        case "divide":
          return a / b;
        default:
          return "Wrong operation provided";
      }
    };
  };
};

// This could be given as an example on use case of currying, since we created another fn divide out of curry fn.

const divide = curryingFn("divide")(6)(3);

console.log("divideAns", divide);

const sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
};

// Q3:- Infinite CurryingSum :- fn(a,b,c...,n) => fn(a)(b)(c)...(n)

function infiniteCurryingSum(a) {
  return function (b) {
    if (b) {
      return infiniteCurryingSum(a + b);
    } else {
      return a;
    }
  };
}

const curriedSum = infiniteCurryingSum(5)(6)(7)(2)(5)();

console.log("Infinite curriedSum", curriedSum);

function genericInfiniteCurrying(fn) {
  return function (a) {
    return function (b) {
      if (b) {
        return fn(a, b);
      }
    };
  };
}

// Infinite Currying vs Partial Applications

//This is example of partial application of a function where you return another function with less number of arrity (less number of operands)

const partialApp = function (a) {
  return function (b, c) {
    return a + b + c;
  };
};

// Manipulating DOM

function manipulate(id) {
  return function (content) {
    document.getElementById(id).textContent = content;
  };
}

// const changeHeading = manipulate("heading");
// changeHeading("This is new heading");

// Imp Questions :- Write a function that coverts fn(a,b,c) to fn(a)(b)(c)

const makeCurriedFn = function (func) {
  return function curryFn(...args) {
    if (args.length >= func.length) {
      return func(...args);
    }
    return function (...next) {
      return curryFn(...args, ...next);
    };
  };
};

const sumFn = (a, b, c) => a + b + c;

const sumCurried = makeCurriedFn(sumFn);

console.log(sumCurried(4)(5)(6), sumFn.length);

///Question (Viacom 18)

//const res = currySum(1,2)(3,4,5)(6,7)(8,9,10)()
//we need 1+2-3+4-5+6-7+8-9+10

function currySum(...args1) {
  return function (...args2) {
    if (args2.length > 0) {
     
      return currySum(...args1,...args2);
    }
    return args1.reduce((acc, curr,i) => {
      if(i===0) return acc+=curr
return i%2===1? acc+=curr:acc-=curr
    }, 0);
  };
}

const s = currySum(1,2)(3,4,5)(6,7)(8,9,10)()
console.log('currySum',s)





