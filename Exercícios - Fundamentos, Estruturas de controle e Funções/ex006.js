/*
* 06) Elabore duas funções que recebem três parâmetros: capital inicial,
* taxa de juros e tempo de aplicação. A primeira função retornará o
* montante da aplicação financeira sob o regime de juros simples e a segunda
* retornará o valor da aplicação sob o regime de juros compostos.
*/
/*
* Exemplo juros simples:
* Capital inicial → 1200
* Taxa de juros → 2% = 2/100 = 0.02 ao mês (a.m.)
* Tempo de Aplicação → 10 meses
*
* juros = capIni * taxJur * temApl
* juros = 1200 * 0.02 * 10
* juros = 240
*
* montFim = capIni + juros
* montFim = 1200 + 240
* montFim = 1440
*/

function jurosSimples(capIni, taxJur, temApl) {
    juros = capIni * taxJur * temApl
    montFim = capIni + juros
    console.log(`O montante final é igual a ${montFim}`)
}

function jurosSimples(capIni, taxJur, temApl) {
    
}


