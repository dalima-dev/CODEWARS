function evenNumbers(array, number) {
  let evenArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 === 0) evenArr.unshift(array[i]);
    if (evenArr.length === number) break;
  }
  return evenArr;
}
