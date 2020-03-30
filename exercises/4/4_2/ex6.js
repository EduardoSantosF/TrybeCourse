let n = 4;
for ( n = 0; n < 20; n++) {
	let isPrime = true;
	for (let i = 2; i < n; i++) {
		if (n % i == 0) {
			isPrime = false;
			break;
		}
	}
	if (isPrime) {
		console.log("The Number " + n + " is Prime!")
	} else {
		console.log("The Number " + n + " isn't Prime.")
	}
}
