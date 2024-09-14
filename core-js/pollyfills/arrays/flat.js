const flat = function (array, depth = 1) {
  let flattenedArr = [];

  function helper(arr, currentDepth) {
    for (let ele of arr) {
      if (Array.isArray(ele) && currentDepth < depth) {
        helper(ele, currentDepth + 1);
      } else {
        flattenedArr.push(ele);
      }
    }
    return flattenedArr;
  }

  return helper(array, 0);
};

let arr = [1, 2, 3, [9, 9, 9, [0, 0, [999, 998]]], 4, 5, [6, 7, [7, 6]]];

console.log(flat(arr, 2));
