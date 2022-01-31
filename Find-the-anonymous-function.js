var FindFunction = function (func, arr) {
  for (const iterator of func) {
    if (typeof iterator === "function") return arr.filter(iterator);
  }
};
