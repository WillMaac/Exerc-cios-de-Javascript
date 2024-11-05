const nota = prompt("Digite sua nota")
function classificarNota(nota) {
    switch (true) {
        case nota >= 90:
            return 'Excelente';
        case nota >= 70:
            return 'Bom';
        case nota >= 50:
            return 'Satisfatório';
        default:
            return 'Insuficiente';
    }
}
console.log(classificarNota(nota));  // Saída: Bom
