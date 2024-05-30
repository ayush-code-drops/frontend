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
