function capitalizeFirst(arr) {
	if (!arr.length) return [];
	let letterUppercase = arr[0][0].toUpperCase() + arr[0].slice(1);
	return [letterUppercase].concat(capitalizeFirst(arr.slice(1)));
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
