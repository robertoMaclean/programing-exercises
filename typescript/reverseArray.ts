const reverseArray = (inputArray: number[], index = 0) => {
  const midLength = Math.floor(inputArray.length / 2);
  if (midLength > index) {
    const reverseIndex = inputArray.length - index - 1;
    const aux = inputArray[reverseIndex];
    inputArray[reverseIndex] = inputArray[index];
    inputArray[index] = aux;
    reverseArray(inputArray, index + 1);
  }
};

const inputArray = [1, 2, 3, 4, 10];
console.log(`input: ${inputArray}`);
reverseArray(inputArray);
console.log(`output: ${inputArray}`);
