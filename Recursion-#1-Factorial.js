function factorial(fact, n = fact){
    if(n == 0) return 1;
    if(n == 1) return fact
    else
    return factorial(fact*(n - 1), n-1);
  }