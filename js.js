const lastName = "Correa"
const age =27
const shoes = {
    sizes:[ 
        44,
        38,
        36, 
        35
    ],
    brand: "nike",
    since: 1994
}

const user = [
    {
        name: "Lucas",
        gender: "Male",
        age: 27,
        socialMedia: {
            linkedin: "",
            x: ""
        }
    },
    {
        name: "Maria",
        gender: "Female",
        age: 16,
        socialMedia: {
            linkedin: "",
            x: ""
        }
    },
    {
        name: "Lucas",
        gender: "Male",
        age: 19,
        socialMedia: {
            linkedin: "",
            x: ""
        }
    },
]

const numbers = [1, 2, 3, 4, 5]

const brands = ["nike", "adidas", "redley"]

const isAproved = true

// Método String
console.log(lastName.length)

// Método number transformando em string, depois usando um método string
console.log(age.toString().length) // mostra o tamanho de um número. É preciso transformar o número em uma string

// Percorrendo objeto
console.table(shoes.sizes)

// Retorna um valor especifico do array
console.log(shoes.sizes[0])

console.table(shoes.sizes.indexOf(44))

console.log(shoes.sizes[0])
console.log(shoes.sizes[1])
console.log(shoes.sizes[2])
console.log(shoes.sizes[3])

// Retorna todas as informações do array baseado no dado solicitado. Ele retorna todos os elemetos iguais 
const filterUser = user.filter(users => users.name === "Maria")
console.log(filterUser)

// Retorna todas as informações do array baseado no dado solicitado. Ele retorna apenas o primeiro elemento 
const findUser = user.find(users => users.name === "Maria")
console.log(filterUser)

console.log(user[1])
 
const filterUserGender = user.filter(users => users.gender === "Male")
console.log(filterUserGender)

const findUserGender = user.find(users => users.gender === "Male")
console.log(filterUserGender)

const filterUserAge = user.filter(users => users.age === 19)
console.log(filterUserAge)

const findUserAge = user.find(users => users.age === 19)
console.log(filterUserAge)

const namer = "Lucas do Espirito Santo Correa"
const splitNamer =namer.split(' ')

console.log(splitNamer[0], splitNamer[splitNamer.length - 1])

const number = [1, 2, 3, 4, 5]

const doubleNumber = number.map((num) => {
    return num *2
})

console.log(doubleNumber)

// Default
// function (){}

// Arrow Function
// () => {}