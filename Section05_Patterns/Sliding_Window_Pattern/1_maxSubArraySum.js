function maxSubarraySum(arr, n) {
	if (arr.length < n) return null;

	let maxSum = 0;
	let tempSum = 0;

	// 맨 처음 기준 값을 구한다
	for (let i = 0; i < n; i++) {
		maxNum += arr[i];
	}

	// 여기서부터 시작
	tempSum = maxSum;
	// 첫 숫자를 빼고 새 숫자를 더하면서 max값이 더 큰 것으로 교체
	for (let i = n; i < arr.length; i++) {
		tempSum = tempSum - arr[i - n] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
}

const result = maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2);
console.log(result);
