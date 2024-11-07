/* Peça ao usuário um número e calcule o seu fatorial usando um loop while. Exemplo: O fatorial de 5 é 120 (5 * 4 * 3 * 2 * 1). */

const num = parseFloat (prompt ("Digite um número para calcular o fatorial:"))
let fatorial = 1;
let i = num;

while(i >1){
    fatorial *= i;
    i--;
    
}

console.log("O fatorial de", num, "é:", fatorial);

