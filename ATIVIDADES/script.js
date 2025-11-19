const prompt = require("prompt-sync") ();
const opcao = prompt("escolheu: (A) soma, (B)subtração: ");

switch(opcao.toUpperCase()){
case "A" : console.log("voce escocheu soma");
break;
case "B" :console.log("voce escolheu subtração");
break;
default:console.log("opção invalida !!");

}
