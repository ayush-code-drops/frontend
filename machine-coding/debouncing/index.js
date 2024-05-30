const inputBox = document.getElementById("inputbox");

const handleInputChange = (e) => {
  console.log("calling", e.target.value);
};

const debouncedFn = function (fn, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(function () {
      console.log("this", this);
      fn(...args);
    }, delay);
  };
};

inputBox.addEventListener("input", debouncedFn(handleInputChange, 300));
