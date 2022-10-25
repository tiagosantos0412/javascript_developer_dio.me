/*
const alunos = ['João', 'Vitor', 'Marina'];
alunos.push('Renan'); //insere um valor na próxima posição do array
alunos[4] = 'Camila;'
console.log(alunos);

console.log(alunos.pop()); //exclui  o último valor inserido no array
console.log(alunos.shift()); //exclui o primeiro valor inserido no array
console.log(alunos);
*/
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let = soma = 0;

for(let i = 0; i < notas.length; i++){
    const nota = notas[i];
    soma += nota;
}

const media = soma / notas.length;

console.log(soma);
console.log(media.toFixed(2));


