const cards = [
  'cinco-de-ouros',
  'nove-de-espadas',
  'quatro-de-paus',
  'seis-de-copas',
  'sete-de-espadas',
  'sete-de-paus',
  'tres-de-ouros',
]

const anim = {
  duration: [
    '1s',
    '2s',
    '3s',
    '4s',
  ],
  timing: [
    'linear',
    'ease',
    'ease-in',
    'ease-out',
    'ease-in-out',
  ],
}

const classes = [
  'rotate',
  'zoom',
  'flipX',
  'flipY',
]

let grid;

function randomInArray(array){
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function randomTransition(){
  let transition = "";
  for (const i of Object.keys(anim)) {
    
    transition += `${randomInArray(anim[i])} `
  }
  return transition;
}

function addNewCardToGrid(){
  let card = document.createElement('img');
  card.src = `cartas/${randomInArray(cards)}.png`;
  card.style.transition = `all ${randomTransition()}`;
  card.classList.add(randomInArray(classes));
  grid.appendChild(card);
}

window.onload = function() {
  grid = document.querySelector('.grid');
  document.getElementById('baralho').addEventListener('click', addNewCardToGrid);
}
