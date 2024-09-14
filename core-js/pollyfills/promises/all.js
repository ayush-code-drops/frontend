let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 1");
  }, 3000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 2");
  }, 1200);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 3");
  }, 1200);
});

let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 4");
  }, 1000);
});

const arr = [promise1, promise2, promise3, promise4];

function all(promiseArr) {
  return new Promise((resolve, reject) => {
    let out = [];
    let resolved = 0;

    promiseArr.forEach((promise, i) => {
      promise
        .then((res) => {
          resolved++;
          out[i] = res; // need to use index in place of out.push, otherwsie promise which resolves first will be pushed to out 1st
          if (resolved === promiseArr.length) resolve(out); //cannot check for out.length in place of resolved because pending promises won't be pushed to it and resultant would have undefined at those indexes.
        })
        .catch((e) => reject(e));
    });
  });
}

all(arr)
  .then((res) => console.log("polyfill", res))
  .catch((e) => console.log("polyfill", e));

Promise.all(arr)
  .then((res) => console.log("original", res))
  .catch((e) => console.log("original", e));
