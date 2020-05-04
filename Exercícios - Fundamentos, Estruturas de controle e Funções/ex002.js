/*
* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
* Equilátero: Os três lados são iguais;
* Isósceles: Dois lados iguais;
* Escaleno: Todos os lados são diferentes.
* Crie uma função que recebe os comprimentos dos três lados de um triângulo
* e retorne sua classificação quanto ao tamanho de seus lados. 
* (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).
*/

function triangulo(a, b, c) {
    if (a == b && b == c) {
        console.log(`O triângulo é EQUILÁTERO`)
    } else if (a != b && b == c) {
        console.log(`O triângulo é ISÓCELES`)
    } else if (b != a && a == c) {
        console.log(`O triângulo é ISÓCELES`)
    } else if (c != b && b == a) {
        console.log(`O triângulo é ISÓCELES`)
    } else if (a != b && b != c && a != c) {
        console.log(`O triângulo é ESCALENO`)
    }
}

triangulo(2, 2, 2)
triangulo(1, 2, 2)
triangulo(2, 1, 2)
triangulo(2, 2, 1)
triangulo(1, 2, 3)
