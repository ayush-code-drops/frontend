const handleScroll = () => {
  console.log(window.scrollY);
};

const throttler1 = (fn, delay) => {
  let timerFlag = null;
  return function (...args) {
    if (timerFlag === null) {
      fn.apply(this, args);
      timerFlag = setTimeout(() => {
        timerFlag = null;
      }, delay);
    }
  };
};

const throttler2 = function (fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    console.log("called after", now - lastCall);
    lastCall = now;
    setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const throttledFn = throttler1(handleScroll, 1000);
// window.addEventListener("scroll", throttledFn);

const debouncer = (fn, delay) => {
  let timer;
  let firstCall = true;
  return function (...args) {
    if (firstCall) {
      fn(...args);
      firstCall = false;
    }
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
