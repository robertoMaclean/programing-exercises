function findNaughtyStep(original, modified) {
    // Code here
    if (original.length > 0) {
        if (original[0] !== modified[0])
            return original.length > modified.length ? original[0] : modified[0];
        const restOfOriginalWord = original.substring(1, original.length);
        const restOfModifiedWord = modified.substring(1, modified.length);
        console.log(restOfOriginalWord, restOfModifiedWord);
        return findNaughtyStep(restOfOriginalWord, restOfModifiedWord);
    }
    if (modified.length > 0)
        return modified[0];
    return modified;
}
//En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.
//Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.
//Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.
let original = 'abcd';
let modified = 'abcde';
console.log(original, modified);
console.log('result', findNaughtyStep(original, modified)); // 'e'
original = 'stepfor';
modified = 'stepor';
console.log(original, modified);
console.log('result', findNaughtyStep(original, modified)); // 'f'
original = 'abcde';
modified = 'abcde';
console.log(original, modified);
console.log('result', findNaughtyStep(original, modified)); // ''
//A tener en cuenta:
//Siempre habrá un paso de diferencia o ninguno.
//La modificación puede ocurrir en cualquier lugar de la cadena.
//La secuencia original puede estar vacía
