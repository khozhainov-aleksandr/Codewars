'use strict';

console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])); // 'codewars'
console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4'])); // 'btswmdsbd kkw'
console.log(switcher(['4', '24'])); // 'wc'

function switcher(x) {
	const alphabet = ['0', 'z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p',
										'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd',
										'c', 'b', 'a', '!', '?', ' '];
}

/* 
Given an array of numbers (in string format), you must return a string. 
The numbers correspond to the letters of the alphabet in reverse order:
a=26, z=1 etc. You should also account for '!', '?' and ' ' 
that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/