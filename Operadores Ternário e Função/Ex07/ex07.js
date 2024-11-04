/* Crie uma função que recebe um booleano isLoggedIn. Se o valor for true, retorne "Bem-vindo!", caso contrário, retorne "Por favor, faça login.". */

function verificarLogin(isLoggedIn){
    return isLoggedIn?  "Bem-vindo!" : "Por favor, faça login.";
}

let login = verificarLogin(true)
    console.log(login);
    