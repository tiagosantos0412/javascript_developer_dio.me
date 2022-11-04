/**
 * Fça um programa que receba a média de um aluno
 * Caso a média seja < 5 imprima "Reprovado"
 * Caso a média seja >= 5 e < 7 imprima "Recuperação"
 * Caso a média seja >= 7 imprima "Aprovado"
 */

const { gets, print, situacao } = require('./funcoes-auxiliares-ex1');

const media = gets();

if(media < 5 && media >= 0){
    print(situacao.reprovado);
}else if(media >= 5 && media < 7){
    print(situacao.recuperacao);
}else  if(media >= 7){
    print(situacao.aprovado);
}else {
    print(situacao.numeroInvalido);
}