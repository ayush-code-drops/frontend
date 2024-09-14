let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    rejects("rejected 1");
  }, 1200);
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

function any(promiseArr) {
  let rejected = 0;
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise) => {
      promise
        .then((res) => resolve(res))
        .catch(() => {
          rejected++;
          if (rejected === promiseArr.length) {
            reject("AggregateError: No Promise in Promise.any was resolved");
          }
        });
    });
  });
}

any(promiseArr)
  .then((res) => console.log(res))
  .catch((e) => console.log(e));

Promise.any(promiseArr).then((value) => console.log(value));
