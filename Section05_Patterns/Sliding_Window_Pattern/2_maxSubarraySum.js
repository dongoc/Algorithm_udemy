function maxSubarraySum(array, n) {
	if (array.length < n) return null;

	let max = 0;
	let tempMax = 0;

	for (let i = 0; i < n; i++) {
		max += array[i];
	}

	tempMax = max;
	for (let i = n; i < array.length; i++) {
		tempMax = tempMax - array[i - n] + array[i];
		max = Math.max(tempMax, max);
	}

	return max;
}
