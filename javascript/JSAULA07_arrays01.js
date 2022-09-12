var conjunto1 = [10, 30, 1, 3, 2, 'moto', true, '100',{cabelos: 'loiros', olhos: 'azuis'}];

console.log(conjunto1);
console.log(conjunto1[5]);
console.log(conjunto1[8]);
console.log(typeof(conjunto1[8].cabelos));
console.log('A cor dos cabelos é: ', conjunto1[8].cabelos);

conjunto1[8].cabelos = 'pretos';
console.log('A cor dos cabelos mudou para: ', conjunto1[8].cabelos);

var conjunto2 = [5,4,9,3];
console.log(conjunto2.sort());
