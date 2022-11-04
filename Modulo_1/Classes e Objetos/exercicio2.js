/**
 * Crie uma classe para representar pessoas.
 * Para cada pessoa teremos os atributos, nome, peso e altura.
 * As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura)
 * 
 */

class Pessoa {
    nome;
    peso;
    altura;

    constructor(peso, altura){
        this.peso = peso;
        this.altura = altura
    }

    calcularIMC(){
        const imc = this.peso / (this.altura * this.altura);
        return imc.toFixed(2);
    }
}

const jose = new Pessoa(70, 1.75);
console.log(jose.calcularIMC());

const tiago = new Pessoa(93, 1.73);
console.log(tiago.calcularIMC());