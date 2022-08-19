document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updateProductNumber('phone-number-field', true);
    updateProductTotalPrice('phone-total-price', newPhoneNumber, 1200);
    updateFinalTotalPrice();
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updateProductNumber('phone-number-field', false);
    updateProductTotalPrice('phone-total-price', newPhoneNumber, 1200);
    updateFinalTotalPrice();
})

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateProductNumber('case-number-field', true);
    updateProductTotalPrice('case-total-price', newCaseNumber, 50);
    updateFinalTotalPrice();
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateProductNumber('case-number-field', false);
    updateProductTotalPrice('case-total-price', newCaseNumber, 50);
    updateFinalTotalPrice();
})