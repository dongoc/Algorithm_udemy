function power(num, index) {
	if (index === 0) return 1;
	return num * power(num, index - 1);
}
