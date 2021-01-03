function areThereDuplicates(...args) {
	const counts = args.reduce((obj, key) => {
		obj[key] = ++obj[key] || 1;
		return obj;
	}, {});
	for (let key in counts) {
		if (counts[key] > 1) return true;
	}
	return false;
}

const result = areThereDuplicates(1, 2, 2);
console.log(result);

function areThereDuplicates2(...args) {
	args.sort((a, b) => a - b);
	let start = 0;
	let next = 1;
	while (next < args.length) {
		if (args[start] === args[next]) return false;
		start++;
		next++;
	}
	return true;
}

function areThereDuplicates3(...args) {
	return new Set(args).size !== args.length;
}
