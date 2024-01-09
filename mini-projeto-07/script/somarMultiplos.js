// Criar uma função que leia os multiplos de 3 && 5 e some todos.


soma(10)


function soma(num){

multiplos3 = 0;
multiplos5 = 0;

for (let i = 0; i <= num; i++) {

    if(i % 3 === 0)
        multiplos3 += i

    if (i % 5 === 0)
        multiplos5 += i
}       

   let resultado = multiplos3 + multiplos5;

   return console.log(resultado)

}