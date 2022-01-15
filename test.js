//var math = require("mathjs");
const { atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt, bignumber } = require('mathjs');


// import {
//   atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
// } from 'mathjs'

// functions and constants
//round(e, 3)                    // 2.718
//atan2(3, -3) / pi              // 0.75
console.log(log(10000, 10));      // 4

let a = 1/3;
let b = bignumber(1.0/3);



console.log(a * 3);
console.log(b * 3);
// sqrt(-4)                       // 2i
// pow([[-1, 2], [3, 1]], 2)      // [[7, 0], [0, 7]]
// derivative('x^2 + x', 'x')     // 2 * x + 1

// create a mathjs instance with configuration
// math.config = {
//   epsilon: 1e-12,
//   matrix: 'Matrix',
//   number: 'number',
//   precision: 64,
//   predictable: false,
//   randomSeed: null
// }
// //const math = create(all, config)

// // read the applied configuration
// console.log(math.config())

// // change the configuration
// math.config({
//   number: 'BigNumber'
// })
