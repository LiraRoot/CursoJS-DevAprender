let endereco = {
    Rua: 'Rua das flores',
    Cidade: 'Recife',
    CEP: '5005235'
}

function exibirEndereco(endereco){

    for (let chave in endereco)
        console.log(chave, endereco[chave])
    

}

exibirEndereco(endereco)
