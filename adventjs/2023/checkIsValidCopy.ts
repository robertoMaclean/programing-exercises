function checkIsValidCopy(original: string, copy: string): boolean {
  // Mayusculas se degradan en minusculas

  // Las letras se degradan en la siguiente serie a-z -> # -> + -> : -> ' '
  // Una vez degradadas las letras en los símbolos, se pueden continuar degradando.
  // Los caracteres que no son letras (como los dígitos) no se degradan.
  const degradationSymbols = ['#', '+', ':', '.', ' ']
  let currentSymbol = degradationSymbols.shift()
  if (original.length !== copy.length) return false
  for (let i = 0; i < original.length; i++) {
    if (original[i].toLowerCase() !== copy[i].toLowerCase()) {
      if (!currentSymbol.includes(copy[i])) {
        if (degradationSymbols.length >= 0) {
          currentSymbol += degradationSymbols.shift()
        }
        if (!currentSymbol.includes(copy[i])) {
          console.log('original', original[i])
          console.log('copy', copy[i])
          console.log('currentSymbol', currentSymbol)
          return false
        }
      } else {
        const symbolIndex = degradationSymbols.indexOf(original[i])
        if (symbolIndex >= 0) {
          for (let i = 0; i <= symbolIndex; i++) {
            currentSymbol += degradationSymbols[i]
          }
        }
      }
    }
  }
  return true
}
let isValid = null
const messages = [
  {
    original: 'Santa Claus is coming',
    copy: 'sa#ta Cl#us i+ comin#',
    expectedValue: true,
  },
  {
    original: 's#nta Cla#s is coming',
    copy: 'p#nt: cla#s #s c+min#',
    expectedValue: false,
  },
  { original: 'Santa Claus', copy: 's#+:. c:. s', expectedValue: true },
  { original: 'S#n:a Claus', copy: 'S#+:. c:. s', expectedValue: true },
  { original: 'Santa Claus', copy: 's#+:.#c:. s', expectedValue: false },
  { original: '3 #egalos', copy: '3 .+:# #:', expectedValue: true },
  { original: '3 regalos', copy: '3        ', expectedValue: true },
  { original: '3 regalos 3', copy: '3 .+:# #: 3', expectedValue: true },
]

for (const message of messages) {
  const { original, copy, expectedValue } = message
  const isValid = checkIsValidCopy(original, copy)
  if (isValid !== expectedValue) {
    console.log('error')
    console.log(`${original}  ${copy}`)
  }
}
