let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 1");
  }, 3000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 2");
  }, 3000);
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

export const promiseArr = [promise1, promise2, promise3, promise4];
