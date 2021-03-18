'use strict';

console.log(findDifference([3, 2, 5], [1, 4, 4])); // 14
console.log(findDifference([9, 7, 2], [5, 2, 2])); // 106
console.log(findDifference([11, 2, 5], [1, 10, 8])); // 30
console.log(findDifference([4, 4, 7], [3, 9, 3])); // 31
console.log(findDifference([15, 20, 25], [10, 30, 25])); // 0

function findDifference(a, b) {
	const sumA = a.reduce((a, b) => a * b);
	const sumB = b.reduce((a, b) => a * b);

	return Math.abs(sumA - sumB);
}