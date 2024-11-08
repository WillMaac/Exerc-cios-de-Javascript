/* Receba dois números entre 1 e 6 simulando dados. Se a soma for maior que 7, exiba "Você venceu". Se for 7, exiba "Empate". Caso contrário, exiba "Você perdeu". */

let given1 = 6;
let given2 = 4;
let sum = given1 + given2;

if(sum > 7){
    console.log("Você venceu");
    
}else if(sum === 7){
    console.log("Empate");

}else{
    console.log("Você perdeu");    
}
