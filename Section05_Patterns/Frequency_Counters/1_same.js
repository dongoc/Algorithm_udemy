// TRY : first
// function same(arr1, arr2) {
// 	// return arr1.every((el) => arr2.includes(el ^ 2));
// }

// TRY : second
function same2(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;

	for (let el1 of arr1) {
		let correctIndex = arr2.indexOf(el1 ** 2);
		if (correctIndex === -1) return false;
		arr2.splice(correctIndex, 1);
	}
	return true;
}

const result2 = same2([1, 2, 3, 2], [9, 1, 4, 4]);
console.log("result2", result2);

// TRY : third
function same3(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;

	const freq1 = arr1.reduce((obj, key) => {
		obj[key] = obj[key]++ || 1;
		return obj;
	}, {});

	const freq2 = arr2.reduce((obj, key) => {
		obj[key] = obj[key]++ || 1;
		return obj;
	}, {});

	for (key in freq1) {
		if (!(key ** 2 in freq2)) return false;
		if (freq1[key] !== freq2[key ** 2]) return false;
	}

	return true;
}

const result3 = same3([1, 2, 3, 2], [9, 1, 4, 4]);
console.log("result3", result3);
