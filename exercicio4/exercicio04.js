var SP = 67836.43;
var RJ = 36678.66;
var MG = 29229.88;
var ES = 27165.48;
var Outros = 19849.53;

var total = SP + RJ + MG + ES + Outros;

function calculaPercentual(estado){
    var perc = (estado * 100) / total;
    return perc;
}

console.log("SP: " + calculaPercentual(SP).toFixed(2) + "%");
console.log("RJ: " + calculaPercentual(RJ).toFixed(2) + "%");
console.log("MG: " + calculaPercentual(MG).toFixed(2) + "%");
console.log("ES: " + calculaPercentual(ES).toFixed(2) + "%");
console.log("Outros: " + calculaPercentual(Outros).toFixed(2) + "%");