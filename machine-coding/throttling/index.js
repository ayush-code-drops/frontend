const handleScroll = () => {
  console.log(window.scrollY);
};

const throttler1 = (fn, delay) => {
  let timerFlag = null;
  return function (...args) {
    if (timerFlag === null) {
      fn.apply(this, args);
      setTimeout(() => {
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
