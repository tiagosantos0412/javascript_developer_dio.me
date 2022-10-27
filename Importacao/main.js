//const funcoes = require('./funcoes.auxiliares');

const { gets, print } = require('./funcoes.auxiliares');

const lista = gets();
let maiorValorEncontrado = 0;

for(let i  =0; i < lista; i++){
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);