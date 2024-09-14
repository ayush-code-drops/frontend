// Function.prototype.call = function (obj, ...args) {
//   let fnKey = Symbol();
//   obj[fnKey] = this;
//   obj[fnKey](...args);
//   delete obj[fnKey];
// };

// Function.prototype.apply = function (context, args) {
//   if (!Array.isArray(args))
//     throw new Error("arguments should be in form of an array");
//   let fnKey = Symbol();
//   context[fnKey] = this;
//   context[fnKey](...args);
//   delete context[fnKey];
// };

// Function.prototype.bind = function (context, ...args) {
//   return (...args2) => {
//     this.apply(context, [...args, ...args2]);
//   };
// };

// let obj = {
//   name: "Ayush",
//   city: "Sironj",
// };

// function greetUser(state) {
//   console.log(`Hi ${this.name} from ${this.city} in ${state}`);
// }

// greetUser.call(obj, "M.P");

// function memoize(fn) {
//   let cache = {};
//   return function (...args) {
//     let key = JSON.stringify(args);
//     if (cache[key] !== undefined) return cache[key];
//     cache[key] = fn(...args);
//     console.log("calling the function", cache);
//     return cache[key];
//   };
// }

// const sum = (a, b) => a + b;

// const memoizedSum = memoize(sum);

// console.log(memoizedSum(0, 0));
// console.log(memoizedSum(0, 0));

function infiniteCurrying(...args) {
  let s = args.reduce((acc, val) => (acc += val), 0);
  return function (...args1) {
    let s1 = args1.reduce((acc, val) => (acc += val), 0);
    if (args1.length > 0) {
      return infiniteCurrying(s + s1);
    }
    return s;
  };
}

let curriedFn = infiniteCurrying(1)(2)(5)(9)(8, 6, 5, 5, 5, 5)(10);

console.log(curriedFn());

function sum(a, b) {
  return a + b;
}

function curryFn(fn) {
  return function curriedFn(...args) {
    if (args.length >= fn.length) {
      fn(...args);
    } else {
      return function (...next) {
        return curriedFn(...args, ...next);
      };
    }
  };
}

// let curriedFn = curryFn(sum);

const throttler = (fn, delay) => {
  let timer = null;
  return function (...args) {
    if (timer === null) {
      fn(...args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
};

const FlattenObject = (obj) => {
  let ans = {};
  for (let key in obj) {
    if (typeof key === "object") {
    }
  }
};
