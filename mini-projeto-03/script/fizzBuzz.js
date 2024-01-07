const resultado = fizzBuzz(15);


function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Digite um número'
    if (entrada % 5 === 0 && entrada % 3 === 0)
        return 'FizzBuzz'
    if (entrada % 3 === 0)
        return 'Fizz'
    if (entrada % 5 === 0)
        return 'Buzz'
    return entrada
    
}

console.log(resultado);