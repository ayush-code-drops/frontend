let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 1");
  }, 3000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("resolved 2");
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

function allSettled(promiseArr) {
  let outArr = [];
  let settled = 0;
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise, i) => {
      promise
        .then((res) => {
          settled++;
          outArr[i] = {
            status: "fullfilled",
            value: res,
          };
        })
        .catch((e) => {
          settled++;
          outArr[i] = {
            status: "rejected",
            reason: e,
          };
        })
        .finally(() => {
          if (settled === promiseArr.length) resolve(outArr);
        });
    });
  });
}

Promise.any = function (promiseArr) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promiseArr.length; i++) {
      promiseArr[i].then((res) => resolve(res)).catch((e) => reject(e));
    }
  });
};

allSettled(arr).then((res) => console.log("p", res));
Promise.allSettled(arr).then((res) => console.log("org", res));
