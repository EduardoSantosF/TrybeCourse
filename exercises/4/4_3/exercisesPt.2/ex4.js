function qualMaiorNome(nomes) {
	let maior = "";
	for (key in nomes) {
		if (nomes[key].length > maior.length) {
			maior = nomes[key];
		}
	}
	return maior;
}

console.log(qualMaiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
