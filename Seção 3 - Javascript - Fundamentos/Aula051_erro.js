function tratarErrorELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw false
    throw 'mensagem'
}

function imprimiNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase()) + '!!!'
    } catch (e) {
        tratarErrorELancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = {nome: 'Roberto'}
imprimiNomeGritado(obj)