/* Use um loop while para encontrar o primeiro número que seja divisível por 5 dentro de uma sequência de números, começando em 1. Exiba esse número e interrompa o loop. */

let  numero = 1;

while (true){
    if (numero % 5 == 0) {
        console.log("O primeiro número múltiplo de 5 é:", numero);
        break;
        
    }
    numero++
}