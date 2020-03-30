// exercise 1
function soma(a, b) {
	return a + b;
}
function subtracao(a, b) {
	return a - b;
}
function multiplicacao(a, b) {
	return a * b;
}
function divisao(a, b) {
	return a / b;
}
function modulo(a, b) {
	return a % b;
}
// exercise 2
function maiorQue(a, b) {
	if (a > b) {
		return "Number " + a + " is bigger than " + b;
	} else if (b < a) {
		return "Number " + b + " is bigger than " + a;
	} else {
		return "Number " + a + " is equal to " + b;
	}
}
// exercise 3
function maior(a, b, c) {
	let result;

	if (a > b) {
		result = a;
	} else {
		result = b;
	}
	if (result < c) {
		result = c;
	}
	return result;
}
//exercise 4
function numberType(n) {
	if (n > 0) {
		return "positive";
	} else if (n < 0) {
		return "negative";
	} else {
		return "zero";
	}
}
// exercise 5
function isTriangle(a, b, c) {

	if (a + b + c == 180) {
		return true;
	} else {
		return false;
	}
}
// exercise 6
function howItMove(piece) {
	let result;
	switch (piece.toLocaleLowerCase()) {
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
}
// exercise 7
function gradePercentage(n) {
	let result;

	if (n > 0 && n < 100) {
		if (n >= 90) {
			result = "A";
		} else if (n >= 80) {
			result = "B";
		} else if (n >= 70) {
			result = "C";
		} else if (n >= 60) {
			result = "D";
		} else if (n >= 50) {
			result = "E";
		} else if (n < 50) {
			result = "F";
		}
	} else {
		result = "error 404";
	}
	return result;
}
// exercise 8
function isEven(a, b, c) {

	if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
		return true;
	} else {
		return false;
	}
}
// exercise 9
function isOdd(a, b, c) {
	if (a % 2 > 0 || b % 2 > 0 || c % 2 > 0) {
		return true;
	} else {
		return false;
	}
}
// exercise 10
function calculateProfit(cost, price) {
	let profit;

	if (price > 0 || cost > 0) {
		profit = (price - cost * 1.2) * 1000;
	} else {
		profit = "error";
	}
	return profit;
}
// exercise 11
function calculateLiquidSalary(salario) {

	if (salario < 1556.94) {
		salario -= salario * 0.08;
	} else if (salario < 2594.92) {
		salario -= salario * 0.09;
	} else if (salario < 5189.82) {
		salario -= salario * 0.11;
	} else {
		salario -= 570.88;
	}

	if (salario < 1903.98) {
		//isento
	} else if (salario < 2826.65) {
		salario -= (salario * 0.075) - 142.80;
	} else if (salario < 3751.05) {
		salario -= (salario * 0.15) - 354.80;
	} else if (salario < 4664.68) {
		salario -= (salario * 0.225) - 636.13;
	} else {
		salario -= (salario * 0.275) - 869.36;
	};
	return salario;
}
