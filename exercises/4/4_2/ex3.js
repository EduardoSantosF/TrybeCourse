let n = 5;
let count = n;

for (let i = 0; i < n; i++) {
	let line = "";
	line = " ".repeat(count);
	line += "*".repeat(n - count);
	count--;
	console.log(line);
}
