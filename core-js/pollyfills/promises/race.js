let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("rejected 1");
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

const promiseArr = [promise1, promise2, promise3, promise4];

const race = (promises) => {
  return new Promise(async (resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      try {
        let res = await promises[i];
        resolve(res);
      } catch (e) {
        reject(e);
      }
    }
  });
};

race(promiseArr)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => console.log(e));
