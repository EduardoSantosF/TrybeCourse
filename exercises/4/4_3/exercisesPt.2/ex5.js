function qualMaisRepete(array) {
	let maisRepetido;
	let count = 0;
	for (let i in array) {
		let counter = quantasVezesRepete(array[i], array);
		// debugger
		// console.log ("count: " + count + " counter: " + counter + " antigo: " + maisRepetido + " novo: " + array[i] + " index: " + i);
		if (counter > count) {
			count = counter;
			maisRepetido = array[i];
		}
	}
	return maisRepetido;
}

function quantasVezesRepete(numb, array) {
	let counter = 0;
	for (let i in array) {
		if (numb === array[i]) {
			counter++;
		}
	}
	return counter;
}
// qualMaisRepete([2, 3, 2, 5, 8, 2, 3, 2])
console.log(qualMaisRepete([2, 3, 2, 5, 8, 2, 3]));
