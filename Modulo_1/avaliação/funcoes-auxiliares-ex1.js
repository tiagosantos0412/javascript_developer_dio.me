const media = 6;

function gets(){
    const valor = media;
    return valor;
}

function print(texto){
    console.log(texto);
}

const situacao = {
    aprovado : 'Aprovado',
    recuperacao: 'Recuperação',
    reprovado : 'Reprovado',
    numeroInvalido: 'Erro! Nota inválida!'
}

module.exports = { gets, print, situacao }