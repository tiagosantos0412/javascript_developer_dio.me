const entradas = [5, 3, 4, 10, 8, 7, 16];
let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}


module.exports = { gets, print }