function carro() {
    var cor = 'prata';
    var modelo = 'celta';
    var ano = 2010;
}
console.log(carro);
console.log('Cor:', cor);
console.log('Modelo:', modelo);
console.log('Ano:', ano);

// correção

const carro = {
    cor: 'prata',
    modelo: 'celta',
    ano: 2010
};

console.log(`Cor: {carro.cor}`)
console.log(`Modelo: {carro.modelo}`)
console.log(`Ano: {carro.ano}`)
