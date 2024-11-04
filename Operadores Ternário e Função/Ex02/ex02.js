/* Escreva uma função que receba a temperatura (em graus Celsius) e retorne"Quente"se"Frio"e"Agradável"caso contrário */

function verificarClima(temperatura){
    return temperatura > 25 ? "quente" : temperatura < 15 ? "Frio" : "Agradavel"
}

const Resultado =  verificarClima(26)

console.log(Resultado);
