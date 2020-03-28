let n = 100;
let count = n % 2;

for (let i = 0; i < n; i++) {
	let line = "";
	line += " ".repeat((n - count) / 2);
	line += "*".repeat(count);
	line += " ".repeat((n - count) / 2);
	console.log(line);
	if (count >= n){
		break;
	}
	count += 2;
}
