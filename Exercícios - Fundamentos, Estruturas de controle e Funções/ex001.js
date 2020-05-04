/* 
* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre 
* no console a soma, subtração, multiplicação e divisão desses valores. 
*/

function operacoes(x, y) {
    soma = x + y
    subt = x - y
    mult = x * y
    divi = x / y
    console.log(`A soma entre ${x} e ${y} é: ${soma}`)
    console.log(`A subtração entre ${x} e ${y} é: ${subt}`)
    console.log(`A multiplicação entre ${x} e ${y} é: ${mult}`)
    console.log(`A divisão entre ${x} e ${y} é: ${divi}`)
}

operacoes(100, 5)