/* Peça ao usuário para inserir uma senha. Use um loop while para repetir o pedido até que a senha correta ("1234") seja introduzida. */

let senha = parseFloat(prompt ("Digite uma senha"));

while (senha !== "1234"){
    senha = prompt("Senha incorreta. Tente novamente:");
    
}
alert("Senha correta! Acesso permitido.");
