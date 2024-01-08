const computador = {
    
    fonte : '600w',
    gpu: '4060TI',
    cpu: 'ryzen 5 5600',
    ano: 2023

}

mostrarString(computador);

function mostrarString(obj){
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop, obj[prop])
}