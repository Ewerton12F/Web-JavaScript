const prod1 = {}
prod1.nome = 'Celular'
prod1.preço = 4000
prod1['Desconto'] = 0.40 // evitar atributos com espaços

console.log(prod1)

const prod2 = {
    nome: 'Camisa',
    preço: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)