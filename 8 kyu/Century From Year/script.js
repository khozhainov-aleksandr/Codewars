'use strict';

const century = year => Math.ceil(year / 100); 

console.log(century(1705)); // returns (18)
console.log(century(1900)); // returns (19)
console.log(century(1601)); // returns (17)
console.log(century(2000)); // returns (20)
console.log(century(89)); // returns (1)

// function century(year) {
//   return Math.ceil(year/100);
// }