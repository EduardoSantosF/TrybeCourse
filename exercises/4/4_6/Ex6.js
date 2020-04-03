var personName = "";

function complainMessage() {
	alert("I told you not to do that " + personName);
}

let inputName = document.getElementById("name");
// inputName.addEventListener("keyup",typeAndScream);

function typeAndScream() {
	document.getElementById("audio").play();
	personName = inputName.value;
}

let moodButton = document.getElementById("mood");
moodButton.addEventListener("click", goDark);

function goDark() {
	var body = document.getElementsByTagName("body")[0];
	if (body.className == "") {
		body.className = "dark";
	}
	else {
		body.className = "";
	}

}

function finishTheStory() {
	document.getElementById("story").innerHTML = "So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!";
}
