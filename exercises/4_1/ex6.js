let piece = "BisPo".toLocaleLowerCase();
let result;
switch (piece) {
	case "peão":
		result = "para a frente"
		break;
	case "torre":
		result = "linhas retas"
		break;
	case "cavalo":
		result = "em L's "
		break;
	case "bispo":
		result = "diagonais"
		break;
	case "rainha":
		result = "diagonais e linhas retas"
		break;
	case "rei":
		result = "1 casa em qualquer direção"
		break;
	default:
		result = "error 404"
		break;
}
console.log(result);
