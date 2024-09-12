const data = require("./dados.json");


function returnHighestValue(){
    
    var faturamento = 0;

    for (let i = 0; i < data.length; i++) {
        
        if(data[i].valor > faturamento) {
            faturamento = data[i].valor;
        }
    
    }
    return faturamento;
}

function returnLowestValoue(){
    
    var faturamento = 100000000000000000000000000000000;

    for (let i = 0; i < data.length; i++) {

        if(data[i].valor < faturamento && data[i].valor != 0){
            faturamento = data[i].valor;
        }
    }
    return faturamento;
}

function calculaMedia(){
    
    var j = 0;

    for(let i = 0; i < data.length; i++){
        if(data[i].valor == 0){
            j += 1;
        }
    }

    var soma = 0;

    for(let i = 0; i < data.length; i++) {
        if(data[i].valor != 0){
            soma = soma + data[i].valor;
        }
    }

    media = soma / (data.length - j);
    
    return media;
}

function diaMesMaiorQueMedia(){

    var media = calculaMedia();

    var k = 0;

    for(let i = 0; i < data.length; i++){
        if(data[i].valor > media){
            k += 1;
        }
    }

    return k;
}

console.log("O maior valor é: " + returnHighestValue());
console.log("O menor valor é: " + returnLowestValoue());
console.log("Média: "+ calculaMedia() + "; Quantidade de dias com faturamento acima da média: " + diaMesMaiorQueMedia());