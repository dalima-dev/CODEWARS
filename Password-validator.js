const password = (str) =>
  str.length >= 8 &&
  Boolean(str.match(/[A-Z]/)) &&
  Boolean(str.match(/[a-z]/)) &&
  Boolean(str.match(/\d/));
