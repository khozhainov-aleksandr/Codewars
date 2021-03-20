'use strict';

const summation = function (num) {
  if (num === 1) {
		return 1;
	} else {
		return num + summation(num - 1);
	}
};

// const summation = function (num) {
//   let result = 0;
//   for (let i = 1; i <= num; i++) {
//     result += i;
//   }
//   return result;
// };



console.log(summation(1)); // 1
console.log(summation(2)); // 3
console.log(summation(8)); // 36