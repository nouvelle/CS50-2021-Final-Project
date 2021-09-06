const btn_js = document.getElementById("btn_js");
const result_js = document.getElementById("result_js");
const time_js = document.getElementById("time_js");

// JavaScript
btn_js.addEventListener("click", () => {
  result_js.innerText = "loading ...";

  const startTime_js = performance.now();
  const fib = (n) => {
    if (n === 0 || n === 1) return n;
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  };
  const calc_js = fib(number);  
  const endTime_js = performance.now();

  result_js.innerText = calc_js;
  time_js.innerText = (endTime_js - startTime_js) +' millisec';
});
