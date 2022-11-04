/**
 * 1 - Crie uma classe para representar carros.
 * Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
 * Crie um  método que dado a quantidade de km e o preço do combustível nos dê o valor 
 * gasto em reais para realizar este percurso.
 * 
 */

class Carro{
    marca;
    modelo;
    cor;
    consumoPorLitro;

    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }

    calculo(distanciaViagem){
      const distanciaPorLitro = distanciaViagem / this.consumoPorLitro;
      const total = distanciaPorLitro * valorCombustivel;
      const ConsumoMedioPorKm = 1 / this.consumoPorLitro;
      const consumoTotalDeCombustivel = ConsumoMedioPorKm * distanciaViagem;
      console.log(`Seu carro ${this.marca}:
      do modelo ${this.modelo},
      cor ${this.cor}
      gastará R$ ${total.toFixed(2)} reais
      para ${consumoTotalDeCombustivel.toFixed(2)} litros de combustível`);
    }
}

let distanciaViagem = 70;
let valorCombustivel = 5;

const onix = new Carro('Chevrolet', 'Onix');
onix.cor = 'prata';
onix.consumoPorLitro = 10;

const kwid = new Carro('Renault', 'kwid');
kwid.cor = 'preto';
kwid.consumoPorLitro = 12;


kwid.calculo(distanciaViagem);
onix.calculo(distanciaViagem);