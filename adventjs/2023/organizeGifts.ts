function organizeGifts(gifts: string): string {
  let result = ''
  let numberPart = ''
  const numberRegex = /^[0-9]+$/
  for (let i = 0; i < gifts.length; i++) {
    if (numberRegex.test(gifts[i])) {
      numberPart += gifts[i]
    } else {
      let giftSize = parseInt(numberPart)
      for (let j = 0; j < Math.trunc(giftSize / 50); j++) {
        result += `[${gifts[i]}]`
      }
      giftSize = giftSize % 50
      for (let j = 0; j < Math.trunc(giftSize / 10); j++) {
        result += `{${gifts[i]}}`
      }
      giftSize = giftSize % 10
      if (giftSize > 0) result += '('
      while (giftSize > 0) {
        result += `${gifts[i]}`
        if (--giftSize === 0) result += ')'
      }
      numberPart = ''
    }
  }
  return result
}

const result1 = organizeGifts(`76a11b`)
console.log(result1)
