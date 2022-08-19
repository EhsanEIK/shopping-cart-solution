function updateProductNumber(elementId, isIncrease) {
    const productNumberField = document.getElementById(elementId);
    const previousProductNumber = parseInt(productNumberField.value);
    let newProductNumber;
    if (isIncrease == true) {
        newProductNumber = previousProductNumber + 1;
    }
    else {
        newProductNumber = previousProductNumber - 1;
    }
    productNumberField.value = newProductNumber;
    return newProductNumber;
}

function updateProductTotalPrice(elementId, totalProduct, perProductPrice) {
    const productTotalPriceElement = document.getElementById(elementId);
    const totalProductPrice = totalProduct * perProductPrice;
    productTotalPriceElement.innerText = totalProductPrice;
}

function updateFinalTotalPrice() {
    const subTotalPriceElement = document.getElementById('subtotal-price');
    const taxAmountField = document.getElementById('tax-amount');
    const finalTotalPriceElement = document.getElementById('final-total-price');

    const phoneTotalPriceElement = document.getElementById('phone-total-price');
    const phoneTotalPrice = parseInt(phoneTotalPriceElement.innerText);

    const caseTotalPriceElement = document.getElementById('case-total-price');
    const caseTotalPrice = parseInt(caseTotalPriceElement.innerText);

    const subTotalPrice = phoneTotalPrice + caseTotalPrice;
    subTotalPriceElement.innerText = subTotalPrice;

    const taxAmount = (subTotalPrice * 10) / 100;
    taxAmountField.innerText = taxAmount;

    const finalTotalPrice = subTotalPrice + taxAmount;
    finalTotalPriceElement.innerText = finalTotalPrice;
}

function btnCheckOut() {
    alert('Your product is on the way!!!');
}


