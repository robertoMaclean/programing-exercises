function drawGift(size: number, symbol: string): string {
  let draw = ''
  const drawLine = (size: number, i: number) => {
    let line = '#'
    const symbolToFill = i === size - 1 ? '#' : symbol
    const fillSpace = size - 2
    line += symbolToFill.repeat(fillSpace)
    line += '#'
    line += symbolToFill.repeat(Math.max(fillSpace - i, 0))
    line += i === size - 1 ? '' : '#'
    return line
  }
  for (let i = 0; i < size; i++) {
    if (i === 0) {
      draw += '#'.repeat(size)
      draw += symbol.repeat(Math.max(size - 2, 0))
      draw += size > 1 ? '#' : ''
    } else {
      const line = drawLine(size, i)
      draw = ' '.repeat(i) + line + '\n' + draw + line
    }
    draw += '\n'
  }
  return draw
}

console.log(drawGift(2, '-'))
