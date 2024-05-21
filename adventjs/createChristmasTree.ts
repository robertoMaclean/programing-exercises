function createChristmasTree(ornaments: string, height: number): string {
  let tree = ''
  let count = 0
  for (let i = 0; i < height; i++) {
    tree += ' '.repeat(height - i - 1)
    for (let j = 0; j <= i; j++) {
      tree += ornaments[count++ % ornaments.length] + (j < i ? ' ' : '')
    }
    tree += '\n'
  }
  const leftSpaces = ' '.repeat(Math.abs(height - 1))
  return `${tree}${leftSpaces}|\n`
}

console.log(createChristmasTree('123', 10))
