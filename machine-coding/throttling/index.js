const handleScroll = () => {
  console.log(window.scrollY);
};

const throttler = function (fn, delay) {
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

const throttledFn = throttler(handleScroll, 1000);

window.addEventListener("scroll", throttledFn);
