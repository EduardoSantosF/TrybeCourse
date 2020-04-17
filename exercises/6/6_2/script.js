const estados = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goías',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraíma',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins',
};
let form;
let result;

function cancel() {
  const elements = form.elements;
  for (let i = 0; i < form.elements.length - 2; i += 1) {
    const elemento = elements[i];
    if (elemento.type === 'text' || elemento.type === "textarea") {
      elemento.value = null;
    } else if (elemento.type === 'radio' && elemento.checked) {
      elemento.checked = false;
    } else if (elemento.id === "estados") {
      elemento.selectedIndex = 0;
      console.log(elemento.type)
    }
  }
  result.innerHTML = null;
}

function submitForm(event) {
  event.preventDefault();
  const elements = event.target.elements;
  result.innerHTML = null;
  for (let i = 0; i < elements.length - 2; i += 1) {
    const newElement = document.createElement('p');
    if (elements[i].type === 'radio' && !elements[i].checked) {
    }
    else {
      newElement.innerHTML = `${elements[i].name}: ${elements[i].value} <br>`;
      result.appendChild(newElement);
    }
  }
}

function setEstados() {
  const selectEstados = document.getElementById('estados');
  for (let i = 0; i < Object.keys(estados).length; i += 1) {
    const option = document.createElement('option');
    option.value = Object.keys(estados)[i];
    option.innerText = estados[option.value];
    selectEstados.appendChild(option);
  }
}

function setVariables() {
  form = document.getElementById('form');
}

function setEvents() {
  form.addEventListener('submit', submitForm);
  document.getElementById('cancel-button').addEventListener('click', cancel);
  document.getElementById('data').DatePickerX.init();
}

window.onload = function () {
  this.setVariables();
  this.setEvents();
  this.setEstados();
  result = document.getElementById('result');
}
