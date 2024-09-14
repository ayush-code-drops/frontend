function PromisePollyfill(executor) {
  let onResolve, onReject;
  let isFullfilled = false;
  let isRejected = false;
  let called = false;
  let value;

  function resolve(val) {
    isFullfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      called = true;
      onResolve(val);
    }
  }

  function reject(reason) {
    isRejected = true;
    value = reason;
    if (typeof onReject === "function") {
      called = true;
      onReject(reason);
    }
  }

  this.then = function (cb) {
    onResolve = cb;
    if (isFullfilled && !called) {
      onResolve(value);
      called = true;
    }
  };
  this.catch = function (cb) {
    onReject = cb;
    if (isRejected && !called) {
      onReject(value);
      called = true;
    }
  };

  try {
    executor(resolve, reject);
  } catch (e) {
    console.log(e);
  }
}

let p = new PromisePollyfill((resolve, reject) => {
  resolve(3);
});

p = new Promise((resolve, reject) => {
  resolve(3);
});

console.log(p);
