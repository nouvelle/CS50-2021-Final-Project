# CS50-2021-Final-Project: WebAssembly

# Description:
Comparing Fibonacci calculation time between WebAssembly and JavaScript.

Even languages that do not run in the browser, such as C/C++ and Rust, can be compiled into WebAssembly and run in the web browser along with JavaScript.  
I heard that this can be used to perform processing faster than JavaScript, so I investigated how much of a difference there is in processing speed.  
In this report, I'm comparing the processing speed of a program written in C, compiled into WebAssembly, and code written in JavaScript.  


# Measurement Method
Two types of programs were implemented in C and JavaScript, respectively: one that uses recursion to calculate the Fibonacci numbers, and one that performs the process more efficiently.

1. Recursion using WebAssembly
2. Recursion using JavaScript
3. More Efficient way using WebAssembly
4. More Efficient way using JavaScript

* To measure time, use The [Performance interface in JavaScript](https://developer.mozilla.org/ja/docs/Web/API/Performance)


# Result
Calculate the average time of 5 runs of each.  
Obviously, the code written in WebAssembly is faster.  

| n  | Recursion WebAssembly | Recursion JavaScript | More Efficient way WebAssembly | More Efficient way JavaScript |
| -- | ------------- | -------------- | --------- | --------- |
| 20 | 0.10 msec     | 1.70 msec      | 0.02 msec | 0.20 msec |
| 30 | 6.36 msec     | 70.26 msec     | 0.02 msec | 0.32 msec |
| 40 | 344.18 msec   | 5,148.98 msec  | 0.04 msec | 0.86 msec |
| 45 | 3,577.06 msec | 31,157.80 msec | 0.04 msec | 1.04 msec |


# Technology
- WebAssembly (compiled from the C language)
- JavaScript
- HTML
- CSS
