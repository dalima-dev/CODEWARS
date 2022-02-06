const gap = (num) =>
  num.toString(2).replace(/10+$/, "").replace(/^0+1/, "").match(/0+/g) != null
    ? num
        .toString(2)
        .replace(/10+$/, "")
        .replace(/^0+1/, "")
        .match(/0+/g)
        .sort((b, a) => a.length - b.length)[0].length
    : 0;
