const allSettled = (promises) => {
  let res = [];
  return new Promise(async (resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      try {
        const response = await promises[i];
        res.push({
          status: "Successful",
          results: response,
        });
      } catch (e) {
        res.push({
          status: "Failed",
          results: e,
        });
      }
    }

    resolve(res);
  });
};
