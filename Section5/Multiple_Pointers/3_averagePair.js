function averagePair(arr, avg) {
	if (!arr.length) return false;

	let sum = avg * 2;
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let tempSum = arr[left] + arr[right];
		if (tempSum === sum) return true;
		if (tempSum > sum) right--;
		if (tempSum < sum) left++;
	}
	return false;
}
