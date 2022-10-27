//const funcoes = require('./funcoes.auxiliares');

const { gets, print } = require('./funcoes.auxiliares');

const contador = gets();

const numerosSorteados = [];

for(let i = 0; i < contador; i++){
    const numeroSorteados = gets();
    numerosSorteados.push(numeroSorteados);
}

print(numerosSorteados);

let maiorValor = 0;

for(let i=0; i < numerosSorteados.length; i++){
    const numeroSorteados = numerosSorteados[i];
    if(numeroSorteados > maiorValor){
        maiorValor = numeroSorteados;
    }
}
print(maiorValor);