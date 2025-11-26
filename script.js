//41 gnominhos do papai noel

 function calcularTempoEmbalagem(qtdPresentes, tempoPorPresente){
 return qtdPresentes * tempoPorPresente;
 }

 console.log("41) Tempo total:", calcularTempoEmbalagem(10,2), "minutos");
 console.log("41) Tempo total:", calcularTempoEmbalagem(5,3), "minutos");

//42 calculadora

 function calculadora(a,b){
 return a+b;
 }

 console.log ("42) 3 + 7 =", calculadora(3,7));
 console.log("42) 10 + 25 =", calculadora(10,25));
 console.log("24) -5 + 12 =", calculadora(-5,12));

//43 suco

 function ciadosuco(frutinha1,frutinha2,frutinha3){
 return `Seu suco de ${frutinha1}, ${frutinha2} e ${frutinha3} está prontinho!`;
 }

 console.log("43)", ciadosuco("Maça" , "Laranja" , "Banana"));
 console.log("43)", ciadosuco("Manga", "Gengibre" , "Rúcula"));

//44 energiadacasa

 function energiadacasa(kWhconsumidos,kWhvalor){
 return(kWhconsumidos*kWhvalor)
 }

 console.log("44) Total a pagar: R$",energiadacasa(250,0.75).toFixed(2));
console.log("44) Total a pagar: R$", energiadacasa(120,0.95).toFixed(2));

//45 ranking

 function ranking(atleta,posição){
 return `${nome} ficou em ${posicao} lugar!`;
 }
console.log("45)", ranking("Mariah", 1));
 console.log("45)", ranking("Cauã",1));

//46 alarme