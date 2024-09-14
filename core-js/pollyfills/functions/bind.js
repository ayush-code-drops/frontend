let person = {
  firstname: "Kirtesh",
  lastname: "bansal",
  printName: function (country) {
    console.log(this.firstname + " " + this.lastname + " from " + country);
  },
};

// let printName = function (country) {
//   console.log(this.firstname + " " + this.lastname + " from " + country);
// };

Function.prototype.myBind = function (context, ...args) {
  let func = this;
  console.log("this", this);
  //Line 11 could be omitted if we use arrow function here
  return function (...args2) {
    console.log(this, "inside inner function"); // will be undefined
    func.apply(context, [...args, ...args2]);
  };
};

let newPrintName = person.printName.myBind(person, "India");
newPrintName("Ayush");
