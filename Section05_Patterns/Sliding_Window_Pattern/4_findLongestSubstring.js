// FIXME
function findLongestSubstring(str) {
	if (!str.length) return 0;

	let length = 0;
	let start = 0;
	let end = 0;
	let temp = "";

	while (end < str.length) {
		if (temp[0] === str[end]) {
			temp = temp.slice(1);
			start++;
		}
		temp += str[end];
		end++;
	}
	return temp.length;
}

// Solution
function findLongestSubstring(str) {
	let longest = 0;
	let seen = {};
	let start = 0;

	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (seen[char]) {
			start = Math.max(start, seen[char]);
		}
		// index - beginning of substring + 1 (to include current in count)
		longest = Math.max(longest, i - start + 1);
		// store the index of the next char so as to not double count
		seen[char] = i + 1;
	}
	return longest;
}
