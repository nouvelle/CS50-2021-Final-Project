const btn_js2 = document.getElementById("btn_js2");
const result_js2 = document.getElementById("result_js2");
const time_js2 = document.getElementById("time_js2");

// JavaScript2
btn_js2.addEventListener("click", () => {
  result_js2.innerText = "loading ...";

  const startTime_js2 = performance.now();
  const fib = (n) => {
    if (n === 0 || n === 1) return new BigNumber(n);
    let firstResult = new BigNumber(1);
    let secondResult = new BigNumber(1);

    for (let i = 3; i <= n; i++) {
      const newResult = firstResult.plus(secondResult);
      firstResult = secondResult;
      secondResult = newResult;
    }
    return secondResult;
  };
  const calc_js2 = fib(number);
  const endTime_js2 = performance.now();

  result_js2.innerText = calc_js2;
  time_js2.innerText = (endTime_js2 - startTime_js2) +' millisec';
});
