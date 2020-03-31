function indexMaiorValor(array){
	let index = 0;
	for (let i = 1; i < array.length; i++) {
		if (array[i] > array[index]){
			index = i;
		}
	}
	return index;
}
console.log(indexMaiorValor([2, 3, 6, 7, 10, 1]));
