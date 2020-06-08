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
