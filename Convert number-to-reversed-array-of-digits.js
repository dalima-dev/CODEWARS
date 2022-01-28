//Convert number to reversed array of digits.
/*Given a random non-negative number, you have to return the digits of this number within 
an array in reverse order.*/

function digitize(n) {
  if (n == 0) return [0];
  let m = 0;
  while (n / 10 ** m >= 1) m++;

  let arr = [];
  let a = n;
  let b = 0;
  let i = 1;

  do {
    a = a - b * 10 ** (m - i + 1);
    b = Math.floor(a / 10 ** (m - i));
    arr.unshift(b);
    i++;
  } while (i <= m);
  if (!(n % 2 == 0 && n % 5 == 0) && b == 0) arr.shift();
  return arr;
}
