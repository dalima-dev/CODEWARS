//PRECISA OTIMIZAR!

function solequa(n) {
    const sol = [];
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= (n-i)/2; j++) {
            if(n == (i**2)-4*(j**2)) sol.unshift([i,j]);
        }
    }
    return sol;
}

//Esta aqui e mais otima que a solucao acima, mas ainda nao e suficiente.
function solequa(n) {
    const sol = [];
    for (let i = 1; i <= n/2; i++) {
        for (let j = 1; j <= n/i; j++) {
        if(n == i*j) sol.push([i,j]);
      }
    }  
    return sol.filter(a => (a[0]-a[1]) % -4 == 0).map(a => [(a[0]+a[1])/2, (a[1]-a[0])/4]).filter(a => a[0] >= 0 && a[1] >= 0);
}