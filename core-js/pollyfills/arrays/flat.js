const flat = (arr, depth) => {
  let flattenedArr = [];

  function helper(arr, currentDepth) {
    for (val of arr) {
      if (Array.isArray(val) && currentDepth < depth) {
        helper(val, currentDepth + 1);
      } else {
        flattenedArr.push(val);
      }
    }
    return flattenedArr;
  }

  return helper(arr, 0);
};
