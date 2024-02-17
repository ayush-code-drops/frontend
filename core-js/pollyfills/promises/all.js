const all = (promises) => {
  let res = [];
  let settledPromises = 0;
  return new Promise(async (resolve, reject) => {
    try {
      for (let i = 0; i < promises.length; i++) {
        let response = await promises[i];
        res.push(response);
        settledPromises += 1;

        if (settledPromises === promises.length) resolve(res);
      }
    } catch (e) {
      reject(e);
    }
  });
};
