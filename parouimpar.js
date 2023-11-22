function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "O número é par.";
    } else {
        return "O número é ímpar.";
    }
} 
console.log(verificarParOuImpar(2));


// ta certo, apenas um ajuste


function verificarParOuImpar(numero)
{
    if (numero % 2 === 0) return "Par";
    return "Impar";
}

// nao precisa adicionar else. se for verdadeiro ira retornar que o numero é par, então o resto da funcao nao será executada, porem, se a condição for falsa então o numero com certeza é impar, entao apenas retorne o impar
