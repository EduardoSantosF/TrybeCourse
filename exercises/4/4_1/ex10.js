let price = 20;
let cost = 5;
let profit;

if (price > 0 || cost > 0) {
	profit = (price - cost * 1.2) * 1000
} else {
	profit = "error";
}
