let person = {
  firstname: "Kirtesh",
  lastname: "bansal",
};

let printName = function (country) {
  console.log(this.firstname + " " + this.lastname + " from " + country);
};

Function.prototype.myBind = function (context, ...args) {
  let func = this;
  //Line 11 could be omitted if we use arrow function here
  return function (...args2) {
    func.call(context, [...args, ...args2]);
  };
};

let newPrintName = printName.myBind(person, "India");
newPrintName();
