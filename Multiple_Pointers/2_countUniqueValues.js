// function countUniqueValues(arr) {
// 	let count = 1;
// 	let standard = arr[0];
// 	let pointer = 1;

// 	if (arr.length === 0) return 0;

// 	while (pointer < arr.length) {
// 		if (standard !== arr[pointer]) {
// 			count++;
// 			standard = arr[pointer];
// 		}
// 		pointer++;
// 	}
// 	return count;
// }

// function countUniqueValues(arr) {
// 	let left = 0;
//   let right = 1;

//   if (arr.length === 0) return 0;

// 	while (right < arr.length) {
// 		if (arr[left] !== arr[right]) {
// 			left++;
// 			arr[left] = arr[right];
// 		}
// 		right++;
// 	}
// 	return left + 1;
// }

function countUniqueValues(arr) {
	if (!arr.length) return 0;

	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
}

const result = countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
console.log(result);
