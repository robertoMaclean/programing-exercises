var reverseArray = function (inputArray, index) {
    if (index === void 0) { index = 0; }
    var midLength = Math.floor(inputArray.length / 2);
    if (midLength > index) {
        var reverseIndex = inputArray.length - index - 1;
        var aux = inputArray[reverseIndex];
        inputArray[reverseIndex] = inputArray[index];
        inputArray[index] = aux;
        reverseArray(inputArray, index + 1);
    }
};
var inputArray = [1, 2, 3, 4, 10];
console.log("input: ".concat(inputArray));
reverseArray(inputArray);
console.log("output: ".concat(inputArray));
