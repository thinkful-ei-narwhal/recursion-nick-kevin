// Drill 1 ------------------------------------------------------
// let sheepCounter = (sheep) => {
//   if (sheep < 1) {
//     return "All sheep jumped over the fence";
//   }
//   console.log(`${sheep}: Another sheep jumps over the fence`);
//   return sheepCounter(sheep - 1);
// };

// console.log(sheepCounter(5));

// Drill 2 ------------------------------------------------------
// function powerCalculator(base, exponent) {
//   if (exponent < 1) {
//     console.log("Exponent should be >= 0");
//   }

//   if (exponent === 1) {
//     return base;
//   }

//   return base * powerCalculator(base, exponent - 1);
// }

// console.log(powerCalculator(10, 2));

//Drill 3 -------------------------------------------------------

// let reverseStr = (string) => {
//   if (string === '') {
//     return '';
//   }
//   return (string[string.length - 1]) + reverseStr(string.slice(0, -1));
// };

// console.log(reverseStr('fooey'));

//Drill 4 --------------------------------------------------------
// function nthTriangularNumber(n) {
//   if (n === 0) {
//     return n;
//   }
//   return n + nthTriangularNumber(n - 1);
// }

// console.log(nthTriangularNumber(6));

//Drill 5 --------------------------------------------------------

// const splitter = (str, char) => {
//   const idx = str.indexOf(char);
//   if (idx === -1) {
//     return [str];
//   } else {
//     return [str.slice(0, idx)].concat(splitter(str.slice(idx + char.length), char));
//   }
// };

// console.log(splitter('02/20/2020', '/'));

//Drill 6 ---------------------------------------------------------
// function fibonacci(n) {
//   if(n <= 0) {
//     return 0;
//   }

//   if (n < 2) {
//     return 1;
//   }

//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(7));

//Drill 7 ---------------------------------------------------------