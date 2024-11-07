/* Peça ao utilizador um número limite (N) e use um loop while para encontrar e somar todos os números pares entre 1 e N. Exiba a soma total no final. */

let limitNumber = parseFloat(prompt("Digite o número limite"));
let sum = 0;
let i = 1;

while (i<= limitNumber) {

if(i % 2 === 0){
    sum += i;
}
 i++   
}
console.log("A soma de todos os números pares entre 1 e", limitNumber, "é:", sum);
