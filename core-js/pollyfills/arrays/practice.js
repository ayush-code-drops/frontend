Array.prototype.flat = function (depth = 0) {
  let flattenedArr = [];
  const helper = (arr, currentDepth) => {
    for (let val of arr) {
      if (Array.isArray(val) && currentDepth < depth) {
        helper(val, currentDepth + 1);
      } else {
        flattenedArr.push(val);
      }
    }
    return flattenedArr;
  };
  return helper(this, 0);
};

let arr = [1, 2, 3, 4, 5, 6, [7, 8, [9, 10]]];

let ans = arr.flat(2);

console.log("ans", ans);
