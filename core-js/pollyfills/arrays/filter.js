Array.prototype.filter = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

const arr = [1, 2, 3, 4, 6, 7, 9, 11, 23, 19, 21, 55, 44];

const notDivisiblebyTwo = arr.filter((el) => el % 2 === 1);

console.log(notDivisiblebyTwo);
