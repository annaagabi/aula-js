/*  NODE (terminal):
    O node é o interpretador de código
    node + 'nome do arquivo'
    Ex: node ./step-two
*/

// FUNÇÂO

function Soma(n1, n2) { // dentro dos parenteses vão os parâmentros
    return n1 + n2
}
console.log('O valor da soma é:', Soma(10, 15)) // dentro dos parentese vão os valores dos parâmetros

// const timesImg = {
//         saoPaulo: 'img',
//         Palmeiras: 'img'
//     }

// src={time.defineTime(saoPaulo)}

function Subtracao(n1, n2) {
    return n1 - n2
}
console.log('O valor da subtração é:', Subtracao(20, 15))

function Multiplicacao(n1, n2) {
    return n1 * n2
}
console.log('O valor da multiplicacao é:', Multiplicacao(10, 2))

function Divisao(n1, n2) {
    return n1 / n2
}
console.log('O valor da subtração é:', Divisao(10, 5))

function ValidaNome(name) { // Valida se o nome possui mais de 15 caracteres
    if (name.length > 15) {
        return "É um dicionário"
    } else if (name.length > 3) { // Valida se o nome possui mais de 3 caracteres
        return "Nome válido"

    } else {
        return "Nome inválido"
    }
}
console.log(ValidaNome('Anna'))

function ValidaCPF(name) {
    switch (name) { // Retorna algo de acordo com o parametro
        case "Anna": // Válida o parâmetro recebido
            return "123456789"

        case "Lucas":
            return "456782135"

        case "Carla":
            return "123674569"

        default: // Caso nenhum caso seja verdadeiro
            return "Nome não cadastrado"
    }
}
console.log(ValidaCPF('Anna'))
console.log(ValidaCPF('Carla'))

function addSr(name) { // interpolar texto em uma variável

    if (typeof (name) === 'string') {
        return `Sr(a). ${name}`

    } else {
        return "Digite um nome válido"
    }

}
console.log(addSr("João"))

function Aprovacao(nota) {

    // Tem a mesma funcionalidade do if;
    return (typeof (nota) === 'number') && (nota > 7 ? "Aprovado" : "Reprovado") // Ternário
    // Verifica se a entrada é de um número
    // Caso a média seja maior que 7 ele mostrará "aprovado", caso não seja ele mostrará "reprovado"
    // O ":" é equivalenete ao "senão"
    // O ternário só serve caso haja apenas duas alternativas
}

console.log(Aprovacao(8))
console.log(Aprovacao("Texto")) // Retorna "falso"

function AprovacaoIf(nota) {

    if (typeof (nota) === 'number') {
        if(nota>7){
            return 'Aprovado'
        }
        else if(nota<7 && nota>4){
            return 'Reprovado'
        }
        else{
            return 'Recuperação'
        }

    }else{
        return "Digite um número válido"
    }
    
}

console.log(AprovacaoIf(8))
console.log(AprovacaoIf(6))
console.log(AprovacaoIf(4))
console.log(AprovacaoIf("Texto"))

function verificaNome(nome){
    const stringToArray = nome.split(' ') 
    return stringToArray[0] + ' ' + stringToArray[2]
}

console.log(verificaNome("Anna Gabriela Monteiro"))

