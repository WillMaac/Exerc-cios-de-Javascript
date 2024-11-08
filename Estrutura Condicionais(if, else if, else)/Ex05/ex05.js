/* Receba o valor de uma compra e aplique um desconto de 5% se o valor for entre 100 e 200, ou um desconto de 10% se o valor for maior que 200. */
let value = 150;

if(value >200){
    value *= 0.9;
    
}else if (value >= 100){
    value *= 0.95;
    
}else{
    console.log("Você não recebeu um desconto");  
}
console.log(`Valor final: ${value.toFixed(2)}`);




