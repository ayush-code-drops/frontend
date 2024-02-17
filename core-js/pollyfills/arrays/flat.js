// Array.prototype.flatPolyfillRecursive = function (depth = 1) {
//   console.log("Flattening the array using recursive approach.");

//   const result = [];

//   this.forEach((item) => {
//     if (Array.isArray(item) && depth > 0) {
//       result.push(...item.flatPolyfillRecursive(depth - 1));
//     } else {
//       result.push(item);
//     }
//   });

//   return result;
// };

const myFlat = function (arr, depth = 1) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      output.push(...myFlat(arr[i], depth - 1));
    } else {
      output.push(arr[i]);
    }
  }
  return output;
};

const arr = [1, 2, [1, 2, 3, 1, 2], 4, [5, 6, [7]]];

// const flattenedArr = arr.flatPolyfillRecursive(1);

// console.log(flattenedArr);

console.log(myFlat(arr, 2));
