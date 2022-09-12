//PRIMEIRA BATERIA DE TESTES - ANALISANDO ACESSO DE PAI >>>> FILHO

const declarandoComconst1 = 'teste1 com const';
var declarandoComvar1 = 'teste1 com var';
let declarandoComlet1 = 'teste1 com let';

{
    
    console.log(declarandoComconst1);
    console.log(declarandoComvar1);
    console.log(declarandoComlet1);
    
}

//SEGUNDA BATERIA DE TESTES - ANALISANDO ACESSO DE FILHO >>>> PAI

{

    {
        const declarandoComconst2 = 'teste2 com const';
        var declarandoComvar2 = 'teste2 com var';
        let declarandoComlet2 = 'teste2 com let';
    }

//console.log(declarandoComconst2);
console.log(declarandoComvar2);
//console.log(declarandoComlet2);

}