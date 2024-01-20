function wait1(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Wait 1 completed");
      resolve();
    }, t);
  });
}

function wait2(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Wait 2 completed");
      resolve();
    }, t);
  });
}

function wait3(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Wait 3 completed");
      resolve();
    }, t);
  });
}

function calculateTime(t1, t2, t3) {
  const startTime = Date.now();

  return wait1(t1)
    .then(() => wait2(t2))
    .then(() => wait3(t3))
    .then(() => {
      const endTime = Date.now();
      const totalTime = endTime - startTime;
      return totalTime;
    });
}

module.exports = calculateTime;
