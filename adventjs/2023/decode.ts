export {}

function decode(message: string): string {
  const charStack: string[] = []
  let i = 0
  let decodedMessage = ''
  while (i < message.length) {
    if (message[i] === '(') charStack.push(message[i])
    else if (message[i] === ')' && charStack.length) {
      let topChar = charStack.pop()
      const auxStack: string[] = []
      while (topChar !== '(' && topChar) {
        const numberOfOpenParenthesis = charStack.filter(
          (numb) => numb === '('
        ).length
        if (numberOfOpenParenthesis > 1) auxStack.push(topChar)
        else decodedMessage += topChar
        topChar = charStack.pop()
      }
      for (const char of auxStack) {
        charStack.push(char)
      }
    } else if (message[i] !== ')' && charStack.length) {
      charStack.push(message[i])
    } else if (message[i] !== ')') {
      decodedMessage += message[i]
    }
    i++
  }
  return decodedMessage
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

const d = decode('((nta)(sa))')
console.log(d)
