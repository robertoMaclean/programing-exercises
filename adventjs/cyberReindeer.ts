function cyberReindeer(road: string, time: number): string[] {
  const states = []
  let position = 0
  let downtime = time - 1
  states.push(road)
  let charList = road.split('')
  let currentChar = road[position] === 'S' ? '.' : road[position]
  while (downtime > 0) {
    if (time - downtime === 5) {
      road = road.replace(/\|/g, '*')
      charList = charList.join('').replace(/\|/g, '*').split('')
    }
    if (road[position + 1] === '|') {
      while (time - downtime > 5) {
        states.push(road)
        downtime--
      }
    } else {
      charList[position] = currentChar
      position++
      currentChar = road[position]
      charList[position] = 'S'
    }
    downtime--
    states.push(charList.join(''))
  }
  return states
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log(result)
