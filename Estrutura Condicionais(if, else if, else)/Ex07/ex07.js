/* Escreva uma calculadora que receba dois números e uma operação (+, -, *, /). Exiba o resultado da operação. */

let number1 = 500;
let number2 = 20
let operation = '/';

if(operation == '+'){
    console.log(number1 + number2);
    
}else if(operation === '-'){
    console.log(number1 - number2);
    
}else if(operation === '*'){
    console.log(number1 * number2);
    
}else if(operation === '/'){

    if (number2 !== 0) {
        console.log(number1 / number2);
        
}else{
    console.log("Erro: Divisão por zero");
}
}else{
    console.log("Operação inválida")
}