//C1 - rie um programa que dado um número imprima a sua tabuada.

const numero = 7;

for(let i = 1; i <= 10; i++){
    let tabuada = numero * i;
    console.log(`${numero} x ${i} = ${tabuada}`);
}

//2 - Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado

const listaDeNumeros = [1,2,3,4,5,6,7,8,9,10];
const numerosPares = [];

for(i = 0; i< listaDeNumeros.length; i++){
    if(listaDeNumeros[i] % 2 == 0){
        numerosPares.push(listaDeNumeros[i])
    }
}

console.log(`Exibindo os números pares capturados:\n${numerosPares}`);

