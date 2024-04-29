function manufacture(gifts, materials) {
    const giftThatCanBeManufacture = [];
    for (const gift of gifts) {
        let isAbleToManufacture = false;
        for (let i = 0; i < gift.length; i++) {
            const findedCharIndex = materials.indexOf(gift[i]);
            if (findedCharIndex === -1)
                break;
            if (i === gift.length - 1) {
                isAbleToManufacture = true;
            }
        }
        if (isAbleToManufacture)
            giftThatCanBeManufacture.push(gift);
    }
    return giftThatCanBeManufacture;
}
let gifts = ['tren', 'oso', 'pelota'];
let materials = 'tronesa';
console.log(manufacture(gifts, materials)); // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'
gifts = ['juego', 'puzzle'];
materials = 'jlepuz';
console.log(manufacture(gifts, materials)); // ["puzzle"]
gifts = ['libro', 'ps5'];
materials = 'psli';
console.log(manufacture(gifts, materials)); // []
