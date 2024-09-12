function soma() {
    var numeros = [10, 20, 30];


    var numerosSomados = numeros.map(function (numero) {
        return numero + numero;
    });


    return numerosSomados;
}



// correcao

// reduce já um pouco mais avanaço, mas como tu usou map o reduce seria uma funcao melhor de manipular o array de numeros
const somaComReduce = (numeros) =>
{
    return numeros.reduce((num, acc) => num += acc, 0);        
}

// solucao sem reduce
const somaComFor = (numeros) => 
{
    let sum = 0;
    for (let i = 0; i < numeros.length; i++) 
    {
        sum += numeros[i];
    }
    return sum;
};


const arrayDeNumeros = [10, 5, 3, 3];
const somadosComReduce = somaComReduce(arrayDeNumeros);
const somadosComFor = somaComFor(arrayDeNumeros);

console.log(somadosComReduce);
console.log(somadosComFor);
