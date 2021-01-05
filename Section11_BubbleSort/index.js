/* 
largest value bubble up to the TOP
*/

const { swap } = require("../helper");

function bubbleSort(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
			}
		}
	}
	return arr;
}

function bubbleSort2(arr) {
	let flag = false;
	for (let i = arr.length - 1; i > 0; i--) {
		flag = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				flag = false;
			}
		}
		if (flag) break;
	}
	return arr;
}

const result = bubbleSort([1, 9, 8, 16, 5, 2, 7, 3]);
console.log(result);
