function binarySearch(arr, target) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let middle = Math.floor((left + right) / 2);

		if (target === arr[middle]) return middle;
		if (target > arr[middle]) left = middle + 1;
		if (target < arr[middle]) right = middle - 1;
	}

	return -1;
}

binarySearch([1, 2, 3, 4, 5], 2);
