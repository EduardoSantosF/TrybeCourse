let n = 100;
let count = n % 2;

for (let i = 0; i < n; i++) {
	let line = "";
	line += " ".repeat((n - count) / 2);
	if (count < n) {
		for (let a = 1; a <= count; a++) {
			if (a == 1 || a == count) {
				line += "*";
			} else {
				line += " ";
			}
		}
	} else {
		line += "*".repeat(count);
	}
	line += " ".repeat((n - count) / 2);
	console.log(line);
	if (count >= n) {
		break;
	}
	count += 2;
}
