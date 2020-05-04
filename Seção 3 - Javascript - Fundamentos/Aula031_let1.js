var numero = 1 // Variáveis declaradas com a função "var" têm escopo global e escopo de função
{
    let numero = 2 // Variáveis declaradas com a função "let" tÊm escopo global, escopo de função e escopo de bloco
    console.log('dentro =', numero)
}
console.log('fora =', numero)