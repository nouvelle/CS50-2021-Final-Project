const btn_wasm2 = document.getElementById("btn_wasm2");
const result_wasm2 = document.getElementById("result_wasm2");
const time_wasm2 = document.getElementById("time_wasm2");

// WebAssembly2
fetch('../wasm/program_super.wasm')
.then(res => res.arrayBuffer())
.then(buffer => WebAssembly.compile(buffer))
.then(module => WebAssembly.instantiate(module))
.then(instance => {
  btn_wasm2.addEventListener("click", () => {
    result_wasm2.innerText = "loading ...";

    const startTime_wasm2 = performance.now();
    const calc_wasm2 = instance.exports.fiboMain(number)
    const endTime_wasm2 = performance.now();

    result_wasm2.innerText = calc_wasm2;
    time_wasm2.innerText = (endTime_wasm2 - startTime_wasm2) +' millisec';
  });
});
