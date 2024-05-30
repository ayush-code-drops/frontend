// Write a function that takes another function as an argument and then reutrn a memoised function for it

const getUniqueKey = (fn, args) => {
  const uniqueKey = [];
  uniqueKey.concat(fn.name, args);
  return uniqueKey.join("|"); //helps in diffentiating in args such as add(1,2,3) & add(12,3)
};

const memoisedFunction = function (fn) {
  let cache = {};
  return function (...args) {
    const key = getUniqueKey(fn, args);
    if (cache[key]) return cache[key];
    else {
      cache[key] = fn(...args);
      return cache[key];
    }
  };
};
