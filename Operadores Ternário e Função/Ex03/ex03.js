 function determinarVencedor(num1, num2) {
  return num1 === num2 ? "Empate" : num1 > num2 ? "Jogador 1" : "Jogador 2";
}

const vencedor = determinarVencedor(50, 20);
console.log(vencedor);

