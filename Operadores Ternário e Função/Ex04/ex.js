/* Crie uma função que receba uma nota (de 0 a 100) e retorne "Aprovado"se a"Reprovado"caso contrário. */
function verificarAprovacao(nota){
   return nota >= 60? "Aprovado" : "Reprovado" 
}

let media = verificarAprovacao(75);
console.log(media);
