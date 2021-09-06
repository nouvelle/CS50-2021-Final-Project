const index_btn_wasm = document.getElementById("btn_wasm");
const index_result_wasm = document.getElementById("result_wasm");
const index_time_wasm = document.getElementById("time_wasm");

const index_btn_wasm2 = document.getElementById("btn_wasm2");
const index_result_wasm2 = document.getElementById("result_wasm2");
const index_time_wasm2 = document.getElementById("time_wasm2");

const index_btn_js = document.getElementById("btn_js");
const index_result_js = document.getElementById("result_js");
const index_time_js = document.getElementById("time_js");

const index_btn_js2 = document.getElementById("btn_js2");
const index_result_js2 = document.getElementById("result_js2");
const index_time_js2 = document.getElementById("time_js2");

const input = document.getElementById("input");

let number = 20;

input.addEventListener("keyup", () => {
  number = input.value;
  index_result_wasm.innerText = "";
  index_time_wasm.innerText = "";
  index_result_wasm2.innerText = "";
  index_time_wasm2.innerText = "";
  index_result_js.innerText = "";
  index_time_js.innerText = "";
  index_result_js2.innerText = "";
  index_time_js2.innerText = "";
  
})
