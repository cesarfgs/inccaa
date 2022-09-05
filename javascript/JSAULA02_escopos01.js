var a = 1;
let b = 2;
const c = 3;

console.log('Imprimindo variável A do bloco principal no bloco principal: ' + a);
console.log('Imprimindo variável B do bloco principal no bloco principal: ' + b);
console.log('Imprimindo variável C do bloco principal no bloco principal: ' + c);

{
    console.log('Imprimindo variável A do bloco principal no bloco "extra": ' + a); //tem acesso, pois o bloco é escopo filho do escopo principal
    console.log('Imprimindo variável B do bloco principal no bloco "extra": ' + b); //tem acesso, pois o bloco é escopo filho do escopo principal
    console.log('Imprimindo variável C do bloco principal no bloco "extra": ' + c); //tem acesso, pois o bloco é escopo filho do escopo principal
    
    var aa = 11;
    let bb = 22;
    const cc = 33;

    console.log('Imprimindo variável AA do bloco principal no bloco "extra": ' + aa);
    console.log('Imprimindo variável BB do bloco principal no bloco "extra": ' + bb);
    console.log('Imprimindo variável CC do bloco principal no bloco "extra": ' + cc);
}

console.log('Imprimindo variável A do bloco principal APÓS o bloco "extra": ' + a);
console.log('Imprimindo variável A do bloco principal APÓS o bloco "extra": ' + b);
console.log('Imprimindo variável A do bloco principal APÓS o bloco "extra": ' + c);

console.log('Imprimindo variável AA do bloco "extra" no bloco principal: ' + aa); //Declarando com VAR, sempre "vaza" do escopo. Declarações deste tipo tem característica GLOBAL
//console.log(bb); //Declarado dentro do bloco, não "vaza"
//console.log(cc); //Declarado dentro do bloco, não "vaza"