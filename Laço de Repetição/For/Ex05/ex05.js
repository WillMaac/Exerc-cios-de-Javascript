// Encontrar o maior número em uma lista de números.//

const numeros = [5, 10, 20, 30, 100];
let maior = numeros[0];
for(let i = 1; i<=numeros.length; i++){
    if(numeros[i] > maior){
        maior = numeros[i]
    
}
}
console.log(`O maior número da lista é: ${maior}`);
