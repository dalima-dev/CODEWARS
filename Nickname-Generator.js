function nicknameGenerator(name) {
  return name.length > 3
    ? /[aeiou]/.test(name[2])
      ? name.slice(0, 4)
      : name.slice(0, 3)
    : "Error: Name too short";
}