//Conta o numero de divisores de um numero inteiro

function getDivisorsCnt(n){
  let numberDiv = 0;
  for(let i = 1; i <= n ;i++){
    if(n % i === 0){
      numberDiv++;
    }
  }
  return numberDiv;
}
