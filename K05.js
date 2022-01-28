/*Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all 
possible rotation of the given string, in uppercase. */

function scrollingText(text){

    let rotation = text.split('');
    let scrolledTexts = [];
    let temp;

    while (scrolledTexts.length < text.length) {
      scrolledTexts.push(rotation.join('').toUpperCase());
      temp = rotation[0];
      for (let key in rotation) {
        key = Number(key);
        if(key < rotation.length - 1)
        rotation[key] = rotation[key + 1];
      }
      rotation[rotation.length - 1] = temp;
    }
    return scrolledTexts;
  }