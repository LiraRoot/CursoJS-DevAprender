// const velocidade = medirVelocidade()
// const pontos = somarPontos()

// function medirVelocidade (velocidade){
//     if (velocidade >= 70)
//         console.log('Ok')
//     else 
//         console.log('Você passou do limite de velocidade, pontos adicionados na carteira: ')
// }

// function somarPontos(ponto){
//     if (medirVelocidade > 70){
//         ponto ++

//         return console.log(ponto)
//     }
// }


//-----------------------------------------------

let velocidade = medirVelocidade(70);


function medirVelocidade(velocidade){

    if (velocidade <= 70)
        console.log('OK')
    else {
        pontos = Math.floor(((velocidade - 70) / 5))
            if (pontos >= 12)
                console.log('Carteira suspensa')
            else
                console.log('Quantidade de pontos adicionados na carteira: ', pontos)
    }
}