//load everything from local storage to obj using JSON parse/stringify so it can be stored
let options = {};
if (localStorage.options) {
	options = JSON.parse(localStorage.options);
} else {//add default colors/fonts if its first load
	options = {
		backgroundColor: null,
		color: null,
		fontSize: null,
		fontFamily: null,
		lineHeight: null,
		style: null,
		savedColors: ["white", "black", "gray", "red", "blue", "yellow", "green"],
		savedFonts: ["initial", "'Arial Black', Gadget, sans-serif", "'Comic Neue', cursive", "'Do Hyeon', sans-serif", "'IM Fell French Canon SC', serif", "'Anton', sans-serif", "'Lobster', cursive"],
	}
	saveAll();
}
//inside window.onload
let selector;
//variables
let activeSelector = "";
let activeButton = "";

window.onload = function () {
	selector = document.getElementById("selector");
	loadOptions();
}

function onOption(event, selector) {//trigger with options buttons, events setted on the html
	if (activeSelector !== selector) {//opens desired selector or close if already opened
		if (activeSelector !== "") {//close last selector if there is another type open
			hideSelector();
		}
		switch (selector) {
			case "color":
				loadColorPallet();
				break;
			case "size":
				loadSizes("Insert font size in pixels: ");
				break;
			case "font":
				loadFonts();
				break;
			case "spacing":
				loadSizes("Insert line spacing in pixels: ")
				break;
			case "style":
				break;
		}
		activeSelector = selector;
		setActiveButton(event.target);//save as active button so it can be later used to set the button by the selector
	} else if (activeButton.id === event.target.id) {//close selector if the same button is pressed
		hideSelector();
		setActiveButton("");//set last button as empty
	} else if (activeSelector === selector) {//reset if its the same selector but diferente button 
		setActiveButton(event.target);
	}
}
function setActiveButton(target) {//reset the last button, set the new active button and highlight
	if (activeButton) {
		activeButton.style.backgroundColor = "white";
		activeButton.style.color = "black";
	}
	activeButton = target;
	if (activeButton) {
		activeButton.style.backgroundColor = "rgba(0, 0, 0, 0.411)";
		activeButton.style.color = "white";
	}
}

function setOption(setting) {//save and set the new setting
	console.log(setting);
	options[activeButton.id] = setting;
	if (activeButton.id === "style") {

	} else {
		document.body.style[activeButton.id] = setting;
	}
	saveAll();
}

function loadSizes(text) {
	let label = document.createElement("laber");
	label.innerText = text;
	label.for = "input";
	let input = document.createElement("input");
	input.id = "input";
	input.type = "number";
	input.addEventListener("keyup", function (event) {
		setOption(event.target.value + "px");
	})
	selector.appendChild(label);
	selector.appendChild(input);
}

function loadFonts() {
	for (let i in options.savedFonts) {
		let box = document.createElement("button");
		box.innerText = "aA bB cC"
		box.style.fontFamily = options.savedFonts[i];
		box.className = "textBox";
		box.addEventListener("click", function () {
			setOption(options.savedFonts[i]);
		})
		selector.appendChild(box);
	}
}

function loadColorPallet() {//add all saved colors boxes to the selector as first child
	for (let i in options.savedColors) {
		addBoxColor(options.savedColors[i]);
	}
	let label = document.createElement("label");
	label.innerText = "Insert a valid color name: "
	label.for = "input";
	let input = document.createElement("input");
	input.id = "input";
	input.addEventListener("change", function (event) {
		addNewColor(event.target.value);
	})
	selector.appendChild(label);
	selector.appendChild(input);
}

function addNewColor(color) {
	if (isColor(color)) {
		options.savedColors.push(color);
		saveAll();
		addBoxColor(color);
	}
}

function isColor(strColor) {
	var s = new Option().style;
	s.color = strColor;
	return s.color == strColor && strColor != "";
}

function addBoxColor(color) {
	let box = document.createElement("button");
	box.style.backgroundColor = color;
	box.className = "colorBox";
	box.addEventListener("click", function () {
		setOption(box.style.backgroundColor);
	})
	selector.prepend(box);
}

function hideSelector() {//delete everything inside selector
	activeSelector = "";
	let numb = selector.childNodes.length;
	for (let i = 0; i < numb; i++) {
		selector.removeChild(selector.childNodes[0]);
	}
}

function loadOptions() {//reload all saved options
	if (options.backgroundColor)//change background
		document.body.style.backgroundColor = options.backgroundColor;

	if (options.color)//change text color
		document.body.style.color = options.color;

	if (options.fontSize)//change font size
		document.body.style.fontSize = options.fontSize;

	if (options.fontStyle)//change font style
		document.body.style.fontStyle = options.fontStyle;

	if (options.lineHeight)//change line spacing
		document.body.style.lineHeight = options.lineHeight;

	if (options.style)//change page css
		document.getElementById("stylesheet").href = options.style;
}

function saveAll() {
	localStorage.options = JSON.stringify(options);
}

function resetDefault() {//reset and reload page
	localStorage.clear();
	location.reload();
}
