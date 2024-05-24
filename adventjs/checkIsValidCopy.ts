function checkIsValidCopy(original: string, copy: string): boolean {
  const degradationSymbols = ['#', '+', ':', '.', ' ']
  let degradation = ''
  const charDegradation = {}
  for(let i = 0; i < original.length; i++) {
    if(original[i] === original[i].toUpperCase()) {
       
    } 
  }
  return true
}

checkIsValidCopy(
  'Santa Claus is coming',
  'sa#ta Cl#us i+ comin#'
) // true
checkIsValidCopy(
  's#nta Cla#s is coming',
  'p#nt: cla#s #s c+min#'
) // false (por la p inicial)
checkIsValidCopy('Santa Claus', 's#+:. c:. s') // true
checkIsValidCopy('Santa Claus', 's#+:.#c:. s')
