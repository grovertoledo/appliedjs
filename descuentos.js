// const priceBf = 99;
// 
// const discount = 15;
// 
// const priceAf = priceBf *(100 - discount) / 100
// 
// console.log({
//     priceBf,
//     discount,
//     priceAf,
// })

function showpriceAf(a, discountPorc) {
    const b = a * (100 - discountPorc) / 100;
    //console.log(`El precio final es de ${b}`);
    return b;
}

function onClickFinalPriceButton() {
    const inputPrice = document.getElementById("inputPrice");
    const price1 = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const discount = inputDiscount.value;
    const price2 = showpriceAf(price1, discount);
    const resultP = document.getElementById("resultingPrice");
    resultP.innerText = `El precio con descuento es $ ${price2}`;
}