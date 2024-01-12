// Obter média de um Array
// 0-59 F
// 60-69 D 
// 70-79 C 
// 80-89 B 
// 90-100 A 


const array = [100, 100, 100];


console.log(mediaAluno(array))

function mediaAluno(nota){

    const media = Math.floor((nota[0] + nota[1] + nota[2]) / 3)

    switch (true){

        case (media <= 59):
            console.log('F', media)
        break

        case (media <= 69):
            console.log('D', media)
        break

        case (media <= 79):
            console.log('C', media)
        break

        case (media <= 89):
            console.log('B', media)
        break

        case(media <= 100):
            console.log('A',  media)
        break

        default: 
            console.log('Nota não reconhecida')
    }


    
}