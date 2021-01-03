function sameFrequency(first, second) {
	if (first.length !== second.length) return false;

	let storage = {};
	let firstStr = first + "";
	let secondStr = second + "";

	for (let i = 0; i < firstStr.length; i++) {
		let letter = firstStr[i];
		storage[letter] = ++storage[letter] || 1;
	}

	for (let j = 0; j < secondStr.length; j++) {
		let letter = secondStr[j];
		if (!storage[letter]) return false;
		storage[letter]--;
	}

	return true;
}
