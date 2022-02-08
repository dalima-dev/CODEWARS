function differentiate(f) {
  let a = f.split(/x\^?/);
  a[0] = a[0].replace(/^-$/, "-1");
  if (f == "x") return 1;
  if (f == "-x") return -1;
  if (!/x/.test(f)) return 0;
  if (/x$/.test(f)) return a[0];
  if (/^x/.test(f)) {
    a[0] = a[1];
    if (a[0] == -1) a[0] = "-";
    a[1] = a[1] - 1;
    if (a[1] == 1) return a[0] + "x";
    else return a[0] + "x^" + a[1];
  }
  b = a[0] * a[1];
  if (b == 1) b = "";
  c = a[1] - 1;
  if (c == 1) return b + "x";
  return b + "x^" + c;
}