/*
Faça um programa JavaScript que receba 3 números informados pelo usuário e em seguida apresente uma mensagem de alerta informando qual é o maior número dentre os números informados */

let numero01 = prompt("Informe o primeiro número");
let numero02 = prompt("Informe o segundo número");
let numero03 = prompt("Informe o terceiro número");

if (numero01 > numero02 && numero01 > numero03){
  alert("O primeiro número informado é maior!");
}
else if (numero02 > numero01 && numero02 > numero03){
  alert  ("O segundo número informado é maior!");
}
else if (numero03 > numero01 && numero03 > numero02){
  alert("O terceiro número informado é maior!");
}
else mensagem = "Os números são iguais ou nada foi informado";
alert(mensagem);
