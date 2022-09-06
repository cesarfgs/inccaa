
const declarandoComconst = 'const nivel 0';
var declarandoComvar = 'var nivel 0';
let declarandoComlet = 'let nivel 0';

{
    //console.log(declarandoComconst);
    console.log(declarandoComvar);
    //console.log(declarandoComlet);
    
    const declarandoComconst = 'const nivel 1';
    var declarandoComvar = 'var nivel 1';
    let declarandoComlet = 'let nivel 1';
    {        
        //console.log(declarandoComconst);
        console.log(declarandoComvar);
        //console.log(declarandoComlet);
                
        const declarandoComconst = 'const nivel 2';
        var declarandoComvar = 'var nivel 2';
        let declarandoComlet = 'let nivel 2';
        {
            //console.log(declarandoComconst);
            console.log(declarandoComvar);
            //console.log(declarandoComlet);

            const declarandoComconst = 'const nivel 3';
            var declarandoComvar = 'var nivel 3';
            let declarandoComlet = 'let nivel 3';
        }
    }
}

console.log(declarandoComconst);
console.log(declarandoComvar);
console.log(declarandoComlet);