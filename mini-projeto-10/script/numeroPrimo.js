

numeroPrimo(15)

function numeroPrimo(num) {
    for (let i = 2; i <= num; i++) {
        if (verificarPrimo(i)) console.log(i)
    }
}
function verificarPrimo(numero) {

    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true;
}