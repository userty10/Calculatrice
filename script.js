
let display = document.querySelector('.res');
const historyList = document.getElementById('history-list');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function addToHistory(expression, result) {
  const li = document.createElement('li');
  li.textContent = `${expression} = ${result}`;
  historyList.prepend(li);
}

function clearHistory() {
  historyList.innerHTML = '';
}

function calculate() {
  let expr = display.value;

  if (/[^0-9+\-*/.]/.test(expr)) {
    display.value = 'Error';
    return;
  }

  try {
    let result = eval(expr);
    addToHistory(expr, result);
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}
