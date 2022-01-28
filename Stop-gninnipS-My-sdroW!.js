/*Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed (Just like the name of this Kata). Strings 
passed in will consist of only letters and spaces. Spaces will be included only when more 
than one word is present. */

function spinWords(string) {
  let stringSplit = string.split(/\b/);
  let spinnedWord = "";
  for (let i = 0; i < stringSplit.length; i++) {
    if (stringSplit[i].length >= 5) {
      let mem = "";
      for (let j = 0; j < stringSplit[i].length; j++) {
        mem += stringSplit[i][stringSplit[i].length - 1 - j];
      }
      stringSplit[i] = mem;
    }
    spinnedWord += stringSplit[i];
  }
  return spinnedWord;
}
