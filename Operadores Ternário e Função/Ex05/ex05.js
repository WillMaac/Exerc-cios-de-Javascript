/* Escreva uma função que receba um número e retorne "Positivo"se"Negativo"se para menor"Zero"se para exatamente */

function verificarNumero(numero){
    return numero > 0 ? "Positivo" : numero < 0 ? "Negativo" : "Zero";
}


const resultado = verificarNumero(-10);
console.log(resultado);
