let num1 = Number(prompt("Digite o primeiro número:"));

let num2 = Number(prompt("Digite o segundo número:"));


let operacao = prompt("Digite a operação (+, -, *, /):");

function calculadora(num1, num2, operacao) {
    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Erro: divisão por zero';
        default:
            return 'Operação inválida';
    }
}

// Chama a função calculadora com os valores fornecidos pelo utilizador
let resultado = calculadora(num1, num2, operacao);

// Exibe o resultado no console
console.log("Resultado:", resultado);
