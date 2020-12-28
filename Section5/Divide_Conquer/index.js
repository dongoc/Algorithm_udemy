function search(arr, n) {
	let min = 0;
	let max = arr.length - 1;

	while (min <= max) {
		let middle = Math.floor((max + min) / 2);
		let pivot = arr[middle];

		if (pivot < n) min = middle + 1;
		if (pivot > n) max = middle - 1;
		if (pivot === n) return middle;
	}
	return -1;
}

const result = search([1, 2, 3, 4, 5], 6);
console.log(result);
