function somatorio(numb){
	let result = 0;
	for(i = 1; i <= numb; i++){
		result += i;
	}
	return result;
}

console.log(somatorio(5));
