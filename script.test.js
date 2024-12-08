const { sumarNumeros } = require('./script');
const { JSDOM } = require('jsdom');

describe('Pruebas para la función sumarNumeros', () => {
    test('Debe retornar 5 cuando los números son 2 y 3', () => {
        expect(sumarNumeros(2, 3)).toBe(5);
    });

    test('Debe manejar el DOM correctamente', () => {
        const dom = new JSDOM(`
            <!DOCTYPE html>
            <html>
                <body>
                    <input id="num1" value="2">
                    <input id="num2" value="3">
                    <button id="calculate"></button>
                    <span id="result"></span>
                </body>
            </html>
        `);

        const document = dom.window.document;

        const calcularBtn = document.getElementById('calculate');
        calcularBtn.addEventListener('click', function () {
            const num1 = document.getElementById('num1').value || 0;
            const num2 = document.getElementById('num2').value || 0;
            const result = sumarNumeros(num1, num2);
            document.getElementById('result').textContent = result;
        });

        calcularBtn.click();

        const result = document.getElementById('result').textContent;
        expect(result).toBe('5');
    });
});
