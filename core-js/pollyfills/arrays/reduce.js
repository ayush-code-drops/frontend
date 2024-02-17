Array.prototype.reduce = function (cb, intialValue) {
  let acc = intialValue;
  console.log("prototype");
  for (let i = 0; i < this.length; i++) {
    acc = acc !== undefined ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};

const arr = [1, 2, 3, 4, 5, 6];

let sum = arr.reduce((acc, el) => (acc += el), 0);
console.log("sum", sum);

let product = arr.reduce((acc, el) => (acc *= el), 0);

console.log("product", product);
