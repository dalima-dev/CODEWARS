function killer(suspectInfo, dead) {
  const suspects = Object.keys(suspectInfo);
  let count = 0;
  for (const sus of suspects) {
    for (const victm of dead) {
      if (suspectInfo[sus].includes(victm)) count++;
    }
    if (count == dead.length) return sus;
  }
}
