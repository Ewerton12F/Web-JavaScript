// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // Tirando os atributos "nome" e "idade" do objeto "pessoa"
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // Criando variáveis "n" e "i"
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada) 

const { endereço: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

// const { conta: { ag, num } } = pessoa // É necessário que o caminho até o dado está declarado
// console.log(ag, num)                  // O filho de um dado não declarado retornará erro