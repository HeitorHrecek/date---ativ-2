
function dataMaior(data1, data2) {
    return data1 > data2 ? data1 : data2;
}


function calcularIntervalo(dataAntiga, dataNova) {
    if (dataAntiga > dataNova) {
        
        let temp = dataAntiga;
        dataAntiga = dataNova;
        dataNova = temp;
    }
    
    const milissegundosPorDia = 1000 * 60 * 60 * 24;
    const diferencaMs = dataNova - dataAntiga;
    const diferencaDias = Math.floor(diferencaMs / milissegundosPorDia);
    
    return diferencaDias;
}


function dataAtualFormatada() {
    const dataAtual = new Date();
    const hora = String(dataAtual.getHours()).padStart(2, '0');
    const minuto = String(dataAtual.getMinutes()).padStart(2, '0');
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();
    
    return `${hora}:${minuto} - ${dia}/${mes}/${ano}`;
}

 function exibirResultado(idDiv, resultado) {
    const outputDiv = document.getElementById(idDiv);
    outputDiv.innerText = resultado;
}

const data1 = new Date('2023-01-01');
const data2 = new Date('2023-02-01');
exibirResultado("resultado1", "Data maior: " + dataMaior(data1, data2));

const dataAntiga = new Date('2023-01-01');
const dataNova = new Date('2023-02-01');
exibirResultado("resultado2", "Intervalo: " + calcularIntervalo(dataAntiga, dataNova) + " dias");

exibirResultado("resultado3", "Data atual formatada: " + dataAtualFormatada());