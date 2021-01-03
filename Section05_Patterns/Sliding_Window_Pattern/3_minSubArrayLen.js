function minSubArrayLen(array, sum) {
	// 최소값이므로 맨 처음은 최대값을 잡는다
	let length = array.length + 1;
	let tempSum = 0;
	let start = 0;
	let end = 0;

	while (start < array.length) {
		// end를 더하기 시작한다 (not start)
		if (tempSum < sum && end < array.length) {
			tempSum += array[end];
			end++;
		}
		// sum보다 크다면 그때부터 start를 빼기 시작한다
		else if (tempSum >= sum) {
			length = Math.min(length, end - start);
			tempSum -= array[start];
			start++;
		} else break;
	}

	return length > array.length ? 0 : length;
}
