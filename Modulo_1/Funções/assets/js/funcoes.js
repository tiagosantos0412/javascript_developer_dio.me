
const etanol = 3.89;
const gasolina = 4.69;
let tipoCombustivel;

tipoCombustivel = 'etanol';
let kmPorLitro;
distanciaViagem = 185;
let distanciaPorLitro;
let total;

function calculo(){
    if(tipoCombustivel === 'gasolina'){
        kmPorLitro = 10;
        distanciaPorLitro = distanciaViagem / kmPorLitro;
        total = distanciaPorLitro * gasolina;
        return total.toFixed(2);
    }else if (tipoCombustivel === 'etanol') {
        kmPorLitro = 8;
        distanciaPorLitro = distanciaViagem / kmPorLitro;
        total = distanciaPorLitro * etanol;
        return total.toFixed(2);
    }else {
        console.log('Tipo de combustível inválido!!!')
    }
}

console.log(calculo());







