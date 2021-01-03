function isSubsequence(first, second) {
	let i = 0;
	let j = 0;
	if (!first) return true;

	while (j < second.length) {
		if (first[i] === second[j]) i++;
		if (i === first.length) return true;
		j++;
	}
	return false;
}
