const btn_wasm = document.getElementById("btn_wasm");
const result_wasm = document.getElementById("result_wasm");
const time_wasm = document.getElementById("time_wasm");

// WebAssembly
fetch('../wasm/program.wasm')
.then(res => res.arrayBuffer())
.then(buffer => WebAssembly.compile(buffer))
.then(module => WebAssembly.instantiate(module))
.then(instance => {
  btn_wasm.addEventListener("click", () => {
    result_wasm.innerText  = "loading ...";

    const startTime_wasm = performance.now();
    const calc_wasm = instance.exports.fiboMain(number)
    const endTime_wasm = performance.now();

    result_wasm.innerText = calc_wasm;
    time_wasm.innerText = (endTime_wasm - startTime_wasm) +' millisec';
  });
});
