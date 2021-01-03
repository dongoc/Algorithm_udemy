function flatten(arr) {
	let result = [];

	function helper(arr) {
		if (!arr.length) return;
		if (!Array.isArray(arr[0])) {
			result.push(arr[0]);
		} else {
			helper(arr[0]);
		}
		helper(arr.slice(1));
	}

	helper(arr);
	return result;
}

let result = flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
console.log(result);
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
