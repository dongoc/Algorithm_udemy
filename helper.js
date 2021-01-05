const arr = [1, 9, 8, 16, 5, 2, 7, 3];

function swap(arr, i, j) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
	return arr;
}

module.exports = {
	arr,
	swap,
};
