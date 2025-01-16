const actions = {
  equals: () => calculate(),
  clear: () => (display.value = ''),
  backspace: () => (display.value = display.value.slice(0, -1)),
  history: () => (historyModal.style.display = 'block'),
  'clear-history': () => (historyList.innerHTML = '', historyModal.style.display = 'none'),
};

const display = document.getElementById('display');
const historyList = document.getElementById('history-list');
const historyModal = document.getElementById('history-modal');

function handleButtonClick({ target: { dataset, innerText } }) {
  (actions[dataset.value || innerText] || ((v) => (display.value += v)))(dataset.value || innerText);
}

const calculate = () => {
  try {
    const result = eval(display.value);
    display.value = result;
    historyList.insertAdjacentHTML('beforeend', `<li>${result}</li>`);
  } catch {
    display.value = 'Error';
  }
};
