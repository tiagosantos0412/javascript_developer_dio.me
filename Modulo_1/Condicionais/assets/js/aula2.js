// faça um programa para calcular o gasto de uma viagem
// Você cinco três variáveis, sendo elas:

// 1 - Preço do Etanol
// 2 - Preço da Gasolina
// 3 - O tipo de combustível
// 4 - Gasto médio de combustível do carro por KM
// 5 - Distãncia em KM da viagem
// Imprima o valor que será gasto de combustível nesta viagem.

const etanol = 3.89;
const gasolina = 4.69;
let tipoCombustivel;

tipoCombustivel = 'gasolina';
let kmPorLitro;
distanciaViagem = 185;
let distanciaPorLitro;
let total;

if(tipoCombustivel === 'gasolina'){
    kmPorLitro = 10;
    distanciaPorLitro = distanciaViagem / kmPorLitro;
    total = distanciaPorLitro * gasolina;
    console.log(total.toFixed(2));
}else if (tipoCombustivel === 'etanol') {
    kmPorLitro = 8;
    distanciaPorLitro = distanciaViagem / kmPorLitro;
    total = distanciaPorLitro * etanol;
    console.log(total.toFixed(2));
}else {
    console.log('Tipo de combustível inválido!!!')
}






