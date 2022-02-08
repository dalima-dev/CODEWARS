//Primeira tentativa. Confusao com o enunciado!
function chooseBestSum(t, k, ls) {
    if (ls.length < k) return null;
    const summations = [];
    let sum;
    for (let x = 0; x <= ls.length - k; x++) {
        sum = 0;
        for (let y = x; y < x + k - 1; y++) sum += ls[y];
        for (let z = x+k-1; z < ls.length; z++) summations.push(sum + ls[z]);   
    }
    return summations.filter(a => a <= t).sort((a, b) => b - a)[0] || [];
  }
  //Depois de perceber que se trata de um problema que utiliza combinacoes (enunciado nao
  //foi claro quanto a isso) e de muita pesquisa no assunto, descobri que este kata se
  //pode ser resolvido usando arvores com recursao (nao sei como).