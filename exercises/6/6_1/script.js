let submitButton;

function preventDefault(event){
  event.preventDefault();
}

window.onload = function(){
  document.getElementById("form").addEventListener("submit", preventDefault);
}
