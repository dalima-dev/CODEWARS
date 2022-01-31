function multi(arr) {
  let result = 1;
  for (const value of arr) {
    result *= value;
  }
  return result;
}
function add(arr) {
  let result = 0;
  for (const value of arr) {
    result += value;
  }
  return result;
}
function reverse(str) {
  return str.split("").reverse().join("");
}
