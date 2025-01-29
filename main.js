  function handleButtonClick(event) {
    const button = event.target;
    const buttonValue = button.dataset.value || button.innerText;

    if (buttonValue === "equals") {
      calculate();
    } else if (buttonValue === "clear") {
      clearDisplay();
    } else if (buttonValue === "backspace") {
      backspace();
    } else if (buttonValue === "history") {
      showHistory();
    } else if (buttonValue === "clear-history") {
      clearHistory();
    } else {
      appendToDisplay(buttonValue);
    }
  }

  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function backspace() {
    const currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
  }

  function showHistory() {
    openHistoryModal();
  }

  function clearHistory() {
    document.getElementById('history-list').innerHTML = '';
    closeHistoryModal();
  }

  function openHistoryModal() {
    document.getElementById('history-modal').style.display = 'block';
  }

  function closeHistoryModal() {
    document.getElementById('history-modal').style.display = 'none';
  }

  function calculate() {
    try {
      const result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
      saveToHistory(result);
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }

  function saveToHistory(result) {
    const historyList = document.getElementById('history-list');
    const historyItem = document.createElement('li');
    historyItem.textContent = result;
    historyList.appendChild(historyItem);
  }
