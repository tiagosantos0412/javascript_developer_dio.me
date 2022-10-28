/**
 * Faça um programa que receba N (quantidade de números) e seus respectivos valores.
 * Imprima o maior número par e o menor número ímpar
 *      exemplo:
 *          Entrada:
 *              5
 *              10
 *              4
 *              1
 *              10
 *              8
 * 
 *          Saída:
 *              Maior número par: 10
 *              Menor número ímpar: 1
 */

const { gets, print } = require('./funcoes-auxiliares-ex2');

const lista = gets();
const listaNumeros = [];
const numerosPares = [];
const numerosImpares = [];
let maiorValorEncontrado = 0;
let menorValorEncontrado = gets();

//Identificando os números pares e ímpares
for(let i = 0; i < lista; i++){
    listaNumeros.push(gets());
    if(listaNumeros[i] %2 == 0){
        numerosPares.push(listaNumeros[i]);
    }else {
        numerosImpares.push(listaNumeros[i]);
    }
}

//Identificando o maior número par e o maior número ímpar
for(let i = 0; i < listaNumeros.length; i++){
    if(numerosPares[i] > maiorValorEncontrado){
        maiorValorEncontrado = numerosPares[i];
    }if(numerosImpares[i] < menorValorEncontrado){
        menorValorEncontrado = numerosImpares[i];
    }
}


print(`Maior número par: ${maiorValorEncontrado}`);
print(`Menor número ímpar: ${menorValorEncontrado}`);