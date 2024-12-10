function maxDistance(movements: string) {
  let countLeft = 0
  let countRight = 0
  let countAny = 0
  for (const movement of movements) {
    if (movement === '>') countRight++
    else if (movement === '<') countLeft++
    else countAny++
  }
  return Math.abs(countLeft - countRight) + countAny
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
