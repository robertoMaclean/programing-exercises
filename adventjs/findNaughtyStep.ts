function findNaughtyStep(original: string, modified: string) {
  if(original.length > 0) {
    if(original[0] !== modified[0]) return original.length > modified.length ? original[0]: modified[0]
    const restOfOriginalWord = original.substring(1, original.length)
    const restOfModifiedWord = modified.substring(1, modified.length)
    return findNaughtyStep(restOfOriginalWord, restOfModifiedWord)
  }
  if(modified.length > 0) return modified[0]
  return modified
}
