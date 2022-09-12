var nomecliente = 'Isabella';
var sobrenomecliente = 'Oliveira';

console.log(nomecliente + ' ' + sobrenomecliente);
console.log(nomecliente.concat(' ').concat(sobrenomecliente));
console.log('O nome do cliente é: '.concat(nomecliente).concat(' ').concat(sobrenomecliente));
console.log(`O nome do cliente é ${nomecliente}`); //Utilizando back tick " ` " para adicionar variável no meio do texto
console.log(nomecliente.charAt(0)); //Enxerga o literal como um array e mostra o caractere que está no posição definida
console.log(nomecliente.slice(2)); //Pega o conteúdo do literal do índice indicado até seu final
console.log(nomecliente.slice(1,3)); //Pega o conteúdo do literal do índice indicado até o índice anterior ao final indicado
console.log(nomecliente.length); //Informa quantos caracteres existem no literal
console.log(nomecliente.toUpperCase()); //Define todos literais da string como maiusculos
console.log(nomecliente.toLowerCase()); //Define todos literais da string como minusculos
console.log(nomecliente.toLowerCase()); //Define todos literais da string como minusculos
console.log(typeof(nomecliente)); //Informa o tipo de conteúdo armazenado na variável

