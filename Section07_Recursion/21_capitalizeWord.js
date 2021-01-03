function capitalizeWords(arr) {
	if (!arr.length) return [];
	return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
