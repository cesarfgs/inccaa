const somarNotas = function (nota1 ,nota2) {
	console.log(nota1 + nota2);
};

somarNotas(5.8 ,8.9);

const somarNotas2 = (nota1 ,nota2) => {
	console.log(nota1 + nota2);
};

somarNotas2(5.8 ,8.9);

const somarNotas3 = (nota1 ,nota2) => console.log(nota1 + nota2);

somarNotas3(5.8 ,8.9);

const somarNotas4 = (nota1 ,nota2) => nota1 + nota2;

console.log(somarNotas4(5.8 ,8.9));