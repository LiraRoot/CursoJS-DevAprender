// Receba uma quantidade de valores para avaliar
// Função que exibe se é par ou impar


let exibirResultado = parImpar(100);

function parImpar (limite) {
    for (i = 0; i <= limite; i++){
        if (i % 2 === 0){
            console.log(i, 'PAR')
        }
        else{
            console.log(i, 'IMPAR')
        }
    }
}