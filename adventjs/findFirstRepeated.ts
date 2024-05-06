function findFirstRepeated(gifts: string[]) {
  const numbers = []
  for (const gif of gifts) {
    const indexOfGif = numbers.indexOf(gif)
    if (indexOfGif >= 0) return gif
    numbers.push(gif)
  }
  return -1
}
