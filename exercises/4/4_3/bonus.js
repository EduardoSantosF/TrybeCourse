let algarismos = {
	I : 1,
	V : 5,
	X : 10,
	L : 50,
	C : 100,
	D : 500,
	M : 1000,
}

function algarismosToNumb(algarismo) {
	let result = 0;
	let L;
	let nextL;
	for (let i = 0; i < algarismo.length; i++) {
		L = algarismos[algarismo[i]];
		nextL = algarismos[algarismo[i + 1]];
		console.log("L: " + L + " next: " + nextL);
		if (L < nextL){
			result += nextL - L;
			i += 1;
			console.log("subtrai: " + L);
		}else{
			console.log(L);
			result += L;
			console.log("soma: " + L);
		}
		console.log("result: ", result);
	}
	return result;
}

console.log(algarismosToNumb("CDXCIXV"))
