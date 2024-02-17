Array.prototype.map = function (cb) {
  let res = [];
  this.forEach((el, i, arr) => res.push(cb(el, i, arr)));
  return res;
};

const arr = [1, 2, 3];

console.log(arr.map((el, i, arr) => el * i + 1));
