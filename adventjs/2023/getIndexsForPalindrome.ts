function getIndexsForPalindrome(word: string): number[] | null {
  const len = word.length
  const mid = Math.floor(len / 2)
  const isOddLength = len % 2 !== 0
  const mismatches: number[] = []

  const getMirrorIndex = (index: number) => len - 1 - index

  for (let i = 0; i < mid; i++) {
    if (word[i] !== word[getMirrorIndex(i)]) {
      mismatches.push(i)
      if (mismatches.length > 2) return null
    }
  }

  if (mismatches.length === 0) return []

  if (mismatches.length === 1 && isOddLength) {
    const index = mismatches[0]
    const mirrorIndex = getMirrorIndex(index)
    const midIndex = mid

    if (word[index] === word[midIndex]) return [midIndex, mirrorIndex]
    if (word[mirrorIndex] === word[midIndex]) return [index, midIndex]
    return null
  }

  if (mismatches.length === 2) {
    const [i, j] = mismatches
    const mirrorI = getMirrorIndex(i)
    const mirrorJ = getMirrorIndex(j)

    if (word[i] === word[mirrorJ] && word[j] === word[mirrorI]) return [i, j]
    return null
  }

  return null
}

console.log(getIndexsForPalindrome('anna')) // []
console.log(getIndexsForPalindrome('abab')) // [0, 1]
console.log(getIndexsForPalindrome('abac')) // null
console.log(getIndexsForPalindrome('aaaaaaaa')) // []
console.log(getIndexsForPalindrome('aaababa')) // [1, 3]
console.log(getIndexsForPalindrome('caababa')) // null
console.log(getIndexsForPalindrome('rotaratov')) // [4, 8]
