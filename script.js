let operation = '';
let history = [];

function appendOperation(value) {
    operation += value;
    document.getElementById('operation').innerText = operation;
}

function clearScreen() {
    operation = '';
    document.getElementById('operation').innerText = '';
    document.getElementById('result').innerText = '0';
}

function deleteLast() {
    operation = operation.slice(0, -1);
    document.getElementById('operation').innerText = operation;
}

function calculateResult() {
    try {
        const result = eval(operation);
        document.getElementById('result').innerText = result;
        history.push(`${operation} = ${result}`);
        operation = '';
    } catch (e) {
        document.getElementById('result').innerText = 'Error';
    }
}

function showHistory() {
    const historyContainer = document.getElementById('history');
    historyContainer.innerHTML = history.map(item => `<div>${item}</div>`).join('');
    historyContainer.style.display = historyContainer.style.display === 'block' ? 'none' : 'block';
}
