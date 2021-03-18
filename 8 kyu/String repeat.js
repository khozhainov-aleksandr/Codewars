'use strict';

console.log(repeatStr(6, 'I')); // "IIIIII"
console.log(repeatStr(5, 'Hello')); // "HelloHelloHelloHelloHello"


function repeatStr (n, s) {
	return s.repeat(n);
}