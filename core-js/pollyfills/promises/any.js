let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("rejected 1");
  }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("resolved 2");
  }, 1000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("resolved 3");
  }, 1000);
});

let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("resolved 4");
  }, 1000);
});

const promiseArr = [promise1, promise2, promise3, promise4];
const any = (promises) => {
  const result = [];
  return new Promise(async (resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      try {
        let res = await promises[i];
        resolve(res);
      } catch (e) {
        result.push(e);
      }
    }
    reject(result);
  });
};

any(promiseArr)
  .then((res) => console.log(res))
  .catch((e) => console.log(e));

Promise.any(promiseArr).then((value) => console.log(value));
