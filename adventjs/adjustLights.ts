function adjustLights(lights: string[]): number {
  const getExpectedLight = (index: number) => (index % 2 === 0 ? '🔴' : '🟢')

  let greenStartMismatchCount = 0
  let redStartMismatchCount = 0

  for (let i = 0; i < lights.length; i++) {
    const expectedLight = getExpectedLight(i)
    if (lights[i] !== expectedLight) {
      greenStartMismatchCount++
    } else {
      redStartMismatchCount++
    }
  }

  return Math.min(greenStartMismatchCount, redStartMismatchCount)
}

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']))
// -> 1 (cambia la primera luz a verde)

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']))
// -> 0 (ya están alternadas)

console.log(adjustLights(['🔴', '🔴', '🔴']))
// -> 1 (cambias la segunda luz a 🟢)
