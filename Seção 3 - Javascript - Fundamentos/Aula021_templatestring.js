const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!` // Interpolação
// É considerado o espaçamento e a quebra de linha.
console.log(concatenacao, template)

// expressões...
console.log(`1 + 1 = ${1 + 1}`)

 const up = texto => texto.toUpperCase()
 console.log(`Ei... ${up('cuidado')}!`)