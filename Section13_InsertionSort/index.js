const { swap, arr } = require("../helper");
// const arr = [1, 9, 8, 16, 5, 2, 7, 3];

function insertionSort1(arr) {
	for (let i = 1; i < arr.length; i++) {
		let currentVal = arr[i];
		for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currentVal;
	}
	return arr;
}

const result = insertionSort1(arr);
console.log(result);
