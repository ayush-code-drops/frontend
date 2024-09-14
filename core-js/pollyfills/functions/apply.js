// let obj1 = {
//   name: "Ayush",
// };

// const greetUser = function (message, code) {
//   console.log("this is", this.name, message, code);
// };

Function.prototype.myApply = function (context, args) {
  if (!Array.isArray(args)) {
    throw new Error("All arguments should be passed inside an array");
  }
  const fnKey = Symbol();
  context[fnKey] = this;
  context[fnKey](...args);
  delete context[fnKey];
};

// greetUser.myApply(obj1, ["from here", "001"]);

let obj1 = {
  firstName: "Ayush",
  lastName: "Agrawal",
  greetUser: function (city, state) {
    console.log(
      `Welcome to ${city} in ${state} ! ${this.firstName} ${this.lastName}`
    );
  },
};

let obj2 = {
  firstName: "Manu",
  lastName: "Mangal",
};

// function greetUser(city, state) {
//   console.log(
//     `Welcome to ${city} in ${state} ! ${this.firstName} ${this.lastName}`
//   );
// }

obj1.greetUser.call(obj2, "Jaipur");
