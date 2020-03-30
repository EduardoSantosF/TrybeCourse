function verificaPalindromo(palavra){
	let reversed = "";
	for (let i = palavra.length - 1; i >= 0; i--) {
		reversed += palavra[i];
	}
	return palavra === reversed;
}
console.log(verificaPalindromo("arara"));
