function findUniq(array) {
  const mySet = array
    .map((a) => a.toLowerCase())
    .map((string) =>
      [...new Set(string.split("").filter((a) => a != " "))].sort()
    )
    .map((a) => a.join(""));

  const tempSet = [...new Set(mySet)];
  if (tempSet.includes(" ")) tempSet.sort().reverse();
  const temp1 = tempSet[0];
  const temp2 = tempSet[1];
  let index;
  let count = 0;
  for (let i = 0; i < 3; i++) {
    if (mySet[i] == temp1) count++;
  }
  if (count == 1) index = mySet.indexOf(temp1);
  else index = mySet.indexOf(temp2);

  return array[index];
}
