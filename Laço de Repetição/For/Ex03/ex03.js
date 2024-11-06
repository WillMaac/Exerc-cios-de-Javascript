//Calcular a soma de todos os números de 1 até um número N fornecido pelo usuário.//

let n = parseFloat(prompt("Digite um número"));
let soma = 0;

for (let i = 1; i<=n; i++){
    soma += i
    console.log(`A soma de 1 até ${n} é: ${soma}`);
    
}

