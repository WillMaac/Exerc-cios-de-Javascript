/* Peça ao usuário um número (N) e use um loop while para calcular a soma de todos os números de 1 até N. */

let N = parseInt(prompt("Digite um número:"));
let sum = 0;
let i = 1;

while (i <= N) {
    sum += i;
    i++;
}

console.log("A soma dos números de 1 a", N, "é:", sum);
