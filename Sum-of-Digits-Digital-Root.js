const digital_root = n => n > 9 ? digital_root(String(n).split('').map(a => Number(a)).reduce((a,b) => a+b)
) : n;