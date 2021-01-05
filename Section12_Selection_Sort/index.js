/*
  현재값 & 남은 el 중 최소값 -> swap
*/

const { swap, arr } = require("../helper");
// const arr = [1, 9, 8, 16, 5, 2, 7, 3];

function selectionSort1(arr) {
	let min = 0;
	let minIndex = 0;

	for (let i = 0; i < arr.length - 1; i++) {
		min = arr[i];
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j] && min > arr[j]) {
				min = arr[j];
				minIndex = j;
			}
		}
		if (i !== minIndex) {
			swap(arr, i, minIndex);
			minIndex = i + 1;
		}
	}
	return arr;
}

function selectionSort2(arr) {
	for (let i = 0; i < arr.length; i++) {
		let lowest = i;
		for (let j = i + 1; arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}
		if (i !== lowest) swap(arr, i, lowest);
	}
	return arr;
}

const result = selectionSort1(arr);
console.log(result);
