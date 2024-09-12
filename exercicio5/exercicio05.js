var palavra = "PalavraEscolhida";

for(let i = 1; i <= palavra.length; i++){

    var invertido;
    invertido = (invertido + (palavra.slice(palavra.length - i, palavra.length - (i - 1))));
    console.log(invertido.slice(9));
}