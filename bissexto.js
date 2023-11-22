function bissextoOuNao(ano) {
    if (ano = 366) {
        return 'ano é bissexto';
    }
    else {
        return 'ano não é bissexto';
    }
}
console.log(bissextoOuNao(366));


// correcao

/*
* ano bissexto é divisivel por 4 e não é divisivel por 100, ou é apenas divisivel por 400
*/

const checaAnoBissexto = (ano) =>
{
    return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
}

const ano = 2023;
const ehBissexto = checaAnoBissexto(ano);

if (ehBissexto)
{
    console.log(`O ano ${ano} é um ano bissexto!!!!`)
} else
{
    console.log(`O ano ${ano} não é um ano bissexto`)
}
