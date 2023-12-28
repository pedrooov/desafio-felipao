 //declarando variáveis
 let nome = "Flavin do Pneu"
 let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
 let exp
  
  //laço de repetição
 do {
 exp = Math.floor(Math.random() * 15000)
 } while (exp < 0 || exp > 15000);
  
  //estrutura de decisão
 if(exp <= 1000){
 nivel = "Ferro"
 }else if(exp >= 1001 && exp <= 2000){
 nivel = "Bronze"
 }else if(exp >= 2001 && exp <= 5000){
 nivel = "Prata"
 }else if(exp >= 5001 && exp <= 7000){
 nivel = "Ouro"
 }else if(exp >= 7001 && exp <= 8000){
 nivel = "Platina"
 }else if(exp >= 8001 && exp <= 9000){
 nivel = "Ascendente"
 }else if(exp >= 9001 && exp <= 10000){
 nivel = "Imortal"
 }else{
 nivel = "Radiante"
 }
 
  //saída
 console.log("O Heroi de nome " + nome + " está no nível de " + nivel)