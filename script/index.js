
const display = document.querySelector('#display');

const getValue = (value) => {
    display.value += value;
}

const backSpace = () => {
    display.value = '';
}
