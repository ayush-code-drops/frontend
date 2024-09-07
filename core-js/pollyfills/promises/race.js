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



  const flattenObj = (obj, prefix) => {
    let output = {};

    for (let key in obj) {
      let val = obj[key];
      let newKey = prefix === "" ? key : prefix + "." + key;
      if (val !== null && typeof val === "object") {
        let recursiveCall = flattenObj(val, newKey);
        output = { ...output, ...recursiveCall };
      } else {
        output[newKey] = val;
      }
    }

    return output;
  };

  const flattenArr = (arr, depth) => {
    let res = [];

    function helper(arr, currentDepth) {
      for (let val of arr) {
        if (Array.isArray(val) && currentDepth < depth) {
          helper(val, currentDepth + 1);
        } else {
          res.push(val);
        }
      }
      return res;
    }

    return helper(arr, depth);
  };

  const infiteCurryingsSum = function (a) {
    return function (b) {
      if (b) {
        return infiteCurryingsSum(a + b);
      } else {
        return a;
      }
    };
  };

  const curriedfn = function (fn) {
    return function (...args) {};
  };

