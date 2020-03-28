let n = 23;
let result;

if (n > 0 && n < 100) {
	if (n >= 90) {
		result = "A";
	} else if (n >= 80) {
		result = "B";
	} else if (n >= 70) {
		result = "C";
	} else if (n >= 60) {
		result = "D";
	} else if (n >= 50) {
		result = "E";
	} else if (n < 50) {
		result = "F";
	}
} else {
	result = "error 404"
}
console.log(result);
