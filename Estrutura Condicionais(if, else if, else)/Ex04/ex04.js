/*Receba uma idade e classifique a pessoa como "Criança" (0-12 anos), "Adolescente" (13-17 anos) ou "Adulto" (18 anos ou mais).*/
const age = 15;
if(age>=0 && age<=12){
    console.log("Criança");

}else if(age>=13 && age <=17){
    console.log("Adolescente");

}else{
    console.log("Adulto");
    
}