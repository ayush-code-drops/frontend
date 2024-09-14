//Deep flattening of an Object

const flattenObject = (obj, prefix = "") => {
  let output = {};

  for (let key in obj) {
    let val = obj[key];
    let newKey = prefix === "" ? key : prefix + "." + key;
    if (val !== null && typeof val === "object") {
      let recursiveCall = flattenObject(val, newKey);
      output = { ...output, ...recursiveCall };
    } else {
      output[newKey] = val;
    }
  }
  return output;
};

let nestedObject = {
  id: 28802695164,
  date: "December 31, 2016",
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8,
    },
  },
};

console.log(fn(nestedObject));
