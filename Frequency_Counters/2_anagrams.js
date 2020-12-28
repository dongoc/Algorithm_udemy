// function anagrams(str1, str2) {
// 	if (str1.length !== str2.length) return false;

// 	const freq1 = {};
// 	const freq2 = {};

// 	for (let i = 0; i < str1.length; i++) {
// 		freq1[str1[i]] = ++freq1[str1[i]] || 1;
// 	}

// 	for (let j = 0; j < str2.length; j++) {
// 		freq2[str2[j]] = ++freq2[str2[j]] || 1;
// 	}

// 	for (let key in freq1) {
// 		if (!(key in freq2)) return false;
// 		if (freq1[key] !== freq2[key]) return false;
// 	}

// 	return true;
// }

// const result = anagrams("anagram", "nagarim");
// console.log(result);

function anagrams(first, second) {
	if (first.length !== second.length) return false;

	let storage = {};

	for (let i = 0; i < first.length; i++) {
		let letter = first[i];
		storage[letter] = ++storage[letter] || 1;
	}

	for (let j = 0; j < second.length; j++) {
		let letter = second[j];
		if (!storage[letter]) return false;
		storage[letter]--;
	}

	return true;
}

const result = anagrams("anagram", "nagaram");
console.log(result);
