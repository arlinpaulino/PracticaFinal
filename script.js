function sumarNumeros(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function inicializarEventos() {
    const calcularBtn = document.getElementById('calculate');
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultSpan = document.getElementById('result');

    if (calcularBtn && num1Input && num2Input && resultSpan) {
        calcularBtn.addEventListener('click', function () {
            const num1 = num1Input.value || 0;
            const num2 = num2Input.value || 0;
            const result = sumarNumeros(num1, num2);
            resultSpan.textContent = result;
        });
    }
}

if (typeof document !== 'undefined') {
    inicializarEventos();
}

module.exports = { sumarNumeros, inicializarEventos };
