let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 1");
  }, 3000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 2");
  }, 4000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("resolved 3");
  }, 3000);
});

let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 4");
  }, 3000);
});

Promise.all = function (promiseArr) {
  let ans = [];
  let resolved = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promiseArr.length; i++) {
      promiseArr[i]
        .then((res) => {
          ans[i] = res;
          resolved++;
          if (resolved === promiseArr.length) resolve(ans);
        })
        .catch((e) => {
          reject(e);
        });
    }
  });
};

Promise.allSettled = function (promiseArr) {
  let out = [];
  let settled = [];
  return new Promise((resolve, _) => {
    for (let i = 0; i < promiseArr.length; i++) {
      promiseArr[i]
        .then((res) => {
          out[i] = {
            status: "fullfilled",
            data: res,
          };
          settled++;
        })
        .catch((reason) => {
          out[i] = {
            status: "rejected",
            reason,
          };
          settled++;
        })
        .finally(() => {
          if (settled === promiseArr.length) resolve(out);
        });
    }
  });
};

export const promiseArr = [promise1, promise2, promise3, promise4];

const ans = Promise.allSettled(promiseArr)
  .then((res) => console.log("res", res))
  .catch((e) => console.log("error", e));



