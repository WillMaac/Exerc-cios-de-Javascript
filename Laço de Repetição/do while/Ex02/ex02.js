/* Peça ao usuário para inserir uma senha. Continue pedindo até que ele digite a senha correta ("12345"). Exiba uma mensagem de sucesso quando a senha estiver correta. */


let senha;
do{
    let senha = parseInt(prompt("Digite a senha:"));
    

}while(senha !== "12345");

console.log("Senha correta! Acesso permitido.");


