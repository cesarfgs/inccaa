const CUSTO = 100;
const PORCENTAGEMLUCRO = 0.23935826592956;
let valordevenda;

console.log('custo: ', CUSTO);
console.log('Lucro em %: ' + PORCENTAGEMLUCRO);
console.log('Valor da venda: ' + valordevenda);
valordevenda = CUSTO + CUSTO * PORCENTAGEMLUCRO;
console.log('Valor da venda: ' + valordevenda.toFixed(2));

const numero1 = 4;
const numero2 = 3;
const numero3 = '10';

console.log(typeof(numero1));
console.log(typeof(numero2));
console.log(typeof(numero3));

console.log(numero1**numero2);
console.log(numero1*numero2);
console.log(numero1*numero3); //Observe que, mesmo a variável numero3 sendo do tipo literal, o javascript fez o calculo
console.log(numero1+numero3); //Como a variável numero3 é tipo literal, apenas para operações de soma o javascript entenderá que deve concatenar os conteúdos;

