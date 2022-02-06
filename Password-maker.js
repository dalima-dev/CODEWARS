const makePassword = (phrase) =>
  phrase
    .match(/\b\w{1}/g)
    .map((a) =>
      a.toLowerCase() == "i"
        ? 1
        : a.toLowerCase() == "o"
        ? 0
        : a.toLowerCase() == "s"
        ? 5
        : a
    )
    .join("");