const inputBox = document.getElementById("inputbox");

const handleInputChange = (e) => {
  console.log("calling", e.target.value);
};

const debouncedFn = function (fn, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer); // Can do without checking for timer as well, since clearInterval does nothing if incase timer doesn't exist

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

inputBox.addEventListener("input", debouncedFn(handleInputChange, 300));
