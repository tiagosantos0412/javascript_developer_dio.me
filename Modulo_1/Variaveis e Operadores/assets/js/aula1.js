// faça um programa para calcular o gasto de uma viagem
// Você terá três variáveis, sendo elas:

// 1 - Preço do combustível
// 2 - Gasto médio de combustível do carro por KM
// 3 - Distãncia em KM da viagem
// Imprima o valor que será gasto de combustível nesta viagem.

let precoCombustivel;
let distanciaViagem;
let kmPorLitro;

precoCombustivel = 4.69;
distanciaViagem = 185;
kmPorLitro = 10;

let distanciaPorLitro = distanciaViagem / kmPorLitro;
let total = distanciaPorLitro * precoCombustivel;

console.log(total.toFixed(2));




