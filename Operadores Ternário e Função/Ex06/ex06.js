/* Suponha que tenha um sistema onde os produtos sejam categorizados com base no preço. Crie uma função que receba o preço de um produto e retorne "Barato"se"Moderado"se estiver entre 20 e 100, e "Caro"se for maior que 100. */

function verificarValor(preco){
    return preco < 20? "Barato" : preco <=100?"Moderado" : "Caro" 
}

let resultado = verificarValor(1010)
    console.log(resultado);