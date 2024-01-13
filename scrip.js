const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit)

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');

function handleSubmit(e) {
    e.preventDefault();

    if(!inputValue.value || inputValue.value < 0) {
        alert('Digite um valor correto!');
        return;
    } else if(!selectedCurrency.value) {
        alert('escolha uma moeda!');
        return;
    }

    converter();
};

function converter() {
    if(selectedCurrency.value === 'eur') {
        valueConverted = inputValue.value * 5.32;
        result.innerHTML = valueConverted;  
    } else if(selectedCurrency.value === 'dol') {
        valueConverted = inputValue.value * 4.85;
        result.innerHTML = valueConverted;
    }
};

function valueFormater() {

};