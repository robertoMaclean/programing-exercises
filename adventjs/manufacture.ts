export {}
function manufacture(gifts: string[], materials: string) {
  const giftThatCanBeManufacture = []
  for(const gift of gifts) {
    let isAbleToManufacture = false
    for(let i = 0; i < gift.length; i++) {
      const findedCharIndex = materials.indexOf(gift[i])
      if(findedCharIndex === -1) break
      if(i === gift.length - 1) {
        isAbleToManufacture = true;
      } 
    }
    if(isAbleToManufacture) giftThatCanBeManufacture.push(gift)
  }
  return giftThatCanBeManufacture 
}


