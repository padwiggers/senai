const prompt = require("prompt-sync")();
let numero;

do{
   numero=Number(prompt("digite um número(0 para sair:)");)
   if(numero !==0){
    for(let i=1;i<+10;i++){
     console.log(`${numero}x$(i)=${numero * i}` );
    
        
    }
   
   }
   
}while(numero !==0)


