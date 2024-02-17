Array.prototype.forEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

const arr = [1, 2, 3];

arr.forEach((el, i, arr) => console.log("el", el, i, arr));
