/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// function wait(n) {
//   let p = new Promise(function (resolve) {
//     setTimeout(resolve, n * 1000);
//   });
//   return p;
// }

// let ans = wait().then(function () {
//   console.log("Promise Resolved");
// });
// module.exports = wait;

function wait(n) {
  return new Promise((resolve) => {
    setTimeout(resolve, n * 1000);
  });
}

const p = wait(6);
p.then(() => console.log("Promise resolved"));
module.exports = wait;
