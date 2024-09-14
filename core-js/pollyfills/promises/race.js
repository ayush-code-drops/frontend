// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("rejected 1");
//   }, 3000);
// });

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolved 2");
//   }, 1000);
// });

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "two");
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

const promiseArr = [promise1, promise2, promise3, promise4];

const race = (promiseArr) => {
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise) => {
      promise.then((res) => resolve(res)).catch((e) => reject(e));
    });
  });
};

race(promiseArr)
  .then((res) => {
    console.log("race1", res);
  })
  .catch((e) => console.log("race1", e));

Promise.race(promiseArr)
  .then((res) => console.log("original", res))
  .catch((e) => console.log("original", e));
