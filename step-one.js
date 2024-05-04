// MÉTODOS DE CONSOLE

console.log("Hello Node!")

console.info("Alert") // Para levar uma informação
console.warn("Warn") // Para dar um alerta
console.error("Error") // Para mostrar um erro

// VARIÁVEIS

var a = 10 // foi substituido pelo let e não é uma boa prática usar ele
let b = 15
const c = 20 // não pode mudar/ variar o seu valor

a = 'oi'
b = 500

console.log(a, b)

// TIPOS DE DADOS

const name = "Maria" // string
console.log(name)
const age = 35 // number
console.log(age)
const isApproved = false // boolean
console.log(isApproved)

let lastName = null // nulo
console.log(lastName)
let address // undefined
console.log(address)

const languages = ['JavaScript', 'Python'] // array (é uma grande lista)
console.table(languages) // Cria uma tabela

const user = {
    name: 'Maria',
    email: 'maria@gmail.com'
} // objeto
console.table(user)

console.log(typeof name) // o typeof mostra o tipo de dado utilizado
console.log(typeof age)
console.log(typeof isApproved)
console.log(typeof lastName)
console.log(typeof address)
console.log(typeof languages)
console.log(typeof user)

// MÉTODOS STRINGS

const fullName = "Anna Gabriela Monteiro" // também pode ser declarado como full_name
console.log(fullName.length) // Usado para contar a quantidade (apenas a qeuntidade) dos caracteres

const stringToArray = fullName.split(' ') // transforma string em array; com as aspas com espaço dentro (' ') ele usa como parâmetro para separar o conteúdo em linhas do array. Se fosse (',') por exemplo, ele iria utilizar a vírgula como parâmetro
console.log(stringToArray)

console.log(fullName.toUpperCase()) // Deixa a string com caracteres maiúsculos
console.log(fullName.toLowerCase()) // Deixa a string com caracteres minúsculos

console.log(fullName.indexOf("Monteiro")) // Indica o index do inicio da palavra
console.log(fullName.slice(5, 13)) // Indica onde deve começar  e terminar de mostrar as palavras, considerando seu indice (mostra a string conforme o indice)

if (fullName.length > 10) {
    return console.log('aprovado')
} else {
    return console.log('reprovado')
}

// ou

fullName.length > 500 ? console.log('aprovado') : console.log('reprovado')
fullName.length > 500 && console.log('aprovado')

// If e else são utilizados quando há até 3 consições, caso tenha mais de 3 condições o switch deve ser utilizado

// MÉTODOS DE ARRAY

const list = ['a', 'b', 'c', 'd', 'e']
console.log(list.length) // conta a quantidade (apenas a quantidade) de itens do array
console.log(list[2]) // busca um item especifico no array (o indice deve ser indicado dentro do colchete).
console.log(list.indexOf("c")) // busca um item especifico no array (o item deve ser indicado dentro do colchete)

list[5] = 'f' // Inserir item no array sem método
console.table(list)

console.log(list.push('g')) // Inserir item no array com método
console.table(list)

console.table(list[list.length - 1]) // trazer o último item

list.pop() // remove o último item do array
console.log(list)
list.shift() // remove o primeiro item do array
console.log(list)
list.unshift('inicio') // Insere um item no inicio do array
console.log(list)

console.log(list.splice(2, 5)) // retira um pedaço do array pelo indice

// MÉTODO DE OBJETO

const product = { // declaração do Objeto
    name: 'camisa',
    price: 15.99,
    inStock: true,
    sizes: ['P', 'M', 'G']
}

console.log(product.name) // para ver um atributo do objeto; para percorrer as propriedades do objeto

product.color = ['Azul', 'Rosa'] // adicionando uma nova propriedade ao objeto
console.log(product)

const { price, sizes} = product //desestruturação de objeto
console.log(price, sizes)

// JSON
// JSON é um padrão de formatação de texto

const cat = {
    name: 'Bola de Neve',
    age: 2,
    race: 'Persa'
}
console.log(cat)

console.log(JSON.stringify(cat))  // Transforma uma dado que está em JSON  em string 
console.log(JSON.parse(cat)) // Transforma um dado em JSON

const catString = JSON.stringify(cat)  // Transforma uma dado que está em JSON  em string 
console.log(catString)

const catToJson = JSON.parse(catString) // Transforma um dado em JSON
console.log(catToJson)
