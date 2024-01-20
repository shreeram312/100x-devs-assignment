/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

// Example usage:
console.log("Start");
sleep(2000).then(() => {
  console.log("After 2000 milliseconds");
});
console.log("End");
