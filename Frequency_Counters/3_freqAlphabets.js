// FAIL

var freqAlphabets = function (s) {
	let result = "";

	for (let i = 0; i < s.length; i++) {
		let letter;
		if (s[i + 2] === "#") {
			letter = s[i] + s[i + 1];
			i += 2;
		} else {
			letter = s[i];
		}
		result += getAlphabet(letter);
	}

	return result;
};

function getAlphabet(char) {
	const code = +char + 96;
	return String.fromCharCode(code);
}

const result = freqAlphabets(
	"12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
);
console.log(result);

// Input: s = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
// Output: "abcdefghijklmnopqrstuvwxyz"
