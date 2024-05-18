
/*  NODE (terminal):
    O node é o interpretador de código
    node + 'nome do arquivo'
    Ex: node ./step-two
*/

// FUNÇÂO

function Soma(n1, n2){ // dentro dos parenteses vão os parâmentros
    return n1+n2
}
console.log('O valor da soma é:', Soma(10,15)) // dentro dos parentese vão os valores dos parâmetros

// const timesImg = {
//         saoPaulo: 'img',
//         Palmeiras: 'img'
//     }

// src={time.defineTime(saoPaulo)}

function Subtracao(n1,n2){
    return n1-n2
}
console.log('O valor da subtração é:', Subtracao(20,15))

function Multiplicacao(n1,n2){
    return n1*n2
}
console.log('O valor da multiplicacao é:', Multiplicacao(10,2))

function Divisao(n1,n2){
    return n1/n2
}
console.log('O valor da subtração é:', Divisao(10,5))

function ValidaNome(name){
    if(name.length > 3){ // Valida se o nome possui mais de 3 caracteres
        return "Nome válido"

    } else {
        return "Nome inválido"
    }
}
console.log(ValidaNome('Anna'))