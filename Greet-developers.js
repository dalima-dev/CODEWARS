function greetDevelopers(list) {
  for (const object of list) {
    object.greeting = `Hi ${object.firstName}, what do you like the most about ${object.language}?`;
  }
  return list;
}
