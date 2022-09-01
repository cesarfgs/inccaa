var nome = 'joão';
var nota1 = 7;
var nota2 = 9;
var media = (nota1 + nota2) / 2;

console.log(media);
console.log((nota1 + nota2) / 2);
console.log('A aluno ' + nome + ' obteve média ' + media);
console.log('A aluno ' + nome + ' obteve média ' + (nota1 + nota2) / 2);
console.log('O aluno '.concat(nome).concat(' obteve média ').concat((nota1 + nota2) / 2));