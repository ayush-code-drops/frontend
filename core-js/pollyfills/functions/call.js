let obj1 = {
  name: "Ayush",
};

const greetUser = function (message, code) {
  console.log("this is", this.name, message, code);
};

Function.prototype.myCall = function (context, ...args) {
  let fnKey = Symbol();
  context[fnKey] = this;
  context[fnKey](...args);
  delete context[fnKey];
};

greetUser.myCall(obj1, "from here", "001");
