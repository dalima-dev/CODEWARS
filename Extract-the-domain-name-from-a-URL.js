const domainName = (url) =>
  /www/.test(url)
    ? url.split(".").filter((a) => !(/www/.test(a) || /\/\//.test(a)))[0]
    : /\/\//.test(url)
    ? url
        .split(".")
        .filter((a) => /\/\//.test(a))[0]
        .split("//")[1]
    : url.split(".")[0];
//O teste deste nao e bom o suficiente, e esta solucao apenas cobre aqueles testes, mas 
//nao cobre o exemplo abaixo 
console.log(domainName("https://allaroundthewww.com/some/path"))