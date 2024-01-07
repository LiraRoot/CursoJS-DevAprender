
// primeira tentativa (falha por não fazer em function)

// let n1 = 15;
// let n2 = 6;
// let nMax;

// if (n1 > n2){
//         nMax = n1
//     }

//     else {
//         nMax = n2
//     }
// console.log(nMax);

// ---------------------------------------------------------------------------

// corrigindo o erro

// let resultado = acharMaximo(15, 10)

// console.log(resultado)

// function acharMaximo (n1, n2){

//     if (n1 > n2) {
//       return n1
//     }

//     else return n2

// }

// ---------------------------------------------------------------------------

// terceira forma (mais eficiente, utilizando operador ternario)

let resultado = acharMaximo(15, 22)
console.log(resultado)

function acharMaximo(n1, n2){
    return n1 > n2 ? n1 : n2;
}

